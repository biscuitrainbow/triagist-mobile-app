import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { ToastController } from "ionic-angular/components/toast/toast-controller";
import { Loading } from "ionic-angular/components/loading/loading";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";
import { File } from "@ionic-native/file";
import { Geolocation } from "@ionic-native/geolocation";
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
  private question;
  private code;
  private description;
  private user;
  private location;
  private pdfMake;
  private loader: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public userProvider: FirebaseUserProvider,
    public pdf: PdfProvider,
    public map: MapProvider,
    public socialSharing: SocialSharing,
    public loadingCtrl: LoadingController
  ) {
    this.question = navParams.get("question");
    console.log(this.question);
  }

  async createPdf() {
    this.showLoading("Generating PDF file...");

    try {
      let data = {
        question: this.question.question,
        code: this.question.code,
        description: this.question.description
      };

      let blob = await this.pdf.create(data);
      let saveResult = await this.pdf.save(blob);

      this.hideLoading();

      this.socialSharing.shareViaEmail(
        "Body",
        "Subject",
        ["natthaponsricort@gmail.com"],
        undefined,
        undefined,
        saveResult.nativeURL
      );
    } catch (e) {
      this.showToast(e);
      this.hideLoading();
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
}
