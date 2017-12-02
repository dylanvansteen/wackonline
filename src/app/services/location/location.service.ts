import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocationOverviewModelResponse } from '@services/location/location.contracts';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) { }

  get(): Observable<LocationOverviewModelResponse> {
    return this.http.get<LocationOverviewModelResponse>('/location');
  }
}
