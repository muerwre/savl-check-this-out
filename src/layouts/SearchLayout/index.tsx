import React, { FC, PropsWithChildren } from "react";

import { Container } from "~/common/ui/Container";
import { SearchPanel } from "~/modules/search/containers/SearchPanel";
import { SearchProvider } from "~/modules/search/context/SearchProvider";

import styles from "./styles.module.scss";

interface SearchLayoutProps extends PropsWithChildren {
  search?: string;
}

const SearchLayout: FC<SearchLayoutProps> = ({ search, children }) => (
  <SearchProvider initialValue={search}>
    <Container className={styles.search}>
      <SearchPanel />
    </Container>

    <Container>{children}</Container>
  </SearchProvider>
);

export { SearchLayout };
