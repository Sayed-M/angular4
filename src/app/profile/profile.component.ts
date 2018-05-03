import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';

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

  constructor( public myInfo: InfoService ) { }

  ngOnInit() {
  }

}
