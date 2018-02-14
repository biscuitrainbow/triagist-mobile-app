import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  notes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notes = navParams.get('notes');
  }

  ionViewDidLoad() {
  }

}
