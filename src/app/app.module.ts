import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CallNumber } from '@ionic-native/call-number';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HospitalSearchPage } from '../pages/hospital-search/hospital-search';
import { HospitalPage } from '../pages/hospital/hospital';
import { NotePage } from '../pages/note/note';
import { ProfilePage } from '../pages/profile/profile';
import { QuestionPage } from '../pages/question/question';
import { ReferencePage } from '../pages/reference/reference';
import { PipesModule } from '../pipes/pipes.module';
import { FirebaseUserProvider } from '../providers/firebase-user/firebase-user';
import { MapProvider } from '../providers/map/map';
import { PdfProvider } from '../providers/pdf/pdf';
import { AdvisePage } from './../pages/advise/advise';
import { HistoryPage } from './../pages/history/history';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { ResultPage } from './../pages/result/result';
import { TabPage } from './../pages/tab/tab';
import { TriagePage } from './../pages/triage/triage';
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
    TabPage,
    ProfilePage,
    TriagePage,
    HospitalPage,
    RegisterPage,
    QuestionPage,
    ResultPage,
    HistoryPage,
    AdvisePage,
    NotePage,
    HospitalSearchPage,
    ReferencePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    AngularFireAuthModule,
    AngularFirestoreModule,
    PipesModule,
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
    NotePage,
    HospitalSearchPage,
    ReferencePage
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
    FileOpener,
  ]
})
export class AppModule { }
