import { FirebaseUserProvider } from './../../providers/firebase-user/firebase-user';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as _ from "lodash";
import { PdfProvider } from '../../providers/pdf/pdf';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  private result;
  private user;
  private triages = new Array();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public file: File,
    public toastCtrl: ToastController,
    public userProvider: FirebaseUserProvider,
    public pdf: PdfProvider
  ) {
    this.result = navParams.get('result');

    this.createPdf();
  }

  createPdf() {
    Promise.all([
      this.userProvider.getUser().then(user => this.user = user.data())
    ]).then(() => {
      let output = this.pdf.create({
        name: `${this.user.name} ${this.user.lastName}`,
        location: '223 Chiangmai City Thailand',
        datetime: '23 May 2016 14.30 PM.'
      })

      this.pdf.save(output)
        .then(result => this.showToast("Saved success"))
        .catch(error => this.showToast(JSON.stringify(error)))
    })
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
    })

    toast.present();
  }

}
