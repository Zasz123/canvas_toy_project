import { createReducer } from "typesafe-actions";
import { AuthActions } from "./types";
import { AuthState } from "./interface";
import { LOGIN } from "./actions";

const initialState: AuthState = {
  login: false,
};

const reducer = createReducer<AuthState, AuthActions>(initialState, {
  [LOGIN]: (state, { payload: { success } }) => {
    return {
      ...state,
      login: success,
    };
  },
});

export default reducer;
