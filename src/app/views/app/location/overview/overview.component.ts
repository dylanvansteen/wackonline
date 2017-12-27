import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from '@services/location/location.service';
import { DataSource } from '@angular/cdk/collections';
// import { CdkColumnDef } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, PageEvent, MatDialog } from '@angular/material';
import { AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@store/application.state';
import {
  InitialLoadAction,
  OnPageChangeAction,
  CreatedLocationSuccessfullAction,
  UpdatedLocationSuccessfullAction
} from '@store/actions/location.overview.action';
import { LocationModel, LocationOverviewFilters } from '@services/location/location.contracts';
import { DetailsComponent } from '@views/app/location/details/details.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class LocationOverviewComponent implements OnInit {
  displayedColumns = ['name', 'number', 'type', 'emailaddress'];
  dataSource = new MatTableDataSource<LocationModel>();

  $filters: Observable<LocationOverviewFilters>;
  $count: Observable<number>;
  $isLoading: Observable<boolean>;
  constructor(
    private store: Store<ApplicationState>,
    private dialog: MatDialog
  ) {
    store.select(state => state.locationOverviewPage.locations).subscribe(data => this.dataSource.data = data);
    this.$filters = store.select(state => state.locationOverviewPage.filter);
    this.$count = store.select(state => state.locationOverviewPage.count);
    this.$isLoading = store.select(state => state.locationOverviewPage.isLoading);
  }

  ngOnInit() {
    this.store.dispatch(new InitialLoadAction());
  }

  openLocation(location?: LocationModel) {
    const modal = this.dialog.open(DetailsComponent, { data: location || {} });
    modal.afterClosed().subscribe(res => {
      if (res) {
        this.store.dispatch(new UpdatedLocationSuccessfullAction(res));
      }
    });

  }

  onPageChanged($event: PageEvent): void {
    this.store.dispatch(new OnPageChangeAction($event));
  }
}
