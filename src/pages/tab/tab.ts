import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../login/login';
import { TriagePage } from './../triage/triage';
import { HospitalPage } from '../hospital/hospital';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  private triagePage = TriagePage;
  private hospitalPage = HospitalPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseAuth: AngularFireAuth
  ) {

    if (!firebaseAuth.auth.currentUser) {
      navCtrl.setRoot(LoginPage)
    }
  }
}
