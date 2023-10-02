import { AppReducerAction } from "./types/AppReducerAction.ts";
import { AppReducerActionType } from "./types/AppReducerActionType.ts";
import tsDeepmerge from "ts-deepmerge";
import _ from "lodash";
import { PartialDeep } from "type-fest";
import { AppComposedState } from "./types/AppComposedState.ts";

const mergeIntoState = (
  current: AppComposedState,
  newValues: PartialDeep<AppComposedState>,
): AppComposedState => {
  return tsDeepmerge.withOptions(
    { mergeArrays: true },
    current,
    newValues,
  ) as AppComposedState;
};
export const AppReducer = (
  state: AppComposedState,
  action: AppReducerAction,
) => {
  if (action.type !== AppReducerActionType.UPDATE_STATE) {
    return state;
  }

  const merged = mergeIntoState(state, action.payload);
  merged.hasStateChanged = _.isEqual(merged.current, merged.original);
  return merged;
};
