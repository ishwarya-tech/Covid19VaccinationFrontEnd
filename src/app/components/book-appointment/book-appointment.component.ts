import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { BookSlot, Register } from 'src/app/interfaces';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  bookingForm: BookSlot;
  loggedInUserId = Number(sessionStorage.getItem('SESSION_USER_ID'))  
  public vaccineList: any[] = [];
  public vaccineCenter: any[] = [];
  public timeSlot = [    
       "9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"    
  ];
  editFlag: boolean = false;

  // change
  currentLoggedInUser: any;


  constructor(
    private appointmentService: AppointmentService,
    private alert: AlertService,
    private adminService: AdminService,
    private router: Router,
    // Change
    private userService: UserService
  ) { 
    this.bookingForm = {
      id : this.loggedInUserId
      
    }    
  }

  ngOnInit() {
    this.checkAppointmentData();
    this.getVaccineList();
    this.getAllcenters();
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("date")[0].setAttribute('min', today);

    // change
    let userId = sessionStorage.getItem('SESSION_USER_ID') as string;
    this.userService.getUserDetails(userId).subscribe(res => {
      this.currentLoggedInUser = res;
    });
  }

  checkAppointmentData(){
    if(this.router.url.includes('add')){
      sessionStorage.removeItem('slot')
    }else{
      this.editFlag = true;
      let data:any = JSON.parse(sessionStorage.getItem('slot') || '{}');
      this.bookingForm['bookingid'] = data.appointment.bookingid;
      this.bookingForm['slot'] = data.appointment.slot;
      this.bookingForm['vid'] = data.vaccine.vaccineId;
      this.bookingForm['vcid'] = data.center.centerCode;
      this.bookingForm['date'] = data.appointment.date;
      this.bookingForm['dose'] = data.doseCount;
      this.bookingForm['mobile'] = data.appointment.mobile;
    }
  }

  getVaccineList(){
    this.adminService.getVaccineList().subscribe(res => {
      this.vaccineList = res as any[];
    });
  }

  getAllcenters(){
    this.adminService.getAllCenters().subscribe(res => {
      this.vaccineCenter = res as any[];
    });
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    if(!this.editFlag){
      this.bookingForm['dose'] = Number(ngForm.form.value['dose']);
      this.bookingForm['vid'] = Number(ngForm.form.value['vid']);
      this.bookingForm['vcid'] = Number(ngForm.form.value['vcid']);
      this.bookingForm['bookingStatus'] = "";

      this.appointmentService.bookAppointment(this.bookingForm,this.loggedInUserId, this.bookingForm['vid'],this.bookingForm['vcid'], this.bookingForm['dose'] );
    }else{
      let update = {
        "bookingid": this.bookingForm.bookingid,
        // "mobile": this.bookingForm.mobile,
        "mobile": this.currentLoggedInUser.mobile,
        "date": this.bookingForm.date,
        "slot": this.bookingForm.slot,
      }
      this.appointmentService.updateAppointment(update);
    }
    
    ngForm.resetForm();
  }

}
