import { AppReducerActionType } from "./AppReducerActionType.ts";
import { PartialDeep } from "type-fest";
import { AppComposedState } from "./AppComposedState.ts";

export type AppReducerUpdateStateAction = {
  type: AppReducerActionType.UPDATE_STATE;
  payload: PartialDeep<AppComposedState>;
};

export type AppReducerAction = AppReducerUpdateStateAction;
