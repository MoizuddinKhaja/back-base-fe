import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BbUIModule } from 'src/app/bb-ui/bb-ui.module';
import { MakeTransferComponent } from './make-transfer.component';


@NgModule({
  declarations:[MakeTransferComponent],
  imports: [BbUIModule,CommonModule,ReactiveFormsModule],
  exports: [MakeTransferComponent]
})
export class MakeTransferModule { }
