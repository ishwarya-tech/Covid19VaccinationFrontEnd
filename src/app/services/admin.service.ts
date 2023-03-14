import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }

  getAllCenters() {
    return this.api.get(`/admin/vaccinecenters`);
  }

  getVaccineList() {
    return this.api.get(`/admin/vaccines`);
  }

  getAllUsers() {
    return this.api.get(`/admin/users`);
  }

  completeDose(doseId: number){
    return this.api.put(`/admin/doseStatus/${doseId}`, {})
  }
}
