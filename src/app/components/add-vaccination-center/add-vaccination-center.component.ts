import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { VaccinationApiService } from 'src/app/services/vaccination-api.service';

@Component({
  selector: 'app-add-vaccination-center',
  templateUrl: './add-vaccination-center.component.html',
  styleUrls: ['./add-vaccination-center.component.css']
})
export class AddVaccinationCenterComponent {

  constructor(private api: VaccinationApiService, private alert: AlertService) { }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: any = { ...ngForm.form.value };
    this.api.addVaccinationCenter(credentials);
    ngForm.resetForm();
  }

}
