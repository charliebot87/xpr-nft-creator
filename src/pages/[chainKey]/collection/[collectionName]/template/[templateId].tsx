import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { withUAL } from '@libs/ual-compat';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ipfsEndpoint, appName } from '@configs/globalsConfig';

import { getTemplateService } from '@services/template/getTemplateService';
import {
  getCollectionService,
  CollectionProps,
} from '@services/collection/getCollectionService';
import {
  collectionAssetsService,
  AssetProps,
} from '@services/collection/collectionAssetsService';
import {
  collectionSchemasService,
  SchemaProps,
} from '@services/collection/collectionSchemasService';
import {
  collectionTemplatesService,
  TemplateProps,
} from '@services/collection/collectionTemplatesService';

import { isAuthorizedAccount } from '@utils/isAuthorizedAccount';
import { collectionTabs } from '@utils/collectionTabs';
import { handlePreview } from '@utils/handlePreview';

import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Attributes } from '@components/Attributes';
import { CollectionHints } from '@components/collection/CollectionHints';

const API_BASE = 'https://xpr.api.atomicassets.io';

interface TemplateSale {
  sale_id: string;
  seller: string;
  listing_price: string;
  listing_symbol: string;
  collection_name: string;
  price?: { token_precision: number };
  assets: {
    asset_id: string;
    name: string;
    template_mint: string;
    data: Record<string, any>;
    template?: { immutable_data: Record<string, any> };
  }[];
}

function formatXprPrice(listing_price: string, precision = 4): string {
  const raw = parseInt(listing_price, 10);
  if (isNaN(raw)) return '0.0000 XPR';
  const xpr = raw / Math.pow(10, precision);
  return (
    xpr.toLocaleString(undefined, {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    }) + ' XPR'
  );
}

function getIpfsImage(data: Record<string, any>): string {
  const hash = data?.img || data?.image || data?.video || '';
  if (!hash) return '';
  if (hash.startsWith('http')) return hash;
  return `${ipfsEndpoint}/${hash}`;
}

interface TemplateViewProps {
  ual: any;
  chainKey: string;
  template: TemplateProps;
  assets: AssetProps[];
  schemas: SchemaProps[];
  templates: TemplateProps[];
  collection: CollectionProps;
}

