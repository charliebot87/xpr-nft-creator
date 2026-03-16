import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ipfsEndpoint } from '@configs/globalsConfig';

const API_BASE = 'https://xpr.api.atomicassets.io';

interface SaleAsset {
  asset_id: string;
  name: string;
  data: Record<string, any>;
  template?: {
    template_id: string;
    immutable_data: Record<string, any>;
  };
}

interface Sale {
  sale_id: string;
  seller: string;
  listing_price: string;
  listing_symbol: string;
  collection_name: string;
  price?: {
    token_precision: number;
    amount: number;
  };
  assets: SaleAsset[];
}

function getIpfsImage(data: Record<string, any>): string {
  const hash = data?.img || data?.image || data?.video || '';
  if (!hash) return '';
  if (hash.startsWith('http')) return hash;
  return `${ipfsEndpoint}/${hash}`;
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

interface CollectionForSaleProps {
  chainKey: string;
  collectionName: string;
}

export function CollectionForSale({
  chainKey,
  collectionName,
}: CollectionForSaleProps) {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${API_BASE}/atomicmarket/v1/sales?state=1&collection_name=${collectionName}&sort=price&order=asc&limit=50`
        );
        const json = await res.json();
        if (json.success) setSales(json.data || []);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    })();
  }, [collectionName]);

  if (loading) {
    return (
      <section className="container py-8">
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent" />
        </div>
      </section>
    );
  }

  if (sales.length === 0) {
    return (
      <section className="container py-8">
        <div className="bg-neutral-800 px-8 py-24 text-center rounded-xl">
          <h4 className="title-1 text-neutral-400">
            No NFTs currently for sale
          </h4>
          <p className="text-neutral-500 mt-2 text-sm">
            Check back later or list your own!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sales.map((sale) => {
          const asset = sale.assets?.[0];
          if (!asset) return null;
          const immData = asset?.template?.immutable_data || asset?.data || {};
          const imgUrl = getIpfsImage(immData);
          const name =
            asset?.name ||
            asset?.data?.name ||
            immData?.name ||
            `#${asset.asset_id}`;

          return (
            <Link
              key={sale.sale_id}
              href={`/${chainKey}/collection/${collectionName}/asset/${asset.asset_id}`}
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
                <div className="absolute top-2 right-2 bg-[#00ff88]/90 text-neutral-900 text-xs font-bold px-2 py-1 rounded">
                  FOR SALE
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1 flex-1">
                <h3 className="text-white font-semibold text-sm truncate">
                  {name}
                </h3>
                <p className="text-[#00ff88] font-bold text-lg mt-auto">
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
    </section>
  );
}
