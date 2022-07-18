import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityColorPipe } from './pipes/quantity-color.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QuantityColorPipe
  ],
  exports:[
    QuantityColorPipe, CommonModule
  ]
})
export class SharedModule { }
