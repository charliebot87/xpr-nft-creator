import { appName } from '@configs/globalsConfig';
import chainsConfig from '@configs/chainsConfig';
import { blockchains } from '@utils/blockchains';

function buildAuthenticators() {
  const result = {};

  Object.keys(chainsConfig).forEach((chainKey) => {
    const { authenticators: auths, chainId } = chainsConfig[chainKey];
    const blockchain = blockchains.find((b) => b.chainId === chainId);

    if (blockchain && auths && auths.length > 0) {
      // Filter out any undefined authenticators (ESM import failures)
      const validAuths = auths.filter(
        (Auth) => Auth != null && typeof Auth === 'function'
      );

      result[chainId] = validAuths.map(
        (Authenticator) =>
          new Authenticator([blockchain], {
            appName,
            disableGreymassFuel: true,
          })
      );
    } else {
      result[chainId] = [];
    }
  });

  return result;
}

export const authenticators = buildAuthenticators();
