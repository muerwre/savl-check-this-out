import {
  ChangeEvent,
  FC,
  FormEvent,
  MouseEvent,
  useCallback,
  useState,
} from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { Button } from "~/common/ui/Button";
import { Container } from "~/common/ui/Container";
import { TextInput } from "~/common/ui/TextInput";
import { useI18n } from "~/lib/i18n";
import { useSearch } from "~/modules/search/context/SearchProvider";

import styles from "./styles.module.scss";

interface SearchPanelProps {}

const SearchPanel: FC<SearchPanelProps> = () => {
  const { t } = useI18n();
  const { search, setSearch } = useSearch();
  const [value, setValue] = useState(search);
  const { push, replace } = useRouter();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (value === search) {
        return;
      }

      setSearch(value);

      // push URL to history, but don't reload page
      push("/[address]", `/${value}`, { scroll: false });
    },
    [setSearch, value, push]
  );

  const onClear = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      setValue("");
      setSearch("");

      // replace URL in history, but don't reload page
      replace(`/`, "/", { scroll: false });
    },
    [setSearch, replace]
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
                <button
                  className={styles.clear}
                  type="button"
                  onClick={onClear}
                >
                  <Image
                    src="/assets/svg/close.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </button>
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
