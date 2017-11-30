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

  refreshToken(): Observable<boolean> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<LoginResponseModel>('/authentication', { accessToken }).map(data => {
      localStorage.setItem('accessToken', data.accessToken);
      return true;
    }).catch(err => {
      localStorage.removeItem('accessToken');
      return Observable.throw('not authorized');
    });
  }
}
