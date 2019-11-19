import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
exports: [
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule {}
