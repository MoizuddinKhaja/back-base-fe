import { NgModule } from '@angular/core';
import { BbUIModule } from 'src/app/bb-ui/bb-ui.module';
import { TransactionComponent } from './transaction.component';
import {HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FilterNamePipe } from './filter.pipe';

@NgModule({
  declarations:[TransactionComponent,FilterNamePipe],
  imports: [BbUIModule,HttpClientModule,CommonModule],
  exports: [TransactionComponent]
})
export class TransactionModule { }
