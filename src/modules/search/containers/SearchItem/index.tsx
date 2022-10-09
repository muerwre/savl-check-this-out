import { FC } from "react";

import Image from "next/image";

import { useI18n } from "~/lib/i18n";
import { SearchNFTItem } from "~/model/SearchNFTItem";

import { SearchLoader } from "../../components/SearchLoader";
import { useSearch } from "../../context/SearchProvider";
import { useNFTParams } from "../../hooks/useNFTParams";

import styles from "./styles.module.scss";

interface SearchItemProps {
  item: SearchNFTItem;
}

const SearchItem: FC<SearchItemProps> = ({ item }) => {
  const { t } = useI18n();
  const { search } = useSearch();

  const { data, isLoading } = useNFTParams({
    address: item.address,
    uri: item.uri,
    owner: search,
  });

  if (isLoading) {
    return <SearchLoader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <div className={styles.image}>
          {data?.image && (
            <Image
              src={data.image}
              layout="fill"
              alt={data?.name}
              objectFit="cover"
            />
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.name}>{data?.name}</div>
          <button className={styles.arrow}>
            <Image
              src="/assets/svg/arrow-right.svg"
              width={40}
              height={40}
              alt="->"
              aria-label={t("showMore")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export { SearchItem };
