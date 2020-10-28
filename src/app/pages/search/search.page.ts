import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchResults;

  constructor() {
    this.searchResults = [
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
