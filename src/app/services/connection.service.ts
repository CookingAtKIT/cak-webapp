import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe, RecipeEdit, RecipeCreate} from "../classes/recipe";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private static API_PATH = "https://";
  private token = "";

  constructor(private http: HttpClient) {

  }

  getRecipe(idHex: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${ConnectionService.API_PATH}/recipe/${idHex}`);
  }

  editRecipe(idHex: string,
             edit: {type: "title" | "public" | "portions" | "ingredients" | "step",
               value: string | boolean | number | {id: string, amount: number}}[]): Observable<RecipeEdit> {
    return this.http.post<RecipeEdit>(
        `${ConnectionService.API_PATH}/recipe/edit/${idHex}`,
        JSON.stringify({token: this.token, updates: edit})
    );
  }

  createRecipe(title: string): Observable<RecipeCreate> {
    return this.http.post<RecipeCreate>(
        `${ConnectionService.API_PATH}/recipe/create`,
        JSON.stringify({token: this.token, title})
    );
  }

}
