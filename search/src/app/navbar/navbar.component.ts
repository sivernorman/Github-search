import { Component, OnInit } from '@angular/core';
import { ServceService } from '../servce.service';
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!:UserProfile
  constructor(private userProfileService:ServceService ) {
   
   }

  ngOnInit(): void {
    // this.userProfileService.userRequest();
    // this.user=this.userProfileService.user;
    // console.log(this.user);
    
  }

}
