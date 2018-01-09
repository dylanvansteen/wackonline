import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ItemDefinitionModel } from '@services/itemdefinition/itemdefinition.contracts';
import { Filters } from '@services/contract';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@store/application.state';
import { InitialLoadAction } from '@store/actions/itemdefinition.overview.action';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {

  displayedColumns = ['name', 'number', 'type', 'code'];
  dataSource = new MatTableDataSource<ItemDefinitionModel>();

  $filters: Observable<Filters>;
  $count: Observable<number>;
  $isLoading: Observable<boolean>;
  constructor(
    private store: Store<ApplicationState>,
    private dialog: MatDialog
  ) {
    store.select(state => state.itemDefinitionOverviewPage.itemdefinitions).subscribe(data => this.dataSource.data = data);
    this.$filters = store.select(state => state.locationOverviewPage.filter);
    this.$count = store.select(state => state.locationOverviewPage.count);
    this.$isLoading = store.select(state => state.locationOverviewPage.isLoading);
  }

  ngOnInit() {
    this.store.dispatch(new InitialLoadAction());
  }

  openItemDefinition() {

  }
}
