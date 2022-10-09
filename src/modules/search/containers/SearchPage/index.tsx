import { FC } from "react";

import Head from "next/head";

import NotFoundPage from "pages/404";
import { SearchLayout } from "~/layouts/SearchLayout";
import { useI18n } from "~/lib/i18n";
import { useSearch } from "~/modules/search/context/SearchProvider";
import { useSearchQuery } from "~/modules/search/hooks/useSearchQuery";

const SearchPage: FC = () => {
  const { t } = useI18n();
  const { search } = useSearch();
  const { items, error, isLoading } = useSearchQuery(search);

  if (search && error) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Head>
        <title>{t("defaultPageTitle")}</title>
        <meta name="description" content={t("defaultPageDescription")} />
      </Head>
    </div>
  );
};

export { SearchPage };
