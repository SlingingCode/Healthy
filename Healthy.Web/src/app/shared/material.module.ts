import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatCheckbox, MatButton, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatProgressSpinnerModule,
   MatCardModule, MatGridListModule, MatTableModule, MatExpansionModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatMenuModule,
   MatSnackBarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    CdkTableModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    CdkTableModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule, MatMenuModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule
  ],
  // declarations: []
})
export class MaterialModule { }
