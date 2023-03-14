import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user-list',
  templateUrl: './register-user-list.component.html',
  styleUrls: ['./register-user-list.component.css']
})
export class RegisterUserListComponent {
  public users:any[] = [];
  constructor(
    private adminService: AdminService,
    private user: UserService,
    private alert: AlertService
  ) { }

  query: string="";
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.adminService.getAllUsers().subscribe(res => {
      this.users = res as any[];
    });
  }

  onDelete(userId: number) {
    this.user.deleteUser(userId, () => {
      this.ngOnInit();
    })
  }

  getValue(item:any){
    if(item.length){
      return item[item.length-1]
    }
    return {};
  }

  onComplete(item:any){
    let dose = item[item.length-1];
    console.log(item)
    this.adminService.completeDose(dose.doseId).subscribe((res: any) => {
      this.alert.success('Dose Complete successful.'); 
      this.getUsers();
    }, this.alert.apiFail);
    
  }
}
