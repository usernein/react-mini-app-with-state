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
      <NumbersContainer />
    </div>
  );
};
