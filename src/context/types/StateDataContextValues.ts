import { useAppReducer } from "../../store/useAppReducer.ts";

export type StateDataContextValues = {
  originalState: ReturnType<typeof useAppReducer>["state"];
  state: ReturnType<typeof useAppReducer>["originalState"];
  hasStateChanged: ReturnType<typeof useAppReducer>["hasStateChanged"];
};
