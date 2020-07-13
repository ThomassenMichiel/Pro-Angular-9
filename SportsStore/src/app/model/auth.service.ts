import {RestDatasource} from './rest.datasource';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private dataSource: RestDatasource) {  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.dataSource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.dataSource.auth_token != null;
  }

  clear() {
    this.dataSource.auth_token = null;
  }
}
