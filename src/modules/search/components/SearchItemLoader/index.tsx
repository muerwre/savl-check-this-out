import React, { FC } from "react";

import Image from "next/image";

import { Loader } from "~/common/ui/Loader";

import styles from "./styles.module.scss";

interface SearchItemLoaderProps {}

const SearchItemLoader: FC<SearchItemLoaderProps> = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Loader />
    </div>
  </div>
);

export { SearchItemLoader };
