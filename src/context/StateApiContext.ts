import { createContext } from "use-context-selector";
import { StateApiContextValues } from "./types/StateApiContextValues.ts";

export const StateApiContext = createContext<StateApiContextValues>(
  {} as StateApiContextValues,
);
