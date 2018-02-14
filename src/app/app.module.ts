import { AdvisePage } from './../pages/advise/advise';
import { HistoryPage } from './../pages/history/history';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import { ResultPage } from './../pages/result/result';
import { TriagePage } from './../pages/triage/triage';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { TabPage } from './../pages/tab/tab';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicStorageModule } from '@ionic/storage';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { HospitalPage } from '../pages/hospital/hospital';
import { QuestionPage } from '../pages/question/question';
import { FirebaseUserProvider } from '../providers/firebase-user/firebase-user';
import { PdfProvider } from '../providers/pdf/pdf';
import { MapProvider } from '../providers/map/map';
import { FileOpener } from '@ionic-native/file-opener';
import { NotePage } from '../pages/note/note';

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
    TabPage,
    ProfilePage,
    TriagePage,
    HospitalPage,
    RegisterPage,
    QuestionPage,
    ResultPage,
    HistoryPage,
    AdvisePage,
    NotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabPage,
    ProfilePage,
    TriagePage,
    HospitalPage,
    RegisterPage,
    QuestionPage,
    ResultPage,
    HistoryPage,
    AdvisePage,
    NotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    Geolocation,
    GoogleMaps,
    CallNumber,
    File,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseUserProvider,
    PdfProvider,
    MapProvider,
    DocumentViewer,
    FileOpener
  ]
})
export class AppModule { }
