import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AccountDTO } from "../modules/DTO/accountDTOs/account.dto";
import { LoginResponse } from "../modules/DTO/auth/login.dto";

export const AppActions = createActionGroup({
    source: 'appState',
    events: {
        clear: emptyProps(), 
        setUsername: props<{ username: string}>(),
        setLoggingSettings: props<{ settings: string[]}>(),
        setLoggedInAccount: props<{ loggedInAccount: AccountDTO}>(),
        setAuthToken: props<{ token: LoginResponse}>()
    }
})