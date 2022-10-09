import React, { FC, PropsWithChildren } from "react";

import classNames from "classnames";

import { DivProps } from "~/types/dom";

import styles from "./styles.module.scss";

interface GradientTextProps extends DivProps {}

const GradientText: FC<GradientTextProps> = ({ className, ...rest }) => (
  <span className={classNames(styles.gradient, className)} {...rest} />
);

export { GradientText };
