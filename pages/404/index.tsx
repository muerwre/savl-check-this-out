import React from "react";

import Head from "next/head";

import { useI18n } from "~/lib/i18n";

import styles from "./styles.module.scss";

const NotFoundPage = () => {
  const { t } = useI18n();

  return (
    <>
      <Head>
        <title>{t("notFound")}</title>
        <meta name="description" content={t("defaultPageDescription")} />
      </Head>

      <div className={styles.wrapper}>
        <h1>{t("notFound")}</h1>
        <p>{t("changeSearchQuery")}</p>
      </div>
    </>
  );
};

export default NotFoundPage;
