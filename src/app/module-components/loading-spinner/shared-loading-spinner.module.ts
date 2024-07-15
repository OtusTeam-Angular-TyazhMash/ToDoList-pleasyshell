import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '.';


@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class SharedLoadingSpinnerModule { }