function Template({
  ual,
  chainKey,
  template,
  assets,
  schemas,
  templates,
}: TemplateViewProps) {
  const collection = template.collection;
  const [images, setImages] = useState([]);
  const [templateSales, setTemplateSales] = useState<TemplateSale[]>([]);
  const [loadingSales, setLoadingSales] = useState(true);

  useEffect(() => {
    handlePreview(template, setImages);
  }, [template]);

  useEffect(() => {
    (async () => {
      setLoadingSales(true);
      try {
        const res = await fetch(
          `${API_BASE}/atomicmarket/v1/sales?state=1&template_id=${template.template_id}&sort=price&order=asc&limit=20`
        );
        const json = await res.json();
        if (json.success) setTemplateSales(json.data || []);
      } catch {
        // silently fail
      } finally {
        setLoadingSales(false);
      }
    })();
  }, [template.template_id]);

  const hasAuthorization = isAuthorizedAccount(ual, collection);
  const lowestSale = templateSales.length > 0 ? templateSales[0] : null;

  return (
    <>
      <Head>
        <title>{`Template #${template.template_id} - ${appName}`}</title>
      </Head>

      <Header.Root
        breadcrumb={[
          [
            hasAuthorization ? 'My Collections' : 'Explorer',
            hasAuthorization ? `/${chainKey}` : `/${chainKey}/explorer`,
          ],
          [
            collection.collection_name,
            `/${chainKey}/collection/${collection.collection_name}`,
          ],
          [
            collectionTabs[2].name,
            `/${chainKey}/collection/${collection.collection_name}?tab=${collectionTabs[2].key}`,
          ],
          [`${template.name}`],
        ]}
      >
        <Header.Content
          title={template.name}
          subtitle={`Template #${template.template_id}`}
        >
          {hasAuthorization && (
            <Link
              href={`/${chainKey}/collection/${collection.collection_name}/template/${template.template_id}/edit`}
              className="btn mt-4 w-fit"
            >
              Lock Template
            </Link>
          )}
        </Header.Content>
        <Header.Banner images={images} />
      </Header.Root>

      {hasAuthorization && (
        <CollectionHints
          assets={assets}
          schemas={schemas}
          chainKey={chainKey}
          templates={templates}
          collection={collection}
        />
      )}

      <Tab.Group>
        <Tab.List className="tab-list mb-14">
          <Tab className="tab">Information</Tab>
          <Tab className="tab">Immutable data</Tab>
        </Tab.List>
        <Tab.Panels className="container">
          <Tab.Panel>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-0 justify-center">
              <div className="grid grid-cols-1">
                <Card
                  href={`/${chainKey}/collection/${collection.collection_name}`}
                  image={
                    collection.img ? `${ipfsEndpoint}/${collection.img}` : ''
                  }
                  title={collection.name}
                  subtitle={`by ${collection.author}`}
                />
              </div>
              <div className="md:w-1/2 w-full">
                <div className="w-full md:max-w-sm mx-auto">
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Schema</span>
                    <Link
                      href={`/${chainKey}/collection/${collection.collection_name}/schema/${template.schema.schema_name}`}
                      className="font-bold underline"
                    >
                      {template.schema.schema_name}
                    </Link>
                  </div>
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Burnable</span>
                    <span className="font-bold">
                      {template.is_burnable ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Transferable</span>
                    <span className="font-bold">
                      {template.is_transferable ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Issued Supply</span>
                    <span className="font-bold">{template.issued_supply}</span>
                  </div>
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Max Supply</span>
                    <span className="font-bold">
                      {parseInt(template.max_supply, 10) || 'Infinite'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <Attributes.List>
              {template.schema.format.map((schema) => (
                <Attributes.Item
                  key={schema.name}
                  name={schema.name}
                  type={schema.type}
                  value={template.immutable_data[schema.name]}
                />
              ))}
            </Attributes.List>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* Marketplace Listings for this Template */}
      <section className="container py-8">
        {lowestSale && (
          <div className="rounded-xl border border-[#00ff88]/20 bg-neutral-900/90 p-4 md:p-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-sm">Lowest Price:</span>
              <span className="text-[#00ff88] text-2xl font-bold">
                {formatXprPrice(
                  lowestSale.listing_price,
                  lowestSale.price?.token_precision || 4
                )}
              </span>
            </div>
          </div>
        )}

        {templateSales.length > 0 && (
          <>
            <h3 className="text-xl font-bold text-white mb-4">
              💰 Copies for Sale
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {templateSales.map((sale) => {
                const asset = sale.assets?.[0];
                if (!asset) return null;
                const immData =
                  asset?.template?.immutable_data || asset?.data || {};
                const imgUrl = getIpfsImage(immData);
                const name =
                  asset?.name ||
                  asset?.data?.name ||
                  immData?.name ||
                  `#${asset.asset_id}`;

                return (
                  <Link
                    key={sale.sale_id}
                    href={`/${chainKey}/collection/${collection.collection_name}/asset/${asset.asset_id}`}
                    className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 hover:border-[#00ff88]/40 transition-all duration-200 flex flex-col group"
                  >
                    <div className="aspect-square bg-neutral-800 relative overflow-hidden">
                      {imgUrl ? (
                        <img
                          src={imgUrl}
                          alt={name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-600 text-sm">
                          No Image
                        </div>
                      )}
                      <div className="absolute top-2 left-2 bg-neutral-900/80 text-white text-xs font-bold px-2 py-1 rounded">
                        #{asset.template_mint || '?'}
                      </div>
                    </div>
                    <div className="p-3 flex flex-col gap-1">
                      <h4 className="text-white font-semibold text-sm truncate">
                        {name}
                      </h4>
                      <p className="text-[#00ff88] font-bold text-lg">
                        {formatXprPrice(
                          sale.listing_price,
                          sale.price?.token_precision || 4
                        )}
                      </p>
                      <p className="text-neutral-500 text-xs truncate">
                        Seller: {sale.seller}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}

        {!loadingSales && templateSales.length === 0 && (
          <div className="text-center py-8 text-neutral-500">
            <p>No copies currently for sale</p>
          </div>
        )}
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const chainKey = params.chainKey as string;
  const collectionName = params.collectionName as string;
  const templateId = params.templateId as string;

  try {
    const [
      { data: collection },
      { data: templates },
      { data: schemas },
      { data: assets },
      { data: template },
    ] = await Promise.all([
      getCollectionService(chainKey, { collectionName }),
      collectionTemplatesService(chainKey, { collectionName }),
      collectionSchemasService(chainKey, { collectionName }),
      collectionAssetsService(chainKey, { collectionName }),
      getTemplateService(chainKey, { collectionName, templateId }),
    ]);

    return {
      props: {
        chainKey,
        assets: assets.data,
        schemas: schemas.data,
        template: template.data,
        templates: templates.data,
        collection: collection.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default withUAL(Template);
