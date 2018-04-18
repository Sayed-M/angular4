import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
