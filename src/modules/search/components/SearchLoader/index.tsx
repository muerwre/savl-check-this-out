import React, { FC } from "react";

import { GradientText } from "~/common/ui/GradientText";
import { useI18n } from "~/lib/i18n";

import { SearchGrid } from "../SearchGrid";
import { SearchItemLoader } from "../SearchItemLoader";

import styles from "./styles.module.scss";

interface SearchLoaderProps {}

const SearchLoader: FC<SearchLoaderProps> = () => {
  const { t } = useI18n();

  return (
    <div>
      <GradientText className={styles.title}>
        <h2>{t("waitABit")}</h2>
      </GradientText>

      <SearchGrid>
        <SearchItemLoader />
        <SearchItemLoader />
        <SearchItemLoader />
        <SearchItemLoader />
      </SearchGrid>
    </div>
  );
};

export { SearchLoader };
