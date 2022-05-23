import { Observable, of, ReplaySubject } from 'rxjs';

export class LoginServiceMock {
  public hasAccessToken = new ReplaySubject<string | null>(1);

  constructor() {}

  login(username: string, password: string): Observable<any> {
    return of();
  }
}
