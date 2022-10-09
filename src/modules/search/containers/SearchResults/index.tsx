import { FC } from "react";

import { SearchNFTItem } from "~/model/SearchNFTItem";

import { SearchItem } from "../SearchItem";

import styles from "./styles.module.scss";

interface SearchResultsProps {
  items: SearchNFTItem[];
}

const SearchResults: FC<SearchResultsProps> = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((it) => (
        <SearchItem item={it} key={it.address} />
      ))}
    </div>
  );
};

export { SearchResults };
