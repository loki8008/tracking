import { TruckComponent } from './../../shared/components/truck/truck.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from 'src/app/shared/components/forgetpassword/forgetpassword.component';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { RegistrationComponent } from 'src/app/shared/components/registration/registration.component';
import { AuthGuard } from 'src/app/shared/services/guards/auth-guard.service';
import { LiveTrackingComponent } from './live-tracking/live-tracking.component';

const routes: Routes = [
  {path:'',component:TruckComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {path:'forgetpassword',component:ForgetpasswordComponent},
  { path: 'tracking', component: LiveTrackingComponent },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverAppRoutingModule {}
