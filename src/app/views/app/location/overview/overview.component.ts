import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from '@services/location/location.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, PageEvent, MatDialog } from '@angular/material';
import { AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@store/application.state';
import { InitialLoadAction, OnPageChangeAction } from '@store/actions/location.overview.action';
import { LocationModel, LocationOverviewFilters } from '@services/location/location.contracts';
import { DetailsComponent } from '@views/app/location/details/details.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class LocationOverviewComponent implements OnInit { // implements OnInit //, AfterViewInit
  displayedColumns = ['_id', 'name', 'number', 'type'];
  dataSource = new MatTableDataSource<LocationModel>();
  // @ViewChild(MatSort) sort: MatSort;

  $filters: Observable<LocationOverviewFilters>;
  $count: Observable<number>;
  constructor(
    private store: Store<ApplicationState>,
    private dialog: MatDialog
  ) {
    store.select(state => state.locationOverviewPage.locations).subscribe(data => this.dataSource.data = data);
    this.$filters = store.select(state => state.locationOverviewPage.filter);
    this.$count = store.select(state => state.locationOverviewPage.count);
  }

  ngOnInit() {
    this.store.dispatch(new InitialLoadAction());
  }

  addLocation() {
    const modal = this.dialog.open(DetailsComponent);
    modal.afterClosed().subscribe(res => {
      console.log(res);
    });

  }
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  onPageChanged($event: PageEvent): void {
    this.store.dispatch(new OnPageChangeAction($event));
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
