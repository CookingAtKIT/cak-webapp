import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage implements OnInit {

  constructor(public user: UserdataService, public util: UtilService) { }

  ngOnInit() {
  }

}
