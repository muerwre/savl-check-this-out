import { useMemo } from "react";

import { has } from "lodash";
import useSWR, { KeyLoader } from "swr";

import { useSearchByAddressQuery } from "~/api/rest/search/useSearchByAddressQuery";
import { SearchNFTItem } from "~/model/SearchNFTItem";

type Params = { search?: string };

const getKey: (search: string) => KeyLoader = (search) => () => {
  const props: Params = {
    search,
  };

  return JSON.stringify(props);
};

const parseKey = (key: string): Params => {
  try {
    return JSON.parse(key);
  } catch (error) {
    return { search: "" };
  }
};

export const useSearchQuery = (
  search: string,
  fallbackData?: SearchNFTItem[]
) => {
  const searchByAddress = useSearchByAddressQuery();

  const { data, isValidating, error } = useSWR(
    getKey(search),
    async (key: string) => {
      return searchByAddress(parseKey(key));
    },
    {
      fallbackData,
      revalidateOnMount: false, // trust in SSR :-)
    }
  );

  const isLoading = !data && isValidating;
  const items = useMemo(
    () => data?.filter((it) => has(it, ["address"]) && has(it, ["uri"])) || [],
    [data]
  );

  return {
    items,
    error,
    isLoading,
  };
};
