import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  type: string;
  color: string;

  questions: any = [
    {
      question: "<b>ไม่รู้สึกตัว</b> หรือ <b>ไม่หายใจ</b> หรือ <b>ไม่มีชีพจร</b>",
      result: "2วิกฤต1"
    },
    {
      question: "มีอาการ<b>บวม</b> บริเวณใบหน้า ปาก และลิ้น รวมกับมีอาการ<b>หายใจเสียงดัง</b> หรือ <b>Stridor</b>",
      result: "2วิกฤต3"
    },
    {
      question: " <b>พูดได้สั้นๆ</b> หรือ <b>หายใจมีเสียง</b> หรือ <b>ซีด</b> และ <b>มีเหงื่อท่วม</b> หรือ <b>หายใจเร็ว</b> หรือ ใช้กล้ามเนื้อ <b>ช่วยหายใจ</b>",
      result: "2วิกฤต3"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.get('type');
  }

  showResult(result: string) {
    console.log(result)
  }

}
