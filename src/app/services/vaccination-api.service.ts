import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class VaccinationApiService {

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private router: Router
  ) { }

  addVaccinationCenter(payload: any, callback?: () => void) {
    return this.api.post('/admin/vaccinecenter', payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Vaccination Center Added successful.')
      this.router.navigate(['/admin/vaccination-centers'])
    }, this.alert.apiFail);
  }

  addVaccine(payload:any, callback?: () => void) {
    return this.api.post('/admin/vaccine', payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Vaccine Added successful.');
      this.router.navigate(['/admin/vaccines'])
    }, err=>{
      this.alert.apiFail(err)
    });
  }

  deleteVaccineCenter(vacId: number, callback?: () => void) {
    return this.api.delete(`/admin/vaccinecenter/${vacId}`).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Vaccination center deletion successful.')
    }, this.alert.apiFail);
  }

  deleteVaccine(vacId: number, callback?: () => void) {
    return this.api.delete(`/admin/vaccine/${vacId}`).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Vaccine deletion successful.')
    }, this.alert.apiFail);
  }

  // Change
  availableVaccineCenter(vacId: number, payload: any, callback?: () => void) {
    return this.api.put(`/admin/vaccineCenterA/${vacId}`, payload).subscribe((res: any) => {
      if(callback) callback();
      this.alert.success('This vaccination center available now.').then(()=>{
        window.location.reload()
      })
      }, this.alert.apiFail);
  }

  // Change
  unavailableVaccineCenter(vacId: number, payload: any, callback?: () => void) {
    return this.api.put(`/admin/vaccineCenterU/${vacId}`, payload).subscribe((res: any) => {
      if(callback) callback();
      this.alert.success('This vaccination center unavailable now.').then(()=>{
        window.location.reload()
      })
      }, this.alert.apiFail);
  }

  // Change
  availableVaccine(vacId: number, payload: any, callback?: () => void) {
    return this.api.put(`/admin/vaccineA/${vacId}`, payload).subscribe((res: any) => {
      if(callback) callback();
      this.alert.success('This vaccine available now.').then(()=>{
        window.location.reload()
      })
      }, this.alert.apiFail);
  }

  // Change
  unavailableVaccine(vacId: number, payload: any, callback?: () => void) {
    return this.api.put(`/admin/vaccineU/${vacId}`, payload).subscribe((res: any) => {
      if(callback) callback();
      this.alert.success('This vaccine unavailable now.').then(()=>{
        window.location.reload()
      })
      }, this.alert.apiFail);
  }



  // apiFail(res: any) {
  //   Swal.fire(res.error, res || 'Something went wrong', 'error');
  // }

}
