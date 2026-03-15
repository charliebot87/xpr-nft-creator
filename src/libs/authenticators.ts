import { appName } from '@configs/globalsConfig';
import chainsConfig from '@configs/chainsConfig';
import { blockchains } from '@utils/blockchains';

// Build authenticators - WebAuth is loaded dynamically on client
function buildAuthenticators() {
  const result = {};

  Object.keys(chainsConfig).forEach((chainKey) => {
    const { authenticators: auths, chainId } = chainsConfig[chainKey];
    const blockchain = blockchains.find((b) => b.chainId === chainId);

    if (blockchain && auths && auths.length > 0) {
      result[chainId] = auths.map(
        (Authenticator) =>
          new Authenticator([blockchain], {
            appName,
            disableGreymassFuel: true,
          })
      );
    } else {
      // Empty authenticators - will be populated client-side
      result[chainId] = [];
    }
  });

  return result;
}

export const authenticators = buildAuthenticators();
