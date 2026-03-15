import { appName, requestAccount } from '@configs/globalsConfig';
import * as chainsConfig from '@configs/chainsConfig';
import { blockchains } from '@utils/blockchains';

export const authenticators = Object.keys(chainsConfig).reduce(
  (accumulator, chainKey) => {
    const { authenticators: auths, chainId } = chainsConfig[chainKey];
    const blockchain = blockchains.find(
      (blockchain) => blockchain.chainId === chainId
    );

    if (!blockchain || !auths) {
      return { ...accumulator, [chainId]: [] };
    }

    // Filter out non-constructor authenticators (ESM import can return non-function)
    const validAuths = auths.filter(
      (Auth) => Auth != null && typeof Auth === 'function'
    );

    return {
      ...accumulator,
      [chainId]: validAuths.map(
        (Authenticator) =>
          new Authenticator([blockchain], {
            appName,
            disableGreymassFuel: true,
            transportOptions: {
              requestAccount,
            },
            selectorOptions: {
              appName,
              dialogRootNode: '#__next',
            },
          })
      ),
    };
  },
  {}
);
