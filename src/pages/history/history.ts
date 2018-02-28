import { ResultPage } from './../result/result';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import BasePage from '../BasePage';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage extends BasePage {

  private historyObservable: Observable<any>;
  private triages;

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

    this.historyObservable = this.firestore
      .collection('users')
      .doc(uid)
      .collection('triages')
      .valueChanges()

    this.historyObservable.subscribe(value => {
      this.triages = value
      this.hideLoading();
    });
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

}
