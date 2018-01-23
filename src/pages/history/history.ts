import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  private historyObservable: Observable<any>;
  private triages;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
  }

  ionViewDidLoad() {
    let uid = this.firebaseAuth.auth.currentUser.uid;

    this.historyObservable = this.firestore
      .collection('users')
      .doc(uid)
      .collection('triages')
      .valueChanges()

    this.historyObservable.subscribe(value => this.triages = value);
  }

}
