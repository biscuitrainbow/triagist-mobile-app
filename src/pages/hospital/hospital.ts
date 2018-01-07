import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { Loading } from "ionic-angular/components/loading/loading";
import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
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

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps,
    public phone: CallNumber
  ) { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    //this.showLoading("Preparing map...");
    this.geolocation
      .getCurrentPosition()
      .then(result => {
        let lat = result.coords.latitude;
        let lng = result.coords.longitude;

        this.map = this.googleMaps.create(this.mapElement.nativeElement);
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
          //    this.hideLoading();

          let currentLocation = new google.maps.LatLng(lat, lng);
          let nearyByRequest = {
            location: currentLocation,
            radius: "5000",
            type: ["hospital"]
          };

          this.map.animateCamera({
            target: currentLocation,
            zoom: 13
          });

          this.map.setMyLocationEnabled(true);

          let webMap = new google.maps.Map(this.webMapElement.nativeElement);
          this.googlePlaceService = new google.maps.places.PlacesService(webMap);
          this.googleDistanceMatrix = new google.maps.DistanceMatrixService();

          this.googlePlaceService.nearbySearch(nearyByRequest, (result, status) => {
            result.map(hospital => {
              let hospitalLatLng = new google.maps.LatLng(
                hospital.geometry.location.lat(),
                hospital.geometry.location.lng()
              );

              let distanceRequest = {
                origins: [currentLocation],
                destinations: [hospitalLatLng],
                travelMode: "DRIVING"
              };

              this.map
                .addMarker({
                  title: hospital.name,
                  icon: "red",
                  animation: "BOUNCE",
                  position: {
                    lat: hospital.geometry.location.lat(),
                    lng: hospital.geometry.location.lng()
                  }
                })
                .then(marker => {
                  marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                    // alert('clicked');
                  });
                });

              this.googleDistanceMatrix.getDistanceMatrix(
                distanceRequest,
                response => {
                  hospital.distance = response.rows[0].elements[0].distance.text;
                  hospital.duration = response.rows[0].elements[0].duration.text;
                }
              );

              let placeDetailRequest = { placeId: hospital.place_id };

              this.googlePlaceService.getDetails(
                placeDetailRequest,
                (place, status) => {
                  if (status === 'OK') hospital.phoneNumber = place.international_phone_number;
                }
              );

            });
            this.hospitals = result;
          });
        }).catch(error => this.showToast(error.message));
      }).catch(error => this.showToast(error.message));
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
}
