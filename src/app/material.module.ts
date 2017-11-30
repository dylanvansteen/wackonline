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
  MatProgressSpinnerModule,
  MatTableModule
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
    MatProgressSpinnerModule,
    MatTableModule,
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
    MatProgressSpinnerModule,
    MatTableModule,

  ]
})
export class MaterialModule { }
