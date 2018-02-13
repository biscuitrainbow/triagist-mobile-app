import { TYPE } from './../triage/questions';
import { ResultPage } from './../result/result';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild(Slides) slides: Slides
  question: object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
    this.question = navParams.get('question');
  }

  ionViewDidLoad() {
  }

  // showResult(question) {
  //   let uid = this.firebaseAuth.auth.currentUser.uid;
  //   this.firestore
  //     .collection('users')
  //     .doc(uid)
  //     .collection('triages')
  //     .add(question)
  //     .then(() => console.log("Saved successfully"))
  //     .catch(error => console.log(error.message));

  //   this.navCtrl.push(ResultPage, {
  //     question: question
  //   })
  // }

  onChoiceClick(choice) {
    switch (choice.type) {
      case TYPE.QUESTION: {
        this.slides.slideTo(choice.to);
        break;
      }

      case TYPE.RESULT: {
        this.navCtrl.push(ResultPage, {
          payload: choice.payload
        });
        break;
      }
    }

  }



}
