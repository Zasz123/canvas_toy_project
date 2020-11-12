import { createAction } from "typesafe-actions";

export const LOGIN = "auth/LOGIN";

export const login = createAction(LOGIN)<{ token: String; success: boolean }>();
