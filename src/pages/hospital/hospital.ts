import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google;


@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {
  @ViewChild('map') element;
  map: any;
  googlePlaceService;
  view: string = 'map'

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(result => {
      let lat = result.coords.latitude
      let lng = result.coords.longitude

      let latLng = new google.maps.LatLng(lat, lng);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.element.nativeElement, mapOptions)

      this.googlePlaceService = new google.maps.places.PlacesService(this.map);

      let pyrmont = new google.maps.LatLng(lat, lng);
      let request = {
        location: pyrmont,
        radius: '5000',
        type: ['hospital']
      };

      this.googlePlaceService.nearbySearch(request, (result, status) => console.log(result));
    })
  }

}
