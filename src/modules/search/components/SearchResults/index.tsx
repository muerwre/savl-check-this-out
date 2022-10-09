import { FC } from "react";

import { SearchNFTItem } from "~/model/SearchNFTItem";

import { SearchItem } from "../../containers/SearchItem";
import { SearchGrid } from "../SearchGrid";

import styles from "./styles.module.scss";

interface SearchResultsProps {
  items: SearchNFTItem[];
}

const SearchResults: FC<SearchResultsProps> = ({ items }) => {
  return (
    <SearchGrid>
      {items.map((it) => (
        <SearchItem item={it} key={it.address} />
      ))}
    </SearchGrid>
  );
};

export { SearchResults };
