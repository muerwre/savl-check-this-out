import { useCallback } from "react";

import axios from "axios";

import { SearchNFTItem } from "~/model/SearchNFTItem";

import { useAPI } from "../APIProvider";
import { paths } from "../constants";

interface Params {
  search?: string;
}

interface NFT {
  address: string;
  uri: string;
}
interface Result {
  data: { nfts: NFT[] };
}

export const useSearchByAddressQuery = () => {
  const client = useAPI();

  return useCallback(
    async ({ search }: Params): Promise<SearchNFTItem[]> => {
      if (!search) {
        return [];
      }

      return client
        .get<Result>(paths.search(search))
        .then((it) => it.data?.data?.nfts?.map(resultToSearchNFTItem) || []);
    },
    [client]
  );
};

const resultToSearchNFTItem = (it: NFT): SearchNFTItem => ({
  address: it.address,
  uri: it.uri,
});

export const searchByAddressForSSR = (search: string) =>
  axios
    .get<Result>(paths.search(search))
    .then((it) => it.data?.data?.nfts?.map(resultToSearchNFTItem) || []);
