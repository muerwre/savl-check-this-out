import React, { FC } from "react";

import classNames from "classnames";

import { ButtonProps as OriginalButtonProps } from "~/types/dom";

import styles from "./styles.module.scss";

type ButtonSize = "sm" | "md" | "xs";
type ButtonColor = "primary" | "opaque" | "underline";

interface ButtonProps extends OriginalButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
}

const Button: FC<ButtonProps> = ({
  size = "md",
  color = "primary",
  className,
  ...rest
}) => (
  <button
    className={classNames(
      styles.button,
      styles[`size-${size}`],
      styles[`color-${color}`]
    )}
    {...rest}
  />
);

export { Button };
