import {Injectable } from '@angular/core';
import {Action, Store} from "@ngrx/store";
import { Observable } from 'rxjs';
import { AppState } from '../../../reducers/app.reducer';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
    constructor(private _appStore: Store<AppState>) {}

    public dispatch(action: Action): void {
        this._appStore.dispatch(action);
    }
}