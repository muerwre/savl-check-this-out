import { FC, useRef } from "react";

import Head from "next/head";

import NotFoundPage from "pages/404";
import { useI18n } from "~/lib/i18n";
import { SearchNFTItem } from "~/model/SearchNFTItem";
import { useSearch } from "~/modules/search/context/SearchProvider";
import { useSearchQuery } from "~/modules/search/hooks/useSearchQuery";

import { SearchLoader } from "../../components/SearchLoader";
import { SearchResults } from "../../components/SearchResults";

interface SearchPageProps {
  search?: string;
  fallbackData?: SearchNFTItem[];
}

const SearchPage: FC<SearchPageProps> = ({ fallbackData, search: initial }) => {
  const { t } = useI18n();
  const { search } = useSearch();
  const initialSearch = useRef(initial).current;

  const { items, error, isLoading } = useSearchQuery(
    search,
    // fallbackData should be valid for initial search query only
    search === initialSearch ? fallbackData : undefined
  );

  if (search && isLoading) {
    return <SearchLoader />;
  }

  if (search && (error || items.length === 0)) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Head>
        <title>
          {search
            ? t("defaultPageTitle") + " | " + search
            : t("defaultPageTitle")}
        </title>
        <meta name="description" content={t("defaultPageDescription")} />
      </Head>

      {!!search && <SearchResults items={items} />}
    </div>
  );
};

export { SearchPage };
