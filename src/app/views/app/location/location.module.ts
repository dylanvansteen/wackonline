import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationOverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LocationService } from '@services/location.service';
import { MaterialModule } from 'app/material.module';

const routes: Routes = [
  {
    path: '', component: LocationOverviewComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  providers: [
    LocationService
  ],
  declarations: [
    LocationOverviewComponent,
    DetailsComponent
  ]
})
export class LocationModule { }
