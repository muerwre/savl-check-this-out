import { useCallback } from "react";

import { useAPI } from "../APIProvider";

interface Params {
  address: string;
  uri: string;
  owner: string;
}

interface Result {
  name: string;
  image: string;
}

export const useNFTParamsQuery = () => {
  const client = useAPI();

  return useCallback(
    async ({ address, uri, owner }: Params): Promise<Result> => {
      if (!address || !uri || !owner) {
        throw new Error("specify proper address, uri and owner");
      }

      return client.get<Result>(uri).then((it) => it.data);
    },
    [client]
  );
};
