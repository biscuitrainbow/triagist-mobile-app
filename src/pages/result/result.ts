import { AdvisePage } from './../advise/advise';
import { Component } from "@angular/core";
import { NavController, NavParams, Alert } from "ionic-angular";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { ToastController } from "ionic-angular/components/toast/toast-controller";
import { Loading } from "ionic-angular/components/loading/loading";

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";

import { File } from "@ionic-native/file";
import { Geolocation } from "@ionic-native/geolocation";
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from "@ionic-native/social-sharing";

import { MapProvider } from "../../providers/map/map";
import { PdfProvider } from "../../providers/pdf/pdf";
import { FirebaseUserProvider } from "./../../providers/firebase-user/firebase-user";

import * as moment from "moment";
import * as _ from "lodash";


declare var google;

@Component({
  selector: "page-result",
  templateUrl: "result.html"
})
export class ResultPage {
  private payload;
  public answers;
  private user;
  private location;
  private pdfMake;
  private loader: Loading;

  private pdfUrl = '';

  constructor(
    public fileOpener: FileOpener,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public userProvider: FirebaseUserProvider,
    public pdf: PdfProvider,
    public map: MapProvider,
    public socialSharing: SocialSharing,
    public loadingCtrl: LoadingController,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
    this.payload = navParams.get('payload');
    this.answers = navParams.get('answers');
    // this.saveResult();
  }

  saveResult() {
    let uid = this.firebaseAuth.auth.currentUser.uid;
    this.firestore
      .collection('users')
      .doc(uid)
      .collection('triages')
      .add({ answers: this.answers, payload: this.payload })
      .then(() => console.log("Saved successfully"))
      .catch(error => console.log(error.message));
  }

  async openPdf() {
    if (this.pdfUrl == '') {
      this.showLoading("Generating PDF file...");
      await this.createPdf();
      this.hideLoading();
    }

    this.fileOpener.open(this.pdfUrl, 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));
  }

  async share() {
    if (this.pdfUrl == '') {
      this.showLoading("Generating PDF file...");
      await this.createPdf();
      this.hideLoading();
    }

    this.socialSharing.share(
      "Body",
      "Subject",
      // ["natthaponsricort@gmail.com"],
      // undefined,
      // undefined,
      this.pdfUrl
    )
      .catch(e => alert(JSON.stringify(e)));
  }

  async createPdf() {
    try {
      let data = { code: this.payload.code, answers: this.answers };
      let blob = await this.pdf.create(data);
      let saveResult = await this.pdf.save(blob);
      return this.pdfUrl = saveResult.nativeURL;
    } catch (e) {
      this.showToast(e);
      // this.hideLoading();
    }
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 10000
      })
      .present();
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

  navigateAdvisePage() {
    this.navCtrl.push(AdvisePage, {
      advise: this.payload.advise
    })
  }
}
