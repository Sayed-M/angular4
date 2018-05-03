import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { InfoService } from '../services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor( public myInfo: InfoService, private router: Router ) { }

  confirmEmail: string;

  confirmPassword: any;

  logged: boolean = true;

  login() {
    if (this.confirmEmail === this.myInfo.getEmail() && this.confirmPassword === this.myInfo.getPassword() && this.myInfo.getEmail() !== undefined && this.myInfo.getPassword() !== undefined) {
      this.router.navigate(['profile']);
    } else if (this.myInfo.getEmail() === undefined || this.myInfo.getPassword() === undefined) {
      this.logged = false;
    }  else if (this.myInfo.getEmail() === '' || this.myInfo.getPassword() === '') {
      this.logged = false;
    } else {
      this.logged = false;
    }
  }

  ngOnInit() {

    // ================= SHOW PASSWORD ================
    $('.password-input').each(function (index, input) {
      let $input = $(input);
      $('.form-table .show').click(function () {
          let change = '';
          if ($(this).html() === 'Show') {
              $(this).html('Hide');
              change = 'text';
          } else {
              $(this).html('Show');
              change = 'password';
          }
          const rep = $('<input type="' + change + '" />')
          .attr('id', $input.attr('id'))
          .attr('name', $input.attr('name'))
          .attr('class', $input.attr('class'))
          .val($input.val())
          .insertBefore($input);
        $input.remove();
        $input = rep;
      });
    });
  }

}
