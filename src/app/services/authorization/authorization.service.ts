import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginModel, LoginResponseModel } from '@services/authorization/authorization.contracts';
@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  login(model: LoginModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>('/authentication', { ...model, strategy: 'local' })
      .catch(err => Observable.throw(err));
  }

  refreshToken() {

  }
}
