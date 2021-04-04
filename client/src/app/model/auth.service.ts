import { Injectable } from '@angular/core';
import { User } from './user.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: User;

  constructor(private datasource: RestDataSource) {
    this.user = new User();
  }

  get authenticated(): boolean {
    return this.datasource.loggedIn();
  }

  authenticate(user: User): Observable<any> {
    return this.datasource.authenticate(user);
  }

  storeUserData(token: any, user: User): void {
    this.datasource.storeUserData(token, user);
  }

  logout(): Observable<any> {
    return this.datasource.logout();
  }
}
