import { FC } from "react";

import { GradientText } from "~/common/ui/GradientText";
import { useI18n } from "~/lib/i18n";
import { SearchNFTItem } from "~/model/SearchNFTItem";

import { SearchItem } from "../../containers/SearchItem";
import { SearchGrid } from "../SearchGrid";

import styles from "./styles.module.scss";

interface SearchResultsProps {
  items: SearchNFTItem[];
}

const SearchResults: FC<SearchResultsProps> = ({ items }) => {
  const { t } = useI18n();

  return (
    <article>
      <h1 className={styles.title}>
        {t("myCollections")}
        <GradientText className={styles.count}>
          <span>{items.length}</span>
        </GradientText>
      </h1>

      <SearchGrid>
        {items.map((it) => (
          <SearchItem item={it} key={it.address} />
        ))}
      </SearchGrid>
    </article>
  );
};

export { SearchResults };
