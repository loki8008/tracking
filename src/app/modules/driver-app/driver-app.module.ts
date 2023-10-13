import { DialogBoxComponent } from './../../shared/components/dialog-box/dialog-box.component';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SharedModule} from '../../shared/shared.module';

import { DriverAppComponent } from './driver-app.component';
import { DriverAppRoutingModule } from  './driver-app.routing';

import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { ForgetpasswordComponent } from 'src/app/shared/components/forgetpassword/forgetpassword.component';
import { RegistrationComponent } from 'src/app/shared/components/registration/registration.component';

import { TruckComponent } from 'src/app/shared/components/truck/truck.component';


@NgModule({
  imports: [CommonModule, DriverAppRoutingModule,SharedModule],
  declarations: [DriverAppComponent,RegistrationComponent,LoginComponent,ForgetpasswordComponent,TruckComponent,DialogBoxComponent],
})
export class DriverAppModule {}
