import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  constructor(public user: UserdataService) { }

  ngOnInit() {
  }

}
