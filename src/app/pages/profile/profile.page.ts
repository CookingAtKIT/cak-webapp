import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public userdata: UserdataService) { }

  ngOnInit() {
  }

}
