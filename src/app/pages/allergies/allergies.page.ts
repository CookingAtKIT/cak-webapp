import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.page.html',
  styleUrls: ['./allergies.page.scss'],
})
export class AllergiesPage implements OnInit {
  constructor(public userdata: UserdataService) { }

  ngOnInit() {
  }

  editPreferences(preference: {id: string, label: string, value: string, allergy: boolean}): void {
    const toBackend = [{id: preference.id, value: this.userdata.preferences[this.userdata.preferences.indexOf(preference)].value}];
    console.log(this.userdata.preferences);
    // todo: send to backend
  }

}
