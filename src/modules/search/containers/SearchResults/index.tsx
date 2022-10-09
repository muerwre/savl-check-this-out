import { FC } from "react";

import { useSearch } from "~/modules/search/context/SearchProvider";
import { useSearchQuery } from "~/modules/search/hooks/useSearchQuery";

interface SearchResultsProps {}

const SearchResults: FC<SearchResultsProps> = () => {
  const { search } = useSearch();
  const { items, error, isLoading } = useSearchQuery(search);

  if (isLoading) {
    // TODO: draw loader here
  }

  return (
    <div>
      {items.map((it) => (
        <div key={it.address} />
      ))}
    </div>
  );
};

export { SearchResults };
