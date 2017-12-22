import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, firebaseAuth: AngularFireAuth) {
    this.formLogin = formBuilder.group({
      email: ['natthaponsricort@gmail.com'],
      password: ['lovesrk01']
    })

    this.formLogin.valueChanges.subscribe(value => console.log(value))
  }

  login() {
    console.log("login");
  }

}
