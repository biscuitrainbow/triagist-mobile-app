import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { Loading } from 'ionic-angular/components/loading/loading';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { HistoryPage } from './../pages/history/history';
import { LoginPage } from './../pages/login/login';
import { TabPage } from './../pages/tab/tab';
import { ReferencePage } from '../pages/reference/reference';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  loader: Loading;

  private displayName: string = ''
  private email: string = ''
  private isAnonymous = false;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private loadingCtrl: LoadingController,
    private firebaseAuth: AngularFireAuth,
    private app: App,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.isAnonymous = user.isAnonymous;

        this.displayName = user.displayName;
        this.email = user.email;
        this.rootPage = TabPage;
      } else {
        this.rootPage = LoginPage;
      }
    })
  }

  logout() {
    this.firebaseAuth.auth.signOut()
  }

  history() {
    this.app.getRootNav().push(HistoryPage);
  }

  reference(){
    this.app.getRootNav().push(ReferencePage);
  }

  showLoading(message: string) {
    this.loader = this.loadingCtrl.create({
      content: message
    });

    this.loader.present();
  }

  hideLoading() {
    this.loader.dismiss();
  }
}

;