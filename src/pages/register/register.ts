import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Loading } from 'ionic-angular/components/loading/loading';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  formRegister: FormGroup;
  loader: Loading;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
    this.formRegister = formBuilder.group({
      email: [''],
      password: [''],
      name: [''],
      lastName: ['']
    })
  }


  register() {
    let email = this.formRegister.controls.email.value;
    let password = this.formRegister.controls.password.value;
    let name = this.formRegister.controls.name.value;
    let lastName = this.formRegister.controls.lastName.value;

    this.showLoading("Registering...")
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.hideLoading()

        this.showLoading("Storing Information...")
        this.firestore.collection('users').doc(user.uid).set({ name, lastName, })
          .then(() => {
            this.hideLoading();
            this.showToast("Register successfully")
          })
          .catch(error => {
            this.hideLoading()
            this.showToast(error.message)
          })
      })
      .catch(error => {
        this.hideLoading();
        this.showToast(error.message)
      })
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
