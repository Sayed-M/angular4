import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { CallapiService } from '../services/callapi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    '../../assets/layouts/layout/css/themes/darkblue.min.css',
    '../../assets/layouts/layout/css/custom-settings.css',
    './profile.component.css'
]
})
export class ProfileComponent implements OnInit {

  constructor( public myInfo: InfoService, private call: CallapiService ) { }

  ngOnInit() {
  }

  callapi() {
    this.call.getPosts().subscribe(
      next => {
        for (var i = 1; i <= 5; i++) {
          setTimeout(function(x) {
            return function() {
              $('.posts .post-title').append('<a href="#">' + next[x].title + '</a><br>')
            };
          }(i), 400*i);
        }
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Done!');
      }
    );
  }

}
