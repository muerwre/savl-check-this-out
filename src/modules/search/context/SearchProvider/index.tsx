import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface SearchProviderProps extends PropsWithChildren {
  initialValue?: string;
}

const SearchContext = createContext({
  search: "",
  setSearch: (val: string) => {},
});

const SearchProvider: FC<SearchProviderProps> = ({
  children,
  initialValue,
}) => {
  const [search, setSearch] = useState(initialValue || "");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

export { SearchProvider };
