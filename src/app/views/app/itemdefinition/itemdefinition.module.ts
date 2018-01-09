import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from 'app/material.module';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ItemDefinitionService } from '@services/itemdefinition/itemdefinition.service';
import { ItemDefinitionOverviewPageEffectService } from '@store/effects/itemdefinition.overview.effect';

const routes: Routes = [
  { path: '', component: OverviewComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ItemDefinitionOverviewPageEffectService])
  ],
  providers: [
    ItemDefinitionService
  ],
  declarations: [
    OverviewComponent,
    DetailsComponent
  ],
  entryComponents: [
    DetailsComponent
  ]
})
export class ItemDefinitionModule { }
