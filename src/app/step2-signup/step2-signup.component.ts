import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-step2-signup',
  templateUrl: './step2-signup.component.html',
  styleUrls: ['./step2-signup.component.css']
})
export class Step2SignupComponent implements OnInit {

  companyName: string;

  constructor( public myInfo: InfoService ) { }

  ngOnInit() {
  }

  getCompanyName() {
    this.myInfo.setCompany(this.companyName);

    if (this.companyName === undefined) {
      this.myInfo.loggedIn = false;
    } else {
      this.myInfo.loggedIn = true;
    }

  }

}
