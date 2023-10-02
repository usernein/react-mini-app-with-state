import React from "react";
import styles from "./NumbersContainer.module.scss";
import clsx from "clsx";
import { NumberBox } from "../NumberBox/NumberBox.tsx";
import _ from "lodash";

export type NumbersContainerProps = {
  className?: string;
};
export const NumbersContainer: React.FC<NumbersContainerProps> = ({
  className,
}) => {
  const range = _.range(1, 50);
  return (
    <div className={clsx(styles.NumbersContainer, className)}>
      {range.map((number) => {
        return <NumberBox key={number} number={number} />;
      })}
    </div>
  );
};
