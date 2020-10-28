import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../classes/recipe';
import {ConnectionService} from '../../services/connection.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipe: Recipe;

  constructor(public user: UserdataService, private route: ActivatedRoute, private backend: ConnectionService) {
    this.recipe = {
      id: "_id",
      public: true,
      flags: 0,
      title: "Pizza Neapolitana",
      description: "Pizza nach traditionell Neapolitanischer Art nach traditionell Neapolitanischer traditionell Neapolitanischer Pizza Pasta",
      author: "_id",
      lastEdit: new Date(),
      thumbnail: "https://www.koch-mit.de/app/uploads/2020/02/pizzatitel-300x169.jpg",
      ingredients: [
        {
          ingredient: {
            displayname:"Zucker",
            allgergene: [],
            unit: "g",
            kcal: 0
          },
          amount: 300
        },
        {
          ingredient: {
            displayname:"Salz",
            allgergene: [],
            unit: "EL",
            kcal: 0
          },
          amount: 10
        },
      ],
      steps: [
        {
          index: 1,
          title: "Teig machen",
          body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          img: "https://www.bzfe.de/_data/img/980er/brotteig_980_rdax_720x316_80.jpg"
        },
        {
          index: 2,
          title: "Pizza in den Ofen schieben",
          body: "Titel sagt alles",
          img: "https://www.alfaforni.com/wp-content/uploads/2018/07/allegro-yellow-pizza-oven-outdoor-cooking.jpg"
        },
      ],
      likes: 0,
      portions: 2,
      comments: [
        {
          author: "Detlef D! Soost",
          body: "Und Five, Six, Seve, Eight",
          likes: 69,
          images: [
              ""
          ]
        },
        {
          author: "Marcel D'Avis",
          body: "Wenn bei Ihnen was nicht richtig läuft, bringen wir es wieder zum laufen.",
          likes: 2,
          images: [
              "https://var.uicdn.net/pdfs/img/1und1-logo-rgb-500px.png",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgE8gqqd71EBVsXevsR6mw2eJiNTjBgB572g&usqp=CAU"
          ]
        }
      ]
    };
  }

  sliderConfig = {
    spaceBetween: -10,
    centeredSlides: true,
    slidesPerView: 1.12,
    autoHeight: true
  };

  ngOnInit() {
    const oId = this.route.snapshot.paramMap.get("id");
    // this.backend.getRecipe(oId).subscribe(recipe => {
    //   this.recipe = recipe;
    // });
  }

}
