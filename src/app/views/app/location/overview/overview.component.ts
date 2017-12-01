import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from '@services/location.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort } from '@angular/material';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class LocationOverviewComponent implements AfterViewInit { // implements OnInit
  displayedColumns = ['_id', 'name', 'number', 'type'];
  // sort: MatSort;
  dataSource = new MatTableDataSource();
  constructor(private locationService: LocationService) {
    locationService.get().map(data => data['data']).subscribe(data => this.dataSource.data = data);
    // this.dataSource.
    // this.dataSource.data = new ExampleDataSource(locationService);
  }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log(this.dataSource.paginator);
  }
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
//  */
// export class ExampleDataSource extends MatTableDataSource<any> {
//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   constructor(private locationService: LocationService) {
//     super();
//   }

//   connect(): Observable<any> {
//     return this.locationService.get().map(data => data['data']);
//   }


//   disconnect() { }
// }
