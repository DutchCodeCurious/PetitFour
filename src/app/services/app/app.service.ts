import { Injectable } from "@angular/core";
import { Action, Store } from '@ngrx/store'
import { appFeature, AppState } from "../../reducers/app.reducer";
import { AppActions } from "../../actions/app.actions";
import { first, map, Observable } from "rxjs";
import { AccountDTO } from "../../modules/DTO/accountDTOs/account.dto";
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(
    private _appStore: Store<{appState: AppState}>,
  ) {}

  public isAuthorized(): Observable<boolean> {
    return this.getAppState().pipe(
      first(),
      map((authState) => {
        const accessToken = authState?.token?.access_token;
        if (!accessToken) {
          console.warn('[isAuthorized] No access_token found!');
          return false;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let decoded: any;
        try {
          decoded = jwtDecode(accessToken);
        } catch (e) {
          console.error('[isAuthorized] Failed to decode JWT:', e);
          this.logout();
          return false;
        }

        const now = Math.floor(Date.now() / 1000);
        const exp = decoded.exp;
        const nbf = decoded.nbf;
        const iat = decoded.iat;

        console.log('[isAuthorized] JWT iat:', iat, 'exp:', exp, 'now:', now);

        if (!exp || now > exp) {
          console.warn(
            '[isAuthorized] Token is expired (exp < now). Logging out...',
          );
          this.logout();
          return false;
        }
        if (nbf && now < nbf) {
          console.warn('[isAuthorized] Token not valid yet (nbf > now).');
          this.logout();
          return false;
        }

        console.info('[isAuthorized] Token is present and valid.');
        return true;
      }),
    );
  }


  getAppState(): Observable<AppState>{
    return this._appStore.select(appFeature.selectAppStateState);
  }

  getAccessToken(): Observable<string> {
    return this._appStore.select(appFeature.selectToken).pipe(map((token) => token?.access_token)) as Observable<string>;
  }

  getLoggingSettings(): Observable<string[] | null> {
    return this._appStore.select(appFeature.selectLoggingSettings);
  }

  getUsername(): Observable<string | null> {
    return this._appStore.select(appFeature.selectUsername);
  }
  
  getLoggedInAccount(): Observable<AccountDTO> {
    return this._appStore.select(
      appFeature.selectLoggedInAccount,
    ) as Observable<AccountDTO>;
  }

public dispatch(action: Action): void {
    console.log('dispatching action: ', action);
    this._appStore.dispatch(action);
  }

  logout(): void {
    this.dispatch(AppActions.clear());
    }

}
