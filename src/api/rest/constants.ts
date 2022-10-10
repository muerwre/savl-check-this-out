export const paths = {
  search: (id: string, blockchain = defaultBlockchain) =>
    `https://dev.solhall.io/v1/nft/${blockchain}/address/${id}`,
  metadata: (blockchain = defaultBlockchain) =>
    `https://dev.solhall.io/v1/nft/${blockchain}/metadata`,
};

export const defaultBlockchain = "solana";
