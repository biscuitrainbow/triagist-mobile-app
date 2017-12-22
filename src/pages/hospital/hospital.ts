import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {
  @ViewChild('map') element;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

  }

}
