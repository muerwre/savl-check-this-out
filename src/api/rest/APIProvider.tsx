import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";

import axios from "axios";
import { SWRConfig } from "swr";

const defaultClient = axios.create();

const APIContext = createContext({
  client: defaultClient,
});

const APIProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = useRef(defaultClient).current;

  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
      }}
    >
      <APIContext.Provider value={{ client }}>{children}</APIContext.Provider>
    </SWRConfig>
  );
};

export const useAPI = () => useContext(APIContext).client;

export { APIProvider };
