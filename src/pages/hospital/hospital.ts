import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
declare var google;

@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {
  @ViewChild('map') mapElement;
  @ViewChild('web_map') webMapElement;
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
    public googleMaps: GoogleMaps,
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

        this.map = this.googleMaps.create(this.mapElement.nativeElement)
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

          let webMap = new google.maps.Map(this.webMapElement.nativeElement);
          this.googlePlaceService = new google.maps.places.PlacesService(webMap);
          this.googleDistanceMatrix = new google.maps.DistanceMatrixService();

          let currentLocation = new google.maps.LatLng(lat, lng);
          let nearyByRequest = { location: currentLocation, radius: '5000', type: ['hospital'] };

          this.map.animateCamera({
            'target': currentLocation,
            'zoom': 13,
          }, function () {
            console.log("The animation is done");
          });

          this.googlePlaceService.nearbySearch(nearyByRequest, (result, status) => {
            result.map((hospital) => {

              let hospitalLatLng = new google.maps.LatLng(hospital.geometry.location.lat(), hospital.geometry.location.lng());
              let distanceRequest = { origins: [currentLocation], destinations: [hospitalLatLng], travelMode: 'DRIVING', }

              this.map.setMyLocationEnabled(true);
              this.map.addMarker({
                title: hospital.name,
                icon: 'red',
                animation: 'BOUNCE',
                position: {
                  lat: hospital.geometry.location.lat(),
                  lng: hospital.geometry.location.lng()
                }
              }).then(marker => {
                marker.on(GoogleMapsEvent.MARKER_CLICK)
                  .subscribe(() => {
                    // alert('clicked');
                  });
              });


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
