import { Injectable } from '@angular/core';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  loggedIn = false;
  user = new User("guest", 0);

  preferences = [
    {
      id: "0",
      label: "Allergie gegen Nüsse",
      value: "true",
      allergy: true
    },
    {
      id: "65",
      label: "Vegan",
      value: "false",
      allergy: false
    },
    {
      id: "9075457",
      label: "Vegetarisch",
      value: "false",
      allergy: false
    }
  ];

  constructor() {}

  loginGuest(): void {
    this.user = new User("guest", 0);
    this.loggedIn = true;
    // todo: get preferences
  }

  logout(): void {
    this.user = null;
    this.loggedIn = false;
    document.location.href = "";
  }

  createInfoChips(recipe: {forPreferences: {id: string, allergy: boolean}[]}): {name: string, icon: string, color: string}[] {
    const infoChips = [];
    for (const preference of this.preferences) {
      for (const ingredient of recipe.forPreferences) {
        if (preference.id === ingredient.id && preference.value === "true") {
          infoChips.push({
            name: preference.label,
            icon: (preference.allergy ? "warning-outline" : ""),
            color: (preference.allergy ? "danger" : "success")
          });
        }
      }
    }
    return infoChips;
  }
}
