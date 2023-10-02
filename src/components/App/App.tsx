import React from "react";
import styles from "./App.module.scss";
import clsx from "clsx";
import { NumbersContainer } from "../NumbersContainer/NumbersContainer.tsx";

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={clsx(styles.App, className)}>
      <h2 className={styles.heading}>
        Select a number to highlight its multiples.
      </h2>
      <NumbersContainer />
    </div>
  );
};
