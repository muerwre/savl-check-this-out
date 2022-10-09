import useSWR, { KeyLoader } from "swr";

import { useNFTParamsQuery } from "~/api/rest/search/useNFTParamsQuery";

interface Params {
  address: string;
  uri: string;
  owner: string;
}

const getKey: (params: Params) => KeyLoader = (params) => () => {
  return JSON.stringify(params);
};

const parseKey = (key: string): Params => {
  try {
    return JSON.parse(key);
  } catch (error) {
    return { address: "", uri: "", owner: "" };
  }
};

export const useNFTParams = (params: Params) => {
  const nftParamsQuery = useNFTParamsQuery();

  const { data, isValidating, error } = useSWR(
    getKey(params),
    async (key: string) => {
      return nftParamsQuery(parseKey(key));
    }
  );

  const isLoading = !data && isValidating;

  return {
    data,
    error,
    isLoading,
  };
};
