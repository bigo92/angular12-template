import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelectMultipleComponent } from './input-select-multiple.component';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzSelectModule
  ],
  exports: [
    InputSelectMultipleComponent
  ],
  declarations: [InputSelectMultipleComponent]
})
export class InputSelectMultipleModule { }
