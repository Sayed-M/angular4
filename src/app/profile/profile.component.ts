import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public myInfo: InfoService ) { }

  ngOnInit() {
  }

}
