import { AppBaseState } from "./AppBaseState.ts";

export type AppComposedState = {
  current: AppBaseState;
  original: AppBaseState;
  hasStateChanged: boolean;
};
