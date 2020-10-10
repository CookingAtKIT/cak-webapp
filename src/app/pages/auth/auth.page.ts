import {Component, Input, OnInit} from '@angular/core';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @Input() preview: boolean;

  constructor(public util: UtilService) { }

  ngOnInit() {
  }

}
