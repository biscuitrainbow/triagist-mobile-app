import { FirebaseUserProvider } from './../../providers/firebase-user/firebase-user';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as _ from "lodash";
import { PdfProvider } from '../../providers/pdf/pdf';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  private result;
  private user;
  private location;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public userProvider: FirebaseUserProvider,
    public pdf: PdfProvider,
    public geolocation: Geolocation
  ) {
    this.result = navParams.get('result');

    this.createPdf();
  }

  getCurrentAddress(): Promise<any> {
    let geocoderService = new google.maps.Geocoder();

    return new Promise((resolve, reject) => {
      this.geolocation.getCurrentPosition()
        .then(result => {
          let lat = result.coords.latitude
          let lng = result.coords.longitude
          let latlng = { lat: lat, lng: lng }

          geocoderService.geocode({ 'location': latlng }, (result, status) => {
            resolve(result);
          })
        })
        .catch(error => reject(error))
    });
  }

  createPdf() {
    Promise.all([
      this.userProvider.getUser().then(user => this.user = user.data()),
      this.getCurrentAddress().then(results => this.location = results[0].formatted_address)
    ]).then(() => {
      let output = this.pdf.create({
        name: `${this.user.name} ${this.user.lastName}`,
        location: this.location,
        datetime: '23 May 2016 14.30 PM.'
      })

      this.pdf.save(output)
        .then(result => this.showToast("Saved success"))
        .catch(error => this.showToast(JSON.stringify(error)))
    })
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
    })

    toast.present();
  }

}
