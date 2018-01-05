import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';

declare var google;

@Injectable()
export class MapProvider {
  private geocoderService;

  constructor(public geolocation: Geolocation) {
    this.geocoderService = new google.maps.Geocoder();
  }

  getCurrentAddress(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.geolocation.getCurrentPosition()
        .then(result => {
          let latlng = { lat: result.coords.latitude, lng: result.coords.longitude }

          this.geocoderService.geocode({ 'location': latlng }, (result, status) => {
            if (!status) {
              reject(status)
            }

            resolve(result);
          })
        })
        .catch(error => reject(error))
    });
  }

}
