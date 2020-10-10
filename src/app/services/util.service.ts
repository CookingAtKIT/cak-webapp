import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;

  constructor() { }
}
