import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {UserdataService} from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'homescreen',
      icon: 'home'
    },
    {
      title: 'Selectable2',
      url: '/folder/Selectable2',
      icon: 'paper-plane'
    },
    {
      title: 'Selectable3',
      url: '/folder/Selectable3',
      icon: 'heart'
    },
    {
      title: 'Selectable4',
      url: '/folder/Selectable4',
      icon: 'archive'
    },
    {
      title: 'Selectable5',
      url: '/folder/Selectable5',
      icon: 'trash'
    },
    {
      title: 'Selectable6',
      url: '/folder/Selectable6',
      icon: 'warning'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public userdata: UserdataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
