import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { QUESTIONS } from './questions';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { ReferencePage } from '../reference/reference';
import triages from '../../datas/triages/triages';

@Component({
  selector: 'page-triage',
  templateUrl: 'triage.html',
})
export class TriagePage {
  questions = triages;
  simpleMode = false;
  searchQuery: string = '';
  filteredTriages = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public app: App
  ) {
    menuCtrl.enable(true);

    this.filteredTriages = this.questions;
  }

  navigateTriageQuestion(question: object) {
    this.app.getRootNav().push(QuestionPage, {
      question: question
    })
  }

  navigateReferencePage() {
    this.navCtrl.push(ReferencePage);
  }


  search(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.filteredTriages = this.questions.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.filteredTriages = this.questions;
    }

  }
}
