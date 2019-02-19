import { NotePage } from './../note/note';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HospitalPage } from '../hospital/hospital';


@Component({
  selector: 'page-advise',
  templateUrl: 'advise.html',
})
export class AdvisePage {
  advise;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.advise = this.navParams.get('advise');
  }


  ionViewDidLoad() {
  }

  navigateNotePage() {
    this.navCtrl.push(NotePage, {
      notes: this.advise.notes
    })
  }

  navigateToMap() {
    this.navCtrl.push(HospitalPage);
  }

}
