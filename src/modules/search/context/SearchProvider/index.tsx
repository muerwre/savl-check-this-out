import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
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

  /** watch SSR url change and update search value for it */
  useEffect(() => {
    if (!initialValue || initialValue === search) {
      return;
    }

    setSearch(initialValue);
  }, [initialValue]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

export { SearchProvider };
