import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './passport/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
