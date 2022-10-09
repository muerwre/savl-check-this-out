import { FC } from "react";

import Head from "next/head";

import NotFoundPage from "pages/404";
import { Loader } from "~/common/ui/Loader";
import { useI18n } from "~/lib/i18n";
import { SearchNFTItem } from "~/model/SearchNFTItem";
import { useSearch } from "~/modules/search/context/SearchProvider";
import { useSearchQuery } from "~/modules/search/hooks/useSearchQuery";

import { SearchResults } from "../SearchResults";

import styles from "./styles.module.scss";

interface SearchPageProps {
  fallbackData?: SearchNFTItem[];
}

const SearchPage: FC<SearchPageProps> = ({ fallbackData }) => {
  const { t } = useI18n();
  const { search } = useSearch();
  const { items, error, isLoading } = useSearchQuery(search, fallbackData);

  if (search && isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  if (search && (error || items.length === 0)) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Head>
        <title>{t("defaultPageTitle")}</title>
        <meta name="description" content={t("defaultPageDescription")} />
      </Head>

      <SearchResults items={items} />
    </div>
  );
};

export { SearchPage };
