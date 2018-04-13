import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { QUESTIONS } from './questions';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { ReferencePage } from '../reference/reference';

@Component({
  selector: 'page-triage',
  templateUrl: 'triage.html',
})
export class TriagePage {
  private questions = QUESTIONS;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public app: App
  ) {
    menuCtrl.enable(true);
  }

  startTriage(question: object) {
    this.app.getRootNav().push(QuestionPage, {
      question: question
    })
  }

  navigateReferencePage() {
    this.navCtrl.push(ReferencePage);
  }
}
