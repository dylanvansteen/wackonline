import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocationOverviewModelResponse, LocationOverviewFilters, LocationModel } from '@services/location/location.contracts';
import { BaseService } from '@services/base.service';

@Injectable()
export class LocationService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'location');
  }

}
