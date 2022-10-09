import { FC, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { useVisibilityDetector } from "~/common/hooks/useVisibilityDetector";
import { useI18n } from "~/lib/i18n";
import { SearchNFTItem } from "~/model/SearchNFTItem";

import { SearchItemLoader } from "../../components/SearchItemLoader";
import { useSearch } from "../../context/SearchProvider";
import { useNFTParams } from "../../hooks/useNFTParams";

import styles from "./styles.module.scss";

interface SearchItemProps {
  item: SearchNFTItem;
}

const SearchItem: FC<SearchItemProps> = ({ item }) => {
  const [hasBeenLoaded, setHasBeenLoaded] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  // intersection observer will detect if element is visible
  // to avoid unnecessary api calls
  const isVisible = useVisibilityDetector(ref);

  const { t } = useI18n();
  const { search } = useSearch();

  const { data, isLoading } = useNFTParams({
    address: item.address,
    uri: item.uri,
    owner: search,
    skip: !isVisible && !hasBeenLoaded,
  });

  useEffect(() => {
    setHasBeenLoaded(!!data?.name);
  }, [data]);

  if (isLoading) {
    return <SearchItemLoader />;
  }

  return (
    <div className={styles.container} ref={setRef}>
      <div className={styles.result}>
        <div className={styles.image}>
          {isVisible && data?.image && (
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
