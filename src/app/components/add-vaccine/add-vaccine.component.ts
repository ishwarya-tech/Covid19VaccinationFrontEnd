import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { VaccinationApiService } from 'src/app/services/vaccination-api.service';

@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.component.html',
  styleUrls: ['./add-vaccine.component.css']
})
export class AddVaccineComponent {

  constructor(
    private vaccinationApiService: VaccinationApiService,
    private alert: AlertService
  ) { }

  ngOnInit() {}

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials = { ...ngForm.form.value, userId: 0 };
    this.vaccinationApiService.addVaccine(credentials);
    ngForm.resetForm();
  }
}
