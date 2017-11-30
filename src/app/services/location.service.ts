import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get('/location');
  }
}
