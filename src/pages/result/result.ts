import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
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
import { SocialSharing } from '@ionic-native/social-sharing';
import * as moment from 'moment';
import { Loading } from 'ionic-angular/components/loading/loading';

declare var google;

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  private question;
  private code;
  private description;
  private user;
  private location;
  private pdfMake;
  private loader: Loading;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public userProvider: FirebaseUserProvider,
    public pdf: PdfProvider,
    public geolocation: Geolocation,
    public socialSharing: SocialSharing,
    public loadingCtrl: LoadingController,

  ) {
    this.code = navParams.get('code');
    this.question = navParams.get('question');
    this.description = navParams.get('description');
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
    this.showLoading("Generating PDF file...")

    Promise.all([
      this.userProvider.getUser().then(user => this.user = user.data()),
      this.getCurrentAddress().then(results => this.location = results[0].formatted_address)
    ]).then(() => {
      this.pdf.create({
        name: `${this.user.name} ${this.user.lastName}`,
        location: this.location,
        datetime: moment().format('MMMM Do YYYY, h:mm:ss a'),
        result: {
          question: this.question,
          code: this.code,
          description: this.description
        }
      }).then(blob => {
        this.hideLoading();

        this.pdf.save(blob).then(result => {
          this.socialSharing.shareViaEmail(
            'Body',
            'Subject',
            ['natthaponsricort@gmail.com'],
            undefined,
            undefined,
            result.nativeURL
          )
        }
        ).catch(error => this.showToast(JSON.stringify(error)))
      })
    })
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
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
