import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, take, tap } from 'rxjs';
import { accessTokenKey } from 'src/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public hasAccessToken = new ReplaySubject<string | null>(1);

  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.hasAccessToken.next(sessionStorage.getItem(accessTokenKey));
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/auth/local`, {
        identifier: username,
        password: password,
      })
      .pipe(
        take(1),
        tap({
          next: (data: any) => {
            sessionStorage.setItem(accessTokenKey, data.jwt);
            this.hasAccessToken.next(data.jwt);
          },
        })
      );
  }
}
