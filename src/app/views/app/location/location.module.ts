import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationOverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LocationOverviewComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LocationOverviewComponent,
    DetailsComponent
  ]
})
export class LocationModule { }
