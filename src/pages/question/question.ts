import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { TYPE } from './../triage/questions';
import { ResultPage } from './../result/result';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild(Slides) slides: Slides
  question: object;

  answers = [];
  questionStack = [];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth,
    public platform: Platform,
    public menuCtrl: MenuController
  ) {
    this.question = navParams.get('question');
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);

    let toast = this.toastCtrl.create({
      message: 'กวาดนิ้วไปด้านขวาเพื่อนย้อนกลับ',
      duration: 5000
    })

    toast.present();
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }


  onChoiceClick(choice, question) {
    switch (choice.type) {
      case TYPE.QUESTION: {

        this.questionStack.push({ from: question.from, question: question.question, answer: choice.name });
        this.slides.slideTo(choice.to);
        break;
      }

      case TYPE.RESULT: {


        this.questionStack.push({ from: question.from, question: question.question, answer: choice.name });
        this.saveResult(choice.payload, this.questionStack);

        this.navCtrl.push(ResultPage, { payload: choice.payload, answers: this.questionStack });
        break;
      }
    }
  }

  onNextClick(choices, question) {

    let checkedChoices = choices.filter(item => item.checked == true);
    let textChoice = checkedChoices.map(item => item.name).join(" ,");

    this.questionStack.push({ from: question.from, question: question.question, answer: textChoice });

    if (checkedChoices.length >= 2) {
      this.navCtrl.push(ResultPage, { payload: question.payload, answers: this.questionStack });
    } else {
      this.slides.slideTo(question.to);
    }
  }

  onSwipe(event, question) {
    if (event.direction === 4) {

      this.slides.slideTo(this.questionStack[this.questionStack.length - 1].from);
      this.questionStack.pop();
    }
  }

  close() {
    this.navCtrl.pop();
  }

  saveResult(payload, answers) {
    console.log(this.questionStack);
    let uid = this.firebaseAuth.auth.currentUser.uid;
    this.firestore
      .collection('users')
      .doc(uid)
      .collection('triages')
      .add({ answers: answers, payload: payload })
      .then(() => console.log("Saved successfully"))
      .catch(error => console.log(error.message));
  }





}
