import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  question: object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
    this.question = navParams.get('question');
  }

  showResult(result: string) {
    let uid = this.firebaseAuth.auth.currentUser.uid;
    this.firestore
      .collection('users')
      .doc(uid)
      .collection('triages')
      .add({
        code: result
      })
      .then(() => console.log("Saved successfully"))
      .catch(error => console.log(error.message));

  }

}
