import { createFeature, createReducer, on } from "@ngrx/store";
import { AccountDTO } from "../modules/DTO/accountDTOs/account.dto";
import { LoginResponse } from "../modules/DTO/auth/login.dto";
import { AppActions } from "../actions/app.actions";
import { App } from "../app";

export interface AppState {
    loggingSettings: string[]| null;
    username: string | null;
    loggedInAccount: AccountDTO | null;
    token: LoginResponse | null;
}

export const initialState: AppState = {
    loggingSettings: [],
    username: null,
    loggedInAccount: null,
    token: null
}

export const appFeature = createFeature({
    name: 'appState',
    reducer: createReducer(
        initialState,
        on(AppActions.clear, () => initialState),
        on(AppActions.setUsername, (state, { username }) => ({ ...state, username })),
        on(AppActions.setLoggingSettings, (state, { settings }) => ({ ...state, loggingSettings: settings })),
        on(AppActions.setLoggedInAccount, (state, { loggedInAccount }) => ({ ...state, loggedInAccount })),
        on(AppActions.setAuthToken, (state, { token }) => ({ ...state, token }))
    )
});
