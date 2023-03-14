import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { BasicComponent } from './components/layouts/basic/basic.component';
import { AdminComponent } from './components/layouts/admin/admin.component';
import { UserComponent } from './components/layouts/user/user.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AppointmentService } from './services/appointment.service';
import { VaccinationCenterListComponent } from './components/vaccination-center-list/vaccination-center-list.component';
import { AdminVaccineListComponent } from './components/admin-vaccine-list/admin-vaccine-list.component';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';
import { RegisterUserListComponent } from './components/register-user-list/register-user-list.component';
import { AdminService } from './services/admin.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddVaccinationCenterComponent } from './components/add-vaccination-center/add-vaccination-center.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { UserService } from './services/user.service';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BasicComponent,
    AdminComponent,
    UserComponent,
    AdminLoginComponent,
    VaccinationCenterListComponent,
    AddVaccineComponent,
    RegisterUserListComponent,
    AddVaccinationCenterComponent,
    UserProfileComponent,
    AdminVaccineListComponent,
    AppointmentListComponent,
    BookAppointmentComponent,
    AdminHomeComponent,
    UserHomeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule
  ],
  providers: [
    AlertService,
    ApiService,
    AuthService,
    AppointmentService,
    AdminService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
