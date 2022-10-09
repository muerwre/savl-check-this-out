import { useMemo } from "react";

import { flatten } from "lodash";
import useSWR, { KeyLoader } from "swr";

import { useSearchByAddress } from "~/api/rest/search/useSearchByAddress";

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

export const useSearchQuery = (search: string) => {
  const searchByAddress = useSearchByAddress();

  const { data, isValidating, error } = useSWR(
    getKey(search),
    async (key: string) => {
      return searchByAddress(parseKey(key));
    }
  );

  const isLoading = !data && isValidating;
  const items = useMemo(() => flatten(data || []), [data]);

  return {
    items,
    error,
    isLoading,
  };
};
