import { FC, PropsWithChildren } from "react";

import { Container } from "~/common/ui/Container";
import { SearchPanel } from "~/modules/search/containers/SearchPanel";

import styles from "./styles.module.scss";

interface SearchLayoutProps extends PropsWithChildren {}

const SearchLayout: FC<SearchLayoutProps> = ({ children }) => {
  return (
    <main>
      <Container className={styles.search}>
        <SearchPanel />
      </Container>

      <Container>{children}</Container>
    </main>
  );
};

export { SearchLayout };
