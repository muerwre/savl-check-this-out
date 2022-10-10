import { useCallback } from "react";

import { useAPI } from "../APIProvider";
import { paths } from "../constants";

interface Params {
  nftAddress: string;
  url: string;
  holderAddress: string;
}

interface Result {
  data: {
    metadata: {
      name: string;
      image: string;
    };
  };
}

export const useNFTParamsQuery = () => {
  const client = useAPI();

  return useCallback(
    async ({ nftAddress, url, holderAddress }: Params) => {
      if (!nftAddress || !url || !holderAddress) {
        throw new Error("specify proper address, uri and owner");
      }

      return client
        .get<Result>(paths.metadata(), {
          params: {
            url,
            holderAddress,
            nftAddress,
          },
        })
        .then((it) => it.data.data.metadata);
    },
    [client]
  );
};
