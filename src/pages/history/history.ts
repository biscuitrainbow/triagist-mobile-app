import { ResultPage } from './../result/result';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import BasePage from '../BasePage';
import * as moment from "moment";

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage extends BasePage {

  private historyObservable: Observable<any>;
  private triages: Array<Object> = [];

  private lastVisible;
  private limit = 8;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl)
  }

  ionViewDidLoad() {
    this.showLoading("Fetching data...");
    let uid = this.firebaseAuth.auth.currentUser.uid;

    let ref = this.firestore
      .collection('users')
      .doc(uid)
      .collection('triages')
      .ref
      .orderBy('timestamp', "desc")
      .limit(this.limit)
      .get()
      .then(val => {
        this.lastVisible = val.docs[val.docs.length - 1];
        val.docs.map(doc => this.triages.push(doc.data()));
        this.hideLoading();
      })
  }

  view(triage) {
    this.navCtrl.push(ResultPage, {
      payload: triage.payload,
      answers: triage.answers
    })
  }

  delete(triage) {
    // let uid = this.firebaseAuth.auth.currentUser.uid;

    // this.firestore
    //   .collection('users')
    //   .doc(uid)
    //   .collection('triages')
    //   .doc(triage);
  }

  doInfinite(event) {
    let uid = this.firebaseAuth.auth.currentUser.uid;

    if (this.lastVisible !== undefined) {
      this.firestore
        .collection('users')
        .doc(uid)
        .collection('triages')
        .ref
        .orderBy('timestamp', "desc")
        .startAfter(this.lastVisible)
        .limit(this.limit)
        .get()
        .then(val => {
          this.lastVisible = val.docs[val.docs.length - 1];
          val.docs.map(doc => this.triages.push(doc.data()));
          event.complete();
        })
    } else {
      event.complete();
    }
  }

}
