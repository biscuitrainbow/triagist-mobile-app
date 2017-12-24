import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { App } from 'ionic-angular';


@Component({
  selector: 'page-triage',
  templateUrl: 'triage.html',
})
export class TriagePage {

  types: any = [
    { name: 'แพ้ยา', description: 'แพ้อาหาร , สัตว์ต่อย , ภูมิแพ้', image: 'assets/imgs/vitamins.png', color: '#B1DC76' },
    { name: 'ได้รับสารพิษ', description: 'ยาเกินขนาด', image: 'assets/imgs/poison.png', color: '#FF85A7' }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriagePage');
  }

  startTriage(type: string, color: string) {
    this.app.getRootNav().push(QuestionPage, {
      type: type,
      color: color
    })
  }

}
