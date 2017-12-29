import { LoginPage } from './../login/login';
import { TriagePage } from './../triage/triage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HospitalPage } from '../hospital/hospital';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  triagePage = TriagePage;
  hospitalPage = HospitalPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    firebaseAuth: AngularFireAuth) {
    firebaseAuth.authState.subscribe(user => {
      if (!user) {
        navCtrl.push(LoginPage)
      }

      console.log(user)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
