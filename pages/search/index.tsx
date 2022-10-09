import { FC } from "react";

import Head from "next/head";

import { useI18n } from "~/lib/i18n";
import { SearchProvider } from "~/modules/search/context/SearchProvider";

const SearchPage: FC = () => {
  const { t } = useI18n();

  return (
    <SearchProvider>
      <Head>
        <title>{t("defaultPageTitle")}</title>
        <meta name="description" content={t("defaultPageDescription")} />
      </Head>

      <div>search</div>
    </SearchProvider>
  );
};

export default SearchPage;
