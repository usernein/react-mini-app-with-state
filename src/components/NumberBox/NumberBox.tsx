import React from "react";
import styles from "./NumberBox.module.scss";
import clsx from "clsx";
import { useContextSelector } from "use-context-selector";
import { StateDataContext } from "../../context/StateDataContext.ts";
import { StateApiContext } from "../../context/StateApiContext.ts";

export type NumberBoxProps = {
  number: number;
  className?: string;
};
export const NumberBox: React.FC<NumberBoxProps> = ({ className, number }) => {
  const selectedNumber = useContextSelector(
    StateDataContext,
    (state) => state.state.selectedNumber,
  );
  const updateState = useContextSelector(
    StateApiContext,
    (state) => state.updateState,
  );

  const isMultiple = number % selectedNumber === 0;
  const isSelected = number === selectedNumber;

  const onClick = () => {
    updateState({ selectedNumber: number });
  };

  return (
    <div
      className={clsx(
        styles.NumberBox,
        className,
        isMultiple && styles.isMultiple,
        isSelected && styles.isSelected,
      )}
      onClick={onClick}
    >
      {number}
    </div>
  );
};
