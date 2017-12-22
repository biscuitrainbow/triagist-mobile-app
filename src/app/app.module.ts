import { LoginPage } from './../pages/login/login';
import { TabPage } from './../pages/tab/tab';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';

var config = {
  apiKey: "AIzaSyD_bpH743Uu9PcQSFi6xSOFiQ_qtuydzxU",
  authDomain: "triage-8ae60.firebaseapp.com",
  databaseURL: "https://triage-8ae60.firebaseio.com",
  projectId: "triage-8ae60",
  storageBucket: "triage-8ae60.appspot.com",
  messagingSenderId: "617975366006"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
