import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocationOverviewModelResponse, LocationOverviewFilters } from '@services/location/location.contracts';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) { }

  get(filters: LocationOverviewFilters): Observable<LocationOverviewModelResponse> {
    const filter = Object.entries(filters).map(([key, val]) => `${key}=${val}`).join('&');
    return this.http.get<LocationOverviewModelResponse>(`/location?${filter}`);
  }
}
