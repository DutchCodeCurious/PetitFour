import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';
import { AppService } from '../services/app/app.service';


export class TokenInterceptor implements HttpInterceptor {
  constructor(private _appService: AppService) {}


  static addTokenToRequest<T>(
    request: HttpRequest<T>,
    token: string,
  ): HttpRequest<T> {
    return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }


  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<unknown>
    | HttpUserEvent<unknown>> {

      if (req.headers.has('Skip-Auth')) {
        const newHeaders = req.headers.delete('Skip-Auth');
        const cloned = req.clone({ headers: newHeaders });
        return next.handle(cloned);
      }
       // --- 2. STANDARD TOKEN FLOW ---
    return this._appService.getAccessToken().pipe(
      first(),
      switchMap((loginResponse: string | null) => {
        if (!loginResponse) {
          if (window.location.href.includes('/login')) {
            return next.handle(req);
          } else {
            this._appService.logout();
            return throwError(
              () => new Error('Session expired. Please log in again.'),
            );
          }
        }

        return this._appService.isAuthorized().pipe(
          first(),
          switchMap((isAuth: boolean) => {
            if (!isAuth) {
              this._appService.logout();
              return throwError(
                () => new Error('Session expired. Please log in again.'),
              );
            }

            return next.handle(
              TokenInterceptor.addTokenToRequest(req, loginResponse),
            );
          }),
        );
      }),
      catchError((err: unknown) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 404:
              return throwError(() => new Error(err.message));
            case 400:
              return throwError(
                () => new Error(err.error?.message || err.message),
              );
          }
        }

        return throwError(() => new Error((err as Error).message));
      }),
    );
  }
}


