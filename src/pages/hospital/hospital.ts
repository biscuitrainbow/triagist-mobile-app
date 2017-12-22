import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

declare var google;


@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {
  @ViewChild('map') element;
  map: any;
  view: string = 'map'
  hospitals: any;

  googlePlaceService;
  googleDistanceMatrix;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public phone: CallNumber) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition()
      .then(result => {
        let lat = result.coords.latitude
        let lng = result.coords.longitude
        let latLng = new google.maps.LatLng(lat, lng);

        let mapOptions = { center: latLng, zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP }

        this.map = new google.maps.Map(this.element.nativeElement, mapOptions)
        this.googlePlaceService = new google.maps.places.PlacesService(this.map);
        this.googleDistanceMatrix = new google.maps.DistanceMatrixService();

        let currentLocation = new google.maps.LatLng(lat, lng);
        let nearyByRequest = { location: currentLocation, radius: '5000', type: ['hospital'] };

        this.googlePlaceService.nearbySearch(nearyByRequest, (result, status) => {
          result.map((hospital) => {
            let hospitalLatLng = new google.maps.LatLng(hospital.geometry.location.lat(), hospital.geometry.location.lng());
            let distanceRequest = { origins: [currentLocation], destinations: [hospitalLatLng], travelMode: 'DRIVING', }

            this.googleDistanceMatrix.getDistanceMatrix(distanceRequest, (response) => {
              hospital.distance = response.rows[0].elements[0].distance.text;
              hospital.duration = response.rows[0].elements[0].duration.text;
            });

            let placeDetailRequest = { placeId: hospital.place_id };

            this.googlePlaceService.getDetails(placeDetailRequest, (place, status) => {
              hospital.phoneNumber = place.international_phone_number;
            })
          })


          this.hospitals = result;
        });
      })
      .catch(error => this.showToast(error.message))
  }

  callNumber(number: string) {
    this.phone.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    })

    toast.present();
  }

}
