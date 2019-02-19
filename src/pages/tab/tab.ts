import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, NavParams } from 'ionic-angular';
import { HospitalPage } from '../hospital/hospital';
import { LoginPage } from './../login/login';
import { TriagePage } from './../triage/triage';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  public triagePage = TriagePage;
  public hospitalPage = HospitalPage;

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
