import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';
import { VaccinationApiService } from 'src/app/services/vaccination-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public currentLoggedInUser: any;

  constructor(
    private alert: AlertService,
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    let userId = sessionStorage.getItem('SESSION_USER_ID') as string;
    this.user.getUserDetails(userId).subscribe(res => {
      this.currentLoggedInUser = res;
    });
  }

  edit(){
    sessionStorage.setItem('editUser', JSON.stringify(this.currentLoggedInUser) );
    this.router.navigate(['/user/edit-profile']);
  }



}
