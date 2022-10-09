import { useCallback } from "react";

import { SearchNFTItem } from "~/model/SearchNFTItem";

interface Params {
  search?: string;
}

export const useSearchByAddress = () => {
  return useCallback(async ({ search }: Params): Promise<SearchNFTItem[]> => {
    throw new Error("not implemented");
    return [];
  }, []);
};
