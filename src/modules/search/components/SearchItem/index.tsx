import React, { FC } from "react";

import { SearchNFTItem } from "~/model/SearchNFTItem";

interface SearchItemProps {
  item: SearchNFTItem;
}

// TODO: actually, draw item here
const SearchItem: FC<SearchItemProps> = ({ item }) => <div>{item.address}</div>;

export { SearchItem };
