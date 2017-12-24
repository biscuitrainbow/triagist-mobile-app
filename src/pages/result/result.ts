import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  result;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = navParams.get('result');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
