import { LocationOverviewPageEffectService } from '@store/effects/location.overview.effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationOverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LocationService } from '@services/location/location.service';
import { MaterialModule } from 'app/material.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: LocationOverviewComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([LocationOverviewPageEffectService])
  ],
  providers: [
    LocationService,
  ],
  declarations: [
    LocationOverviewComponent,
    DetailsComponent
  ],
  entryComponents: [
    DetailsComponent
  ]
})
export class LocationModule { }
