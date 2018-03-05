import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatCheckbox, MatButton, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatProgressSpinnerModule,
   MatCardModule, MatGridListModule, MatTableModule, MatExpansionModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule } from '@angular/material';

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
    MatInputModule
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
    MatInputModule
  ],
  // declarations: []
})
export class MaterialModule { }
