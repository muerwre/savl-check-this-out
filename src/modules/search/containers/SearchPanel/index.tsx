import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";

import Image from "next/image";

import { Button } from "~/common/ui/Button";
import { Container } from "~/common/ui/Container";
import { TextInput } from "~/common/ui/TextInput";
import { useI18n } from "~/lib/i18n";
import { useSearch } from "~/modules/search/context/SearchProvider";

import styles from "./styles.module.scss";

interface SearchPanelProps {}

const SearchPanel: FC<SearchPanelProps> = () => {
  const { t } = useI18n();
  const [value, setValue] = useState("");
  const { setSearch } = useSearch();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearch(value);
    },
    [setSearch, value]
  );

  return (
    <section>
      <h1 className={styles.title}>
        {t("search")}{" "}
        <span className={styles.highlight}>{t("nftCollection")}</span>{" "}
        {t("byAddress")}
      </h1>

      <Container className={styles.form_container}>
        <form className={styles.panel} onSubmit={onSubmit}>
          <TextInput
            placeholder={t("searchByAddress")}
            prefix={
              <Image
                src="/assets/svg/search.svg"
                width={20}
                height={20}
                alt=""
              />
            }
            suffix={
              value && (
                <Image
                  src="/assets/svg/close.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              )
            }
            value={value}
            onChange={onChange}
          />

          <Button type="submit">{t("search")}</Button>
        </form>
      </Container>
    </section>
  );
};

export { SearchPanel };
