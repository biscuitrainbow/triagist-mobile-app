import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public firebaseAuth: AngularFireAuth
  ) {
    this.formLogin = formBuilder.group({
      email: ['natthaponsricort@gmail.com'],
      password: ['lovesrk01']
    })
  }

  login() {
    let email = this.formLogin.controls.email.value;
    let password = this.formLogin.controls.password.value;

    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => console.log(user.uid))
      .catch(error => console.log(error.message))

  }

}
