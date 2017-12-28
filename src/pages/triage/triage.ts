import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { App } from 'ionic-angular';


@Component({
  selector: 'page-triage',
  templateUrl: 'triage.html',
})
export class TriagePage {

  questions: any = [
    {
      name: 'แพ้ยา',
      description: 'แพ้อาหาร , สัตว์ต่อย , ภูมิแพ้',
      image: 'assets/imgs/vitamins.png',
      color: '#B1DC76',
      questions: [
        {
          question: "<b>ไม่รู้สึกตัว</b> หรือ <b>ไม่หายใจ</b> หรือ <b>ไม่มีชีพจร</b>",
          code: "2วิกฤต1"
        },
        {
          question: "มีอาการ<b>บวม</b> บริเวณใบหน้า ปาก และลิ้น รวมกับมีอาการ<b>หายใจเสียงดัง</b> หรือ <b>Stridor</b>",
          code: "2วิกฤต2"
        },
        {
          question: " <b>พูดได้สั้นๆ</b> หรือ <b>หายใจมีเสียง</b> หรือ <b>ซีด</b> และ <b>มีเหงื่อท่วม</b> หรือ <b>หายใจเร็ว</b> หรือ ใช้กล้ามเนื้อ <b>ช่วยหายใจ</b>",
          code: "2วิกฤต3"
        }
      ]
    },
    {
      name: 'ได้รับสารพิษ',
      description: 'ยาเกินขนาด',
      image: 'assets/imgs/poison.png',
      color: '#FF85A7',
      questions: [
        {
          question: "<b>ไม่รู้สึกตัว</b> หรือ <b>ไม่หายใจ</b> หรือ <b>ไม่มีชีพจร</b>",
          code: "2วิกฤต1"
        },
        {
          question: "มีอาการ<b>บวม</b> บริเวณใบหน้า ปาก และลิ้น รวมกับมีอาการ<b>หายใจเสียงดัง</b> หรือ <b>Stridor</b>",
          code: "2วิกฤต2"
        },
        {
          question: " <b>พูดได้สั้นๆ</b> หรือ <b>หายใจมีเสียง</b> หรือ <b>ซีด</b> และ <b>มีเหงื่อท่วม</b> หรือ <b>หายใจเร็ว</b> หรือ ใช้กล้ามเนื้อ <b>ช่วยหายใจ</b>",
          code: "2วิกฤต3"
        }
      ]
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriagePage');
  }

  startTriage(question: object) {
    this.app.getRootNav().push(QuestionPage, {
      question: question
    })
  }

}
