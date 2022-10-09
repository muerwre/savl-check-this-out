import { FC } from "react";

import { SearchNFTItem } from "~/model/SearchNFTItem";

interface SearchResultsProps {
  items: SearchNFTItem[];
}

const SearchResults: FC<SearchResultsProps> = ({ items }) => {
  return (
    <div>
      {items.map((it) => (
        <div key={it.address} />
      ))}
    </div>
  );
};

export { SearchResults };
