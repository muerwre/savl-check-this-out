import React, { FC } from "react";

import classNames from "classnames";

import { DivProps } from "~/types/dom";

import styles from "./styles.module.scss";

interface ContainerProps extends DivProps {}

const Container: FC<ContainerProps> = ({ children, className, ...rest }) => (
  <div className={classNames(styles.container, className)} {...rest}>
    {children}
  </div>
);

export { Container };
