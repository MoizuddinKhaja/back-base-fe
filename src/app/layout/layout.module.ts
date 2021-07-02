import { NgModule } from '@angular/core';
import { BbUIModule } from '../bb-ui/bb-ui.module';
import { HeaderModule } from '../header/header.module';
import { MakeTransferModule } from '../transfer/make-transfer/make-transfer.module';
import { TransactionModule } from '../transfer/transaction/transaction.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations:[LayoutComponent],
  imports: [BbUIModule,HeaderModule,MakeTransferModule,TransactionModule],
  exports: [LayoutComponent]
})
export class LayoutModule { }
