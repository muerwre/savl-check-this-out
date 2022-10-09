import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";

import axios from "axios";

const defaultClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

const APIContext = createContext({
  client: defaultClient,
});

const APIProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = useRef(defaultClient).current;

  return (
    <APIContext.Provider value={{ client }}>{children}</APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext).client;

export { APIProvider };
