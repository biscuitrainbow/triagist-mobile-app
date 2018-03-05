import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

declare var google;

@Component({
  selector: 'page-hospital-search',
  templateUrl: 'hospital-search.html',
})


export class HospitalSearchPage {

  @ViewChild("map") private map;

  private googleAutoComplete;
  private googlePlaceService;

  private autoComplete = { input: '' };
  private autoCompleteItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone, public phone: CallNumber, ) {
  }

  ionViewDidLoad() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });

    this.googleAutoComplete = new google.maps.places.AutocompleteService();
    this.googlePlaceService = new google.maps.places.PlacesService(this.map);

  }

  updateSearchResults() {
    if (this.autoComplete.input == '') {
      this.autoCompleteItems = [];
      return;
    }
    this.googleAutoComplete.getPlacePredictions({ input: this.autoComplete.input },
      (predictions, status) => {
        this.autoCompleteItems = [];

        console.log(predictions);

        this.zone.run(() => {
          predictions.forEach((prediction) => {

            let placeDetailRequest = { placeId: prediction.place_id };

            this.googlePlaceService.getDetails(
              placeDetailRequest,
              (place, status) => {
                if (status === 'OK') {
                  prediction.phoneNumber = place.international_phone_number;
                }

                this.autoCompleteItems.push(prediction);
              }
            );
          });
        });
      });
  }

  callNumber(number: string) {
    this.phone
      .callNumber(number, true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
  }

}
