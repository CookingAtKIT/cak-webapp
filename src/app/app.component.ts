import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserdataService } from './services/userdata.service';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Start',
      url: 'homescreen',
      icon: 'home'
    },
    {
      title: 'Entdecken',
      url: 'explore',
      icon: 'rocket'
    },
    {
      title: 'Suchen',
      url: 'search',
      icon: 'search'
    },
    {
      title: 'Erstellen',
      url: 'create',
      icon: 'newspaper'
    },
    {
      title: 'Profil',
      url: 'profile',
      icon: 'person-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public userdata: UserdataService,
    public util: UtilService
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
