import { TriagePage } from './../triage/triage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HospitalPage } from '../hospital/hospital';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  triagePage = TriagePage;
  hospitalPage = HospitalPage;
  profilePage = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
