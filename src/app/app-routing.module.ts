import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/layouts/admin/admin.component';
import { BasicComponent } from './components/layouts/basic/basic.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/layouts/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { VaccinationCenterListComponent } from './components/vaccination-center-list/vaccination-center-list.component';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';
import { RegisterUserListComponent } from './components/register-user-list/register-user-list.component';
import { AddVaccinationCenterComponent } from './components/add-vaccination-center/add-vaccination-center.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminVaccineListComponent } from './components/admin-vaccine-list/admin-vaccine-list.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [

  {
    path: '',
    component: BasicComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'admin-login',
        component: AdminLoginComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    canActivateChild: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'register-user-list',
        component: RegisterUserListComponent
      },
      {
        path: 'vaccination-centers',
        component: VaccinationCenterListComponent
      },      
      {
        path: 'add-vaccination-center',
        component: AddVaccinationCenterComponent
      },
      {
        path: 'vaccines',
        component: AdminVaccineListComponent
      },
      {
        path: 'add-vaccine',
        component: AddVaccineComponent
      },
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard, UserGuard],
    canActivateChild: [AuthGuard, UserGuard],
    children: [
      {
        path: '',
        component: UserHomeComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: 'edit-profile',
        component: RegisterComponent
      },
      {
        path: 'appointment',
        component: AppointmentListComponent
      },
      {
        path: 'add-appointment',
        component: BookAppointmentComponent
      },
      {
        path: 'update-appointment',
        component: BookAppointmentComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
