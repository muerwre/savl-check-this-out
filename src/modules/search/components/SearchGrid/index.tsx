import React, { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

interface SearchGridProps extends PropsWithChildren {}

const SearchGrid: FC<SearchGridProps> = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);

export { SearchGrid };
