import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ResultPage } from './../result/result';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { questionType, choiceType, criteriaType } from '../../datas/triages/meta';
import * as moment from "moment";
import { App } from 'ionic-angular/components/app/app';
import triages from '../../datas/triages/triages';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild(Slides) slides: Slides

  question: any;

  histories = [];
  questionStacks = [];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth,
    public platform: Platform,
    public menuCtrl: MenuController,
    public app: App
  ) {
    this.question = navParams.get('question');
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);

    let toast = this.toastCtrl.create({
      message: 'กวาดนิ้วไปด้านขวาเพื่อนย้อนกลับ',
      duration: 2000
    })

    toast.present();
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }


  onChoiceClick(choice, question) {
    switch (question.type) {
      case questionType.button:
        console.log('button');
        this.buttonChoiceNavgation(choice, question);
        break;

      case questionType.checkbox:
        console.log('checkbox');
        this.checkboxChoiceNavigation(question);
        break;

      default:
        console.log('default');

        break;
    }
  }

  buttonChoiceNavgation(choice, question) {
    let history = { from: question.from, question: question.name, answer: choice.name, result: null, };

    switch (choice.type) {
      case choiceType.question: {
        this.toQuestion(choice.to);
        this.pushQuestion(question.from);
        break;
      }

      case choiceType.result: {
        this.navigateResult(choice.result);
        history.result = choice.result;
        break;
      }

      case choiceType.module: {
        const module = triages.find((question) => choice.module == question.module);
        this.navigateModule(module);

        break;
      }
    }

    this.histories.push(history);

  }

  checkboxChoiceNavigation(question) {
    const checkeds = question.choices.filter(item => item.checked == true);
    const textChoices = checkeds.map(item => item.name).join(" ,");

    let history = { from: question.from, question: question.name, answer: textChoices, result: null, };

    const { criteria } = question;
    const matchedCriteria = checkeds.length >= question.criteria.minimum;

    if (matchedCriteria) {
      switch (criteria.type) {
        case criteriaType.question:
          this.toQuestion(criteria.to);
          this.pushQuestion(question.from);
          break;

        case criteriaType.result:
          this.navigateResult(criteria.result);
          history.result = criteria.result;
          break;

        default:
          break;
      }
    } else {
      this.toQuestion(question.to);
    }

    this.histories.push(history);
  }

  navigateResult(result) {
    this.saveResult(result, this.histories);
    this.navCtrl.push(ResultPage, { result: result, histories: this.histories });
  }


  navigateModule(module) {
    this.app.getRootNav().push(QuestionPage, {
      question: module,
    })
  }

  toQuestion(to) {
    this.slides.slideTo(to);
  }

  onSwipe(event, question) {
    if (event.direction === 4) {
      this.back();
    }
  }

  pushQuestion(index) {
    const last = this.questionStacks[this.questionStacks.length - 1];

    if (index !== last) {
      this.questionStacks.push(index);
    }
  }

  back() {
    const to = this.questionStacks[this.questionStacks.length - 1];

    this.toQuestion(to);
    this.questionStacks.pop();
  }

  close() {
    this.navCtrl.pop();
  }

  saveResult(payload, history) {
    let timestamp = moment().unix();
    let uid = this.firebaseAuth.auth.currentUser.uid;

    this.firestore
      .collection('triages')
      .add({ timestamp: timestamp, history: history, payload: payload, user: uid, module: this.question.name })
      .then(() => console.log("Saved successfully"))
      .catch(error => console.log(error.message));
  }
}
