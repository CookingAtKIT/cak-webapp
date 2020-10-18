import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage implements OnInit {
  recipeOfTheDay = {
    forPreferences: [
        {id: "0", allergy: true},
        {id: "65", allergy: false}
    ]
  };

  recommendRecipes = [
    {
      
    }
  ];

  constructor(public user: UserdataService, public util: UtilService) { }

  ngOnInit() {
  }

}
