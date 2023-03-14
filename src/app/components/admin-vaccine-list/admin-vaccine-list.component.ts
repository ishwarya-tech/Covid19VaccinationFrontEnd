import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { VaccinationApiService } from 'src/app/services/vaccination-api.service';

@Component({
  selector: 'app-vaccine-list-list',
  templateUrl: './admin-vaccine-list.component.html',
  styleUrls: ['./admin-vaccine-list.component.css']
})
export class AdminVaccineListComponent {
  public bookings: any[] = [];
  public vaccineList: any[] = [];

  constructor(
    private vaccinationApiService: VaccinationApiService,
    private alert: AlertService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getVaccineList();
  }

  getVaccineList(){
    this.adminService.getVaccineList().subscribe(res => {
      this.vaccineList = res as any[];
    });
  }

  onDelete(vacId: number) {
    this.vaccinationApiService.deleteVaccine(vacId, () => {
      this.getVaccineList();
    });
  }

  // Change
  availableVaccine(vcId: number) {
    this.vaccinationApiService.availableVaccine(vcId, () => {
      this.getVaccineList();
    });
  }

  // Change
  unavailableVaccine(vcId: number) {
    this.vaccinationApiService.unavailableVaccine(vcId, () => {
      this.getVaccineList();
    });
  }
}
