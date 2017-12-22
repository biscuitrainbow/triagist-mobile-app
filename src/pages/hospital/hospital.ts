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
  view: string = 'list'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.element.nativeElement, mapOptions)
    this.googlePlaceService = new google.maps.places.PlacesService(this.map);

    let pyrmont = new google.maps.LatLng(13.57517, 99.9433905);
    let request = {
      location: pyrmont,
      radius: '5000',
      type: ['hospital']
    };

    this.googlePlaceService.nearbySearch(request, (result, status) => console.log(result));


  }

}
