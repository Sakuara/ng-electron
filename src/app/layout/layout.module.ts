import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LayoutPassportComponent } from './passport/passport.component';
import { DefaultComponent } from './default/default.component';



@NgModule({
  declarations: [LayoutPassportComponent, DefaultComponent],
  imports: [
    SharedModule,
  ]
})
export class LayoutModule { }
