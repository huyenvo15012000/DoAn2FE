import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUikitComponent } from './table-uikit/table-uikit.component';
import { NzTableModule } from 'ng-zorro-antd/table';



@NgModule({
  declarations: [
    TableUikitComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
  ],
  exports: [
    TableUikitComponent
  ]
})
export class UikitsModule { }
