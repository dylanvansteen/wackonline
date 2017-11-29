import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCard,
  MatCardModule,
  MatInputModule,
  MatFormField,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule
} from '@angular/material';



@NgModule({
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
