import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  constructor(public user: UserdataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const oId = this.route.snapshot.paramMap.get("id");
    console.log(oId);
  }

}
