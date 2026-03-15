const INDEXER_URL = 'https://indexer.protonnz.com';

export interface SimpleDexToken {
  tokenId: number;
  symbol: string;
  name: string;
  creator: string;
  graduated: boolean;
  price: number;
  mcap: number;
  change24h?: number;
  volume24h?: number;
}

export interface TokenHolder {
  account: string;
  amount: number;
  walletAmount?: number;
  lpAmount?: number;
}

export async function getSimpleDexCreators(): Promise<string[]> {
  try {
    const res = await fetch(`${INDEXER_URL}/api/tokens?fields=compact`, {});
    const data = await res.json();
    const creators = new Set<string>();
    for (const token of data.tokens || []) {
      creators.add(token.creator);
    }
    return Array.from(creators);
  } catch {
    return [];
  }
}

export async function getSimpleDexTokens(): Promise<SimpleDexToken[]> {
  try {
    const res = await fetch(`${INDEXER_URL}/api/tokens?fields=compact`, {});
    const data = await res.json();
    return data.tokens || [];
  } catch {
    return [];
  }
}

export async function getTokenHolders(tokenId: number): Promise<TokenHolder[]> {
  try {
    const res = await fetch(
      `${INDEXER_URL}/api/tokens/${tokenId}/holders?limit=500`,
      {}
    );
    const data = await res.json();
    return data.holders || [];
  } catch {
    return [];
  }
}
