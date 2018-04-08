import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { Loading } from "ionic-angular/components/loading/loading";
import { Component, ViewChild, NgZone } from "@angular/core";
import { NavController, NavParams, ActionSheetController, Platform, ModalController } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { Geolocation } from "@ionic-native/geolocation";
import { ToastController } from "ionic-angular/components/toast/toast-controller";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { HospitalSearchPage } from "../hospital-search/hospital-search";

declare var google;

@Component({
  selector: "page-hospital",
  templateUrl: "hospital.html"
})
export class HospitalPage {
  @ViewChild("map") private mapElement;
  @ViewChild("web_map") private webMapElement;

  private map: any;

  private view: string = "map";
  public hospitals: any;

  private loader: Loading;

  private googlePlaceService;
  private googleDistanceMatrix;
  private googleAutoComplete;

  private autoComplete = { input: '' };
  private autoCompleteItems = [];


  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps,
    public phone: CallNumber,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public modalCtrl: ModalController,
    public zone: NgZone
  ) { }

  ionViewDidLoad() {

    let webMap = new google.maps.Map(this.webMapElement.nativeElement);
    this.googlePlaceService = new google.maps.places.PlacesService(webMap);
    this.googleDistanceMatrix = new google.maps.DistanceMatrixService();
    this.googleAutoComplete = new google.maps.places.AutocompleteService();

    this.loadMap();
  }

  async loadMap() {
    this.showLoading("Preparing map...");
    let geoResult = await this.geolocation.getCurrentPosition()

    let lat = geoResult.coords.latitude;
    let lng = geoResult.coords.longitude;

    this.map = this.googleMaps.create(this.mapElement.nativeElement);
    this.map.setMyLocationEnabled(true);

    await this.map.one(GoogleMapsEvent.MAP_READY);

    this.hideLoading();

    let currentLocation = new google.maps.LatLng(lat, lng);
    let nearyByRequest = {
      location: currentLocation,
      radius: "5000",
      type: ["hospital"]
    };

    this.map.moveCamera({
      target: currentLocation,
      zoom: 13
    });

    this.googlePlaceService.nearbySearch(nearyByRequest, (result, status) => {

      result.map(async hospital => {
        let hospitalLatLng = new google.maps.LatLng(
          hospital.geometry.location.lat(),
          hospital.geometry.location.lng()
        );

        /* Request distance and duration */
        let distanceRequest = {
          origins: [currentLocation],
          destinations: [hospitalLatLng],
          travelMode: "DRIVING"
        };
        this.googleDistanceMatrix.getDistanceMatrix(distanceRequest, response => {
          hospital.distance = response.rows[0].elements[0].distance.text;
          hospital.duration = response.rows[0].elements[0].duration.text;
        }
        );

        /* Request place detail for phone number */
        let placeDetailRequest = { placeId: hospital.place_id };
        this.googlePlaceService.getDetails(placeDetailRequest, (place, status) => {
          if (status === 'OK') hospital.phoneNumber = (place.international_phone_number !== ' ' || place.international_phone_number !== null) ? place.international_phone_number : 1669;
          else hospital.phoneNumber = 1669;
        });

        /* Add each hospital to marker and show actionsheet when cliked*/
        let marker = await this.map.addMarker({
          title: hospital.name,
          icon: "red",
          label: "H",
          animation: "BOUNCE",
          position: {
            lat: hospital.geometry.location.lat(),
            lng: hospital.geometry.location.lng()
          }
        })
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showActionSheet(hospital.phoneNumber);
        });

        this.hospitals = result;

      });
    });
  }

  callNumber(number: string) {
    this.phone
      .callNumber(number, true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000
      })
      .present();
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

  search() {
    this.modalCtrl.create(HospitalSearchPage).present();
  }

  showActionSheet(data) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Action',
      buttons: [
        {
          text: 'Emergency call',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'call' : null,
          handler: () => {
            this.callNumber(data);
          }
        },
      ]
    });
    actionSheet.present();
  }

  updateSearchResults() {
    if (this.autoComplete.input == '') {
      this.autoCompleteItems = [];
      return;
    }

    this.googleAutoComplete.getPlacePredictions({ input: this.autoComplete.input }, (predictions, status) => {
      this.autoCompleteItems = [];

      this.zone.run(() => {
        predictions.forEach(async (prediction) => {
          this.autoCompleteItems.push(prediction);
          this.hospitals = [];

          /* Request place detail for phone number */
          let placeDetailRequest = { placeId: prediction.place_id };
          this.googlePlaceService.getDetails(placeDetailRequest, (place, status) => {
            prediction.phoneNumber = place.international_phone_number;

            if (status === 'OK') {
              prediction.phoneNumber = (place.international_phone_number !== null || place.international_phone_number !== ' ') ? place.international_phone_number : 1669;
              prediction.phoneNumber = 1669;
            } else {
              prediction.phoneNumber = 1669;
            }
          });

          /* Add each hospital to marker and show actionsheet when cliked*/
          let marker = await this.map.addMarker({
            title: prediction.name,
            icon: "red",
            label: "H",
            animation: "BOUNCE",
            position: {
              lat: prediction.geometry.location.lat(),
              lng: prediction.geometry.location.lng()
            }
          })

          this.map.
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
              this.showActionSheet(prediction.phoneNumber);
            });


          this.hospitals = prediction;

        });
      });
    });
  }

}
