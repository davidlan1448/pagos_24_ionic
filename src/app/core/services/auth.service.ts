import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

import {IResponse, IResponseError} from '../interfaces/response';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * @description realiza el login del usuario
   * @param email 
   * @param password 
   */
  public login(email: string, password: string): Observable<IResponse> {
    return this.http
      .post("http://www.mocky.io/v2/5eab2922330000830076077b", {
        email,
        password,
      })
      .pipe(
        retry(4),
        map((res) => res as IResponse),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
