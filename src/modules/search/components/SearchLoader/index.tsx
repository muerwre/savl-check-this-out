import React, { FC } from "react";

import { SearchGrid } from "../SearchGrid";
import { SearchItemLoader } from "../SearchItemLoader";

interface SearchLoaderProps {}

const SearchLoader: FC<SearchLoaderProps> = () => (
  <SearchGrid>
    <SearchItemLoader />
    <SearchItemLoader />
    <SearchItemLoader />
    <SearchItemLoader />
  </SearchGrid>
);

export { SearchLoader };
