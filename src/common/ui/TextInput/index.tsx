import React, { FC, ReactNode } from "react";

import classNames from "classnames";

import { useFocus } from "~/common/hooks/useFocus";
import { InputProps } from "~/types/dom";

import styles from "./styles.module.scss";

type TextInputProps = Omit<InputProps, "prefix"> & {
  prefix?: ReactNode;
  suffix?: ReactNode;
};

const TextInput: FC<TextInputProps> = ({
  className,
  style,
  prefix,
  suffix,
  ...rest
}) => {
  const { onFocus, onBlur, focused } = useFocus();

  return (
    <div className={classNames(styles.wrapper, { [styles.focused]: focused })}>
      {prefix && <div className={styles.prefix}>{prefix}</div>}
      <input
        className={styles.input}
        size={0}
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {suffix && <div className={styles.suffix}>{suffix}</div>}
    </div>
  );
};

export { TextInput };
