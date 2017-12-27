import { FormField, InputType } from '../../tools/dynamic-form/contracts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocationOverviewModelResponse, LocationOverviewFilters, LocationModel } from '@services/location/location.contracts';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) { }

  get(filters: LocationOverviewFilters): Observable<LocationOverviewModelResponse> {
    const filter = Object.entries(filters).map(([key, val]) => `${key}=${val}`).join('&');
    return this.http.get<LocationOverviewModelResponse>(`/location?${filter}`);
  }

  getForm(): FormField[] {

    return [
      { field: 'name', inputType: InputType.textbox, label: 'name', placeholder: 'name', width: 50 },
      { field: 'number', inputType: InputType.textbox, label: 'number', placeholder: 'number', width: 50 },
      { field: 'email', inputType: InputType.textbox, label: 'email', placeholder: 'email' },
      { field: 'addressLine', inputType: InputType.textbox, label: 'addressLine', placeholder: 'addressLine' }
    ];
    // return Observable.throw(new Error('not implemented'));
  }

  update(model: LocationModel): Observable<LocationModel> {
    return this.http.put<LocationModel>(`/location/${model._id}`, model);
  }

  create(model: LocationModel): Observable<LocationModel> {
    return this.http.post<LocationModel>(`/location`, model);
  }
}
