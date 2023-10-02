import { useAppReducer } from "../../store/useAppReducer.ts";

export type StateApiContextValues = {
  updateState: ReturnType<typeof useAppReducer>["updateState"];
  updateOriginalState: ReturnType<typeof useAppReducer>["updateOriginalState"];
};
