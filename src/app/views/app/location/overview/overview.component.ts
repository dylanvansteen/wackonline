import { Component, OnInit } from '@angular/core';
import { LocationService } from '@services/location.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class LocationOverviewComponent { // implements OnInit
  displayedColumns = ['_id', 'name', 'number', 'type'];
  dataSource: ExampleDataSource;
  constructor(private locationService: LocationService) {
    this.dataSource = new ExampleDataSource(locationService);
  }
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private locationService: LocationService) {
    super();
  }
  connect(): Observable<any> {
    return this.locationService.get().map(data => data['data']);
  }


  disconnect() { }
}