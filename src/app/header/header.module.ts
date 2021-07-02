import { NgModule } from '@angular/core';
import { BbUIModule } from '../bb-ui/bb-ui.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations:[HeaderComponent],
  imports: [BbUIModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }
