import { RegisterPage } from './../register/register';
import { TabPage } from './../tab/tab';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Loading } from 'ionic-angular/components/loading/loading';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin: FormGroup;
  loader: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public firebaseAuth: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private storage: Storage
  ) {
    this.formLogin = formBuilder.group({
      email: ['natthaponsricort@gmail.com'],
      password: ['lovesrk01']
    })
  }

  login() {
    let email = this.formLogin.controls.email.value;
    let password = this.formLogin.controls.password.value;

    this.showLoading("Logging in...");
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.storage.set('uid', user.uid);
        this.hideLoading();
        this.showTabPage();
      })
      .catch(error => {
        this.showToast(error.message);
        this.hideLoading();
      })

  }

  showTabPage() {
    this.navCtrl.push(TabPage);
  }

  showRegister() {
    this.navCtrl.push(RegisterPage)
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
    })

    toast.present();
  }

  showLoading(message: string) {
    this.loader = this.loadingCtrl.create({
      content: message
    });

    this.loader.present();
  }

  hideLoading() {
    this.loader.dismiss();
  }

}
