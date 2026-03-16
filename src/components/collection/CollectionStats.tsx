import { useState, useEffect } from 'react';
import { collectionTabs } from '@utils/collectionTabs';
import {
  MediumLogo,
  FacebookLogo,
  GithubLogo,
  DiscordLogo,
  YoutubeLogo,
  TelegramLogo,
} from 'phosphor-react';

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import { CollectionProps } from '@services/collection/getCollectionService';

interface CollectionStatsProps {
  stats: {
    assets: number;
    burned: number;
    burned_by_template: {
      burned: number;
      template_id: number;
    }[];
    burned_by_schema: {
      burned: number;
      schema_name: string;
    }[];
    templates: number;
    schemas: number;
  };
  collection: CollectionProps;
}

export function CollectionStats({ stats, collection }: CollectionStatsProps) {
  const [floorPrice, setFloorPrice] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://xpr.api.atomicassets.io/atomicmarket/v1/sales?state=1&collection_name=${collection.collection_name}&sort=price&order=asc&limit=1`
        );
        const json = await res.json();
        if (json.success && json.data?.length > 0) {
          const sale = json.data[0];
          const precision = sale.price?.token_precision || 4;
          const raw = parseInt(sale.listing_price, 10);
          if (!isNaN(raw)) {
            const xpr = raw / Math.pow(10, precision);
            setFloorPrice(
              xpr.toLocaleString(undefined, {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4,
              }) + ' XPR'
            );
          }
        }
      } catch {
        // silently fail
      }
    })();
  }, [collection.collection_name]);

  const statsContent = [
    ['Name', collection.collection_name],
    ['Created', new Date(Number(collection.created_at_time)).toLocaleString()],
    ['NFTs', stats.assets ?? 0],
    ['Burned', stats.burned ?? 0],
    ['Templates', stats.templates],
    ['Schemas', stats.schemas],
    ...(floorPrice ? [['Floor Price', floorPrice]] : []),
  ];

  const creatorInfo =
    collection.data.creator_info && JSON.parse(collection.data.creator_info);
  const socials =
    collection.data.socials && JSON.parse(collection.data.socials);

  const hasCreatorInfo =
    creatorInfo &&
    Object.keys(creatorInfo).filter((key) => creatorInfo[key] !== '').length >
      0;
  const hasSocials =
    socials &&
    Object.keys(socials).filter((key) => socials[key] !== '').length > 0;

  function handleSocialIcon(social) {
    switch (social) {
      case 'twitter':
        return <XIcon size={24} />;
        break;
      case 'facebook':
        return <FacebookLogo size={24} />;
        break;
      case 'medium':
        return <MediumLogo size={24} />;
        break;
      case 'github':
        return <GithubLogo size={24} />;
        break;
      case 'discord':
        return <DiscordLogo size={24} />;
        break;
      case 'youtube':
        return <YoutubeLogo size={24} />;
        break;
      case 'telegram':
        return <TelegramLogo size={24} />;
        break;

      default:
        break;
    }
  }

  return (
    <section className="container">
      <div className="flex flex-col py-8 gap-12">
        <h2 className="headline-2">{collectionTabs[0].name}</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          <div className="flex-1">
            <h3 className="headline-3 mb-4">Description</h3>
            <p className="body-1">{collection.data.description}</p>
          </div>
          <div className="flex-1">
            <h3 className="headline-3 mb-4">Stats</h3>
            {statsContent.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between py-3 body-2 text-white border-b border-neutral-700"
              >
                <span>{label}</span>
                <span className="font-bold">{value}</span>
              </div>
            ))}
          </div>
          {hasCreatorInfo && (
            <div className="flex-1">
              <h3 className="headline-3 mb-4">Company details</h3>
              {Object.keys(creatorInfo).map((key) => {
                if (creatorInfo[key]) {
                  return (
                    <div
                      key={key}
                      className="flex justify-between py-3 body-2 text-white border-b border-neutral-700"
                    >
                      <span>{key}</span>
                      <span className="font-bold">{creatorInfo[key]}</span>
                    </div>
                  );
                }
              })}
            </div>
          )}
          {hasSocials && (
            <div className="flex-1">
              <h3 className="headline-3 mb-4">Social medias</h3>
              {Object.keys(socials).map((key) => {
                if (socials[key]) {
                  return (
                    <a
                      key={key}
                      href={socials[key]}
                      target="_blank"
                      className="font-bold underline"
                      rel="noreferrer"
                    >
                      <div className="flex justify-start gap-4 py-3 body-2 text-white border-b border-neutral-700">
                        {handleSocialIcon(key)}
                        <span className="font-bold">{socials[key]}</span>
                      </div>
                    </a>
                  );
                }
              })}
            </div>
          )}
          <div className="flex-1">
            <h3 className="headline-3 mb-4">Authorized accounts</h3>
            <div className="flex flex-row gap-2 flex-wrap">
              {collection.authorized_accounts.map((item, index) => (
                <span key={item} className="body-1">
                  {item}
                  {index !== collection.authorized_accounts.length - 1
                    ? ','
                    : '.'}
                </span>
              ))}
            </div>
          </div>
          {collection.notify_accounts.length > 0 && (
            <div className="flex-1">
              <h3 className="headline-3 mb-4">Notified accounts</h3>
              <div className="flex flex-row gap-2 flex-wrap">
                {collection.notify_accounts.map((item, index) => (
                  <span key={item} className="body-1">
                    {item}
                    {index !== collection.notify_accounts.length - 1
                      ? ','
                      : '.'}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
