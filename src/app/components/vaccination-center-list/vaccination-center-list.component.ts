import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { VaccinationApiService } from 'src/app/services/vaccination-api.service';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.css']
})
export class VaccinationCenterListComponent {
  public bookings: any[] = [];
  public vaccineCenter: any[] = [];

  constructor(
    private vaccinationApiService: VaccinationApiService,
    private alert: AlertService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getAllcenters();
  }

  getAllcenters(){
    this.adminService.getAllCenters().subscribe(res => {
      this.vaccineCenter = res as any[];
    });
  }

  onDelete(vacId: number) {
    this.vaccinationApiService.deleteVaccineCenter(vacId, () => {
      this.getAllcenters();
    });
  }

  // Change
  availableCenter(vcId: number) {
    this.vaccinationApiService.availableVaccineCenter(vcId, () => {
      this.getAllcenters();
    });
  }

  // Change
  unavailableCenter(vcId: number) {
    this.vaccinationApiService.unavailableVaccineCenter(vcId, () => {
      this.getAllcenters();
    });
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
  }
}
