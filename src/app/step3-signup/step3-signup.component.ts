import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-step3-signup',
  templateUrl: './step3-signup.component.html',
  styleUrls: ['./step3-signup.component.css']
})
export class Step3SignupComponent implements OnInit {
    
    userName: string;

    email: string;

    password: any;

    constructor( public myInfo: InfoService ) { }

    getUserName() {
        this.myInfo.setUser(this.userName);

        this.myInfo.setEmail(this.email);

        this.myInfo.setPassword(this.password);

        if (this.userName === undefined) {
            this.myInfo.loggedIn = false;
        } else {
            this.myInfo.loggedIn = true;
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

    // ================= PASSWORD STRENGTH ================
    const result = $('.last-step .pass-meter-color');
    $('.password-input').keyup(function() {
        $('.after-password-error .changable').html(checkStrength($('.password-input').val()));
    });
    function checkStrength(password) {
    // initial strength
    let strength = 0;
    if (password.length === 0) {
        result.removeClass();
        return '';
    }
    // if the password length is less than 7, return message.
    if (password.length < 9) {
        result.addClass('weak');
        result.css({'width': '25px', 'background': '#f00'});
        return '<span style="color:#f00;font-weight:600;font-size:12px;">Weak</span>';
    }
    // length is ok, lets continue.
    // if length is 8 characters or more, increase strength value
    if (password.length > 9) {strength += 1; }
    // if password contains both lower and uppercase characters, increase strength value
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {strength += 1; }
    // if it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {strength += 1; }
    // if it has two special characters, increase strength value
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) {strength += 1; }
    // now we have calculated strength value, we can return messages
    // if value is less than 2
    if (strength < 2) {
        result.css({'width': '50px', 'background': '#afe9ff'});
        result.addClass('normal');
        return '<span style="color:#afe9ff;font-weight:600;font-size:12px;">Normal</span>';
    } else if (strength === 2 ) {
        result.css({'width': '75px', 'background': '#4642d8'});
        result.addClass('medium');
        return '<span style="color:#4642d8;font-weight:600;font-size:12px;">Medium</span>';
    } else {
        result.css({'width': '100px', 'background': '#00b656'});
        result.addClass('vstrong');
        return '<span style="color:#00b656;font-weight:600;font-size:12px;">Strong</span>';
    }
    }
    // ================= PASSWORD STRENGTH ================
    }

}
