import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDTO } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiFail(res: any) {
    Swal.fire(res.error, res || 'Something went wrong', 'error');
  }

  constructor(private api: ApiService, private alert: AlertService, private router: Router) { }

  // registerUser(data: any) {
  //   this.api.post(`/user/register/${data.adrNumber}`, data).subscribe((res: any) => {
  //     this.alert.success('Registration successful.');
  //     this.router.navigate(['/login'])
  //   }, this.alert.apiFail);
  // }

  registerUser(data: any) {
    this.api.post(`/user/register/${data.adrNumber}`, data).subscribe((res: any) => {
      this.alert.success('Registration successful.');
      this.router.navigate(['/login'])
    }, err=>{
      this.alert.apiFail(err)
    });
  }

  // editRegisterUser(data: any) {
  //   this.api.put(`/user/user`, data).subscribe((res: any) => {
  //     this.alert.success('Profile Update successful.');
  //     this.router.navigate(['/user/profile'])
  //   }, this.alert.apiFail);
  // }

    // editRegisterUser(data: any) {
    //   this.api.put(`/user/user`, data).subscribe((res: any) => {
    //     this.alert.success('Profile Update successful.');
    //     this.router.navigate(['/user/profile'])
    //   }, err=>{
    //     this.alert.apiFail(err)
    //   });
    // }

    editRegisterUser(id:any,data: any) {
      this.api.put(`/user/user/${id}`, data).subscribe((res: any) => {
        this.alert.success('Profile Update successful.');
        this.router.navigate(['/user/profile'])
      }, err=>{
        this.alert.apiFail(err)
      });
    }

  // loginUser(data: LoginDTO) {
  //   this.api.post('/user/login', data).subscribe((res: any) => {
      
  //     if (!res?.name) {
  //       this.alert.error("Wrong credentials");
  //       return;
  //     }

  //     sessionStorage.setItem('SESSION_USERNAME', res?.name);
  //     sessionStorage.setItem('SESSION_ROLE', 'USER');
  //     sessionStorage.setItem('SESSION_USER_ID', res?.id);
  //     this.router.navigate(["/user/profile"])
  //   }, this.alert.apiFail);
  // }

  loginUser(data: LoginDTO) {
    this.api.post('/user/login', data).subscribe((res: any) => {
      
      // if (!res?.name) {
      //   this.alert.error("Wrong credentials");
      //   return;
      // }

      sessionStorage.setItem('SESSION_USERNAME', res?.name);
      sessionStorage.setItem('SESSION_ROLE', 'USER');
      sessionStorage.setItem('SESSION_USER_ID', res?.id);
      this.alert.success("Login successful");
      this.router.navigate(["/user"])
    }, err=>{
      this.alert.apiFail(err)
    });
  }

  // loginAdmin(data: LoginDTO) {
  //   this.api.post('/admin/login', data).subscribe((res: any) => {
  //     if (!res?.name) {
  //       this.alert.error("Wrong credentials");
  //       return;
  //     }
  //     sessionStorage.setItem('SESSION_USERNAME', res.name);
  //     sessionStorage.setItem('SESSION_ROLE', 'ADMIN');
  //     sessionStorage.setItem('SESSION_USER_ID', res?.adminId);
  //     this.router.navigateByUrl("/admin")
  //   }, this.alert.apiFail);
  // }

  loginAdmin(data: LoginDTO) {
    this.api.post('/admin/login', data).subscribe((res: any) => {
      // if (!res?.name) {
      //   this.alert.error("Wrong credentials");
      //   return;
      // }
      sessionStorage.setItem('SESSION_USERNAME', res.name);
      sessionStorage.setItem('SESSION_ROLE', 'ADMIN');
      sessionStorage.setItem('SESSION_USER_ID', res?.adminId);
      this.alert.success("Login successful");
      this.router.navigateByUrl("/admin")
    }, err=>{
      this.alert.apiFail(err)
    });
  }

  isLoggedIn() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_USERNAME'))
      return true;
    return false;
  }

  isAdmin() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'ADMIN')
      return true;
    return false;
  }

  isUser() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'USER')
      return true;
    return false;
  }

}
