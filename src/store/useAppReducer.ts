import { AppBaseState } from "./types/AppBaseState.ts";
import { AppReducerActionType } from "./types/AppReducerActionType.ts";
import React from "react";
import { AppReducer } from "./AppReducer.ts";
import { PartialDeep } from "type-fest";
import { AppComposedState } from "./types/AppComposedState.ts";

type useAppReducerReturn = {
  state: AppComposedState["current"];
  originalState: AppComposedState["original"];
  updateState: (newStateValues: PartialDeep<AppBaseState>) => void;
  updateOriginalState: (newStateValues: PartialDeep<AppBaseState>) => void;
  hasStateChanged: boolean;
};

const useInitialAppState = (): AppBaseState => {
  return {
    selectedNumber: 0,
  };
};

export const useAppReducer = (): useAppReducerReturn => {
  const initialAppState = useInitialAppState();

  const initialState: AppComposedState = {
    current: initialAppState,
    original: initialAppState,
    hasStateChanged: false,
  };

  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  const updateState = (newStateValues: PartialDeep<AppBaseState>) => {
    dispatch({
      type: AppReducerActionType.UPDATE_STATE,
      payload: { current: newStateValues },
    });
  };

  const updateOriginalState = (newStateValues: PartialDeep<AppBaseState>) => {
    dispatch({
      type: AppReducerActionType.UPDATE_STATE,
      payload: { original: newStateValues },
    });
  };

  return {
    state: state.current,
    originalState: state.original,
    updateState,
    updateOriginalState,
    hasStateChanged: state.hasStateChanged,
  };
};
