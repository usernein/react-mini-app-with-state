import { createContext } from "use-context-selector";
import { StateDataContextValues } from "./types/StateDataContextValues.ts";

export const StateDataContext = createContext<StateDataContextValues>(
  {} as StateDataContextValues,
);
