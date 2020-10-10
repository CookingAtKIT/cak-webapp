import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @Input() preview: boolean;

  constructor() { }

  ngOnInit() {
  }

}
