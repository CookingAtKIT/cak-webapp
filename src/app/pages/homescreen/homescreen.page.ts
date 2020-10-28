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

  recommendedRecipes;

  constructor(public user: UserdataService, public util: UtilService) {
    this.recommendedRecipes = [
      {
        id: "fnjdsgjn4857z39474",
        title: "Pizza Neapolitana",
        subtitle: "Backofen und Pizzastein",
        imgsrc: "https://www.koch-mit.de/app/uploads/2020/02/pizzatitel-300x169.jpg",
        description: "Pizza nach traditionell Neapolitanischer Art"
      },
      {
        id: "fnjdsgjn4857z39474",
        title: "Pizza Neapolitana",
        subtitle: "Backofen und Pizzastein",
        imgsrc: "https://www.koch-mit.de/app/uploads/2020/02/pizzatitel-300x169.jpg",
        description: "Pizza nach traditionell Neapolitanischer Art"
      },
      {
        id: "fnjdsgjn4857z39474",
        title: "Pizza Neapolitana",
        subtitle: "Backofen und Pizzastein",
        imgsrc: "https://www.koch-mit.de/app/uploads/2020/02/pizzatitel-300x169.jpg",
        description: "Pizza nach traditionell Neapolitanischer Art"
      },
      {
        id: "fnjdsgjn4857z39474",
        title: "Pizza Neapolitana",
        subtitle: "Backofen und Pizzastein",
        imgsrc: "https://www.koch-mit.de/app/uploads/2020/02/pizzatitel-300x169.jpg",
        description: "Pizza nach traditionell Neapolitanischer Art"
      }
    ];
  }

  ngOnInit() {
  }

}
