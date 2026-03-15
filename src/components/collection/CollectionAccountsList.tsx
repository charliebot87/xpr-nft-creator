import { useState, useEffect } from 'react';

import {
  collectionAccountsService,
  AccountProps,
} from '@services/collection/collectionAccountsService';

import { Card } from '@components/Card';
import { CardContainer } from '@components/CardContainer';
import { SeeMoreButton } from '@components/SeeMoreButton';

import { collectionTabs } from '@utils/collectionTabs';
import protonRpc from '@services/proton-rpc';

interface CollectionAccountsListProps {
  chainKey: string;
  initialAccounts: AccountProps[];
  collectionName: string;
}

export function CollectionAccountsList({
  chainKey,
  initialAccounts,
  collectionName,
}: CollectionAccountsListProps) {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [isLoading, setIsLoading] = useState(false);
  const [avatars, setAvatars] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchAvatars() {
      const avs: Record<string, string> = {};
      for (const acc of accounts) {
        try {
          const data = await protonRpc.getAccountData(acc.account);
          if (data.avatar) {
            avs[acc.account] = `data:image/jpeg;base64,${data.avatar}`;
          }
        } catch {}
      }
      setAvatars(avs);
    }
    fetchAvatars();
  }, [accounts]);

  const limit = 12;
  const currentPage = Math.ceil(accounts.length / limit);
  const offset = (currentPage - 1) * limit;
  const isEndOfList = accounts.length % limit > 0;

  async function handleSeeMoreAccounts() {
    setIsLoading(true);

    try {
      const { data } = await collectionAccountsService(chainKey, {
        collectionName,
        page: currentPage + 1,
        offset,
      });

      setAccounts((state) => [...state, ...data.data]);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  }

  return (
    <section className="container">
      <h2 className="headline-2 my-8 flex items-center gap-2">
        {collectionTabs[4].name}
      </h2>

      {accounts.length > 0 ? (
        <>
          <CardContainer>
            {accounts.map((account) => (
              <Card
                key={account.account}
                image={
                  avatars[account.account]
                    || `https://robohash.org/${account.account}.png?set=set1`
                }
                title={account.account}
                subtitle={`${account.assets} NFTs`}
              />
            ))}
          </CardContainer>

          {!isEndOfList && (
            <div className="flex justify-center mt-8">
              <SeeMoreButton
                isLoading={isLoading}
                onClick={handleSeeMoreAccounts}
              />
            </div>
          )}
        </>
      ) : (
        <div className="bg-neutral-800 px-8 py-24 text-center rounded-xl">
          <h4 className="title-1">There is no account in this collection</h4>
        </div>
      )}
    </section>
  );
}
