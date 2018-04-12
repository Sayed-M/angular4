import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // ================= Tabs ================
    $('.main-content .left-content .form-table .tabs span').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }

}
