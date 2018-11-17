import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Quienes Somos',
      url: '/quienessomos',
      icon: 'home'
    },
    {
      title: '¿Soy Victima?',
      url: '/soyvictima',
      icon: 'home'
    },
    {
      title: '¿Qué Hacer?',
      url: '/quehacer',
      icon: 'home'
    },
    {
      title: 'Recursos',
      url: '/recursos',
      icon: 'home'
    },
     {
      title: 'Testimonios',
      url: '/testimonios',
      icon: 'home'
    },
     {
      title: 'Recomendaciones',
      url: '/recomendaciones',
      icon: 'home'
    },
     {
      title: 'Artículos',
      url: '/articulos',
      icon: 'home'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
