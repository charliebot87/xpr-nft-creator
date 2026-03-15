import { withUAL } from 'ual-reactjs-renderer';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Header } from '@components/Header';

import { collectionTabs } from '@utils/collectionTabs';
import { isAuthorizedAccount } from '@utils/isAuthorizedAccount';

import {
  getCollectionService,
  CollectionProps,
} from '@services/collection/getCollectionService';

interface PluginProps {
  ual: any;
}

function Plugin({ ual }: PluginProps) {
  const router = useRouter();
  const { plugin, chainKey, type, collection: collectionName } = router.query;
  const [collection, setCollection] = useState<CollectionProps | null>(null);

  const pluginType = (type as string) || 'default';
  const pluginName = plugin as string;
  const chain = chainKey as string;

  useEffect(() => {
    if (collectionName && chain) {
      getCollectionService(chain, {
        collectionName: collectionName as string,
      })
        .then(({ data }) => {
          setCollection(data.data);
        })
        .catch(() => {
          // Collection not found, continue without it
        });
    }
  }, [collectionName, chain]);

  if (!pluginName || !chain) return null;

  const DynamicComponent = dynamic(() =>
    import(`../../../plugins/${pluginType}/${pluginName}`).then((mod) => mod)
  );

  const hasAuthorization = isAuthorizedAccount(ual, collection) as boolean;

  return (
    <>
      {collection && (
        <Header.Root
          breadcrumb={[
            [
              hasAuthorization ? 'My Collections' : 'Explorer',
              hasAuthorization ? `/${chain}` : `/${chain}/explorer`,
            ],
            [
              collection.collection_name,
              `/${chain}/collection/${collection.collection_name}`,
            ],
            [
              collectionTabs[5].name,
              `/${chain}/collection/${collection.collection_name}?tab=${collectionTabs[5].key}`,
            ],
            [pluginName],
          ]}
        ></Header.Root>
      )}

      <DynamicComponent />
    </>
  );
}

export default withUAL(Plugin);
