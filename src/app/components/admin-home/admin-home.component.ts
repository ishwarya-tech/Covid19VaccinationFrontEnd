import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  public totalUsers?: number;
  public totalVaccines?: number;
  public totalVaccineCenters?: number;

  public vaccineList: any[] = [];
  public vaccineCenterList: any[] = [];
  public users:any[] = [];

  constructor(
    private adminService: AdminService
  ) {}



  ngOnInit(): void {
    this.getVaccineList()
    this.getAllcenters()
    this.getUsers()
  }

  getVaccineList(){
    this.adminService.getVaccineList().subscribe(res => {
      this.vaccineList = res as any[];
    });
  }

  getAllcenters(){
    this.adminService.getAllCenters().subscribe(res => {
      this.vaccineCenterList = res as any[];
    });
  }

  getUsers(){
    this.adminService.getAllUsers().subscribe(res => {
      this.users = res as any[];
    });
  }

}
