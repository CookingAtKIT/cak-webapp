import { Injectable } from '@angular/core';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  loggedIn = false;
  user: User;

  constructor() { }

  loginGuest(): void {
    this.user = new User("guest", 0);
    this.loggedIn = true;
  }

  logoutGuest(): void {
    this.user = null;
    this.loggedIn = false;
  }
}
