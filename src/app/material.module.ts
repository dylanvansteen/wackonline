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
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule
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
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
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
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
