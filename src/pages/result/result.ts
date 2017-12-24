import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  result;

  constructor(public navCtrl: NavController, public navParams: NavParams, public file: File, public toastCtrl: ToastController) {
    this.result = navParams.get('result');

    let doc = new jsPDF("p", "mm", "a4");
    doc.text('Hello world!', 10, 10)

    let output = doc.output();
    let buffer = new ArrayBuffer(output.length);
    let array = new Uint8Array(buffer);

    for (let i = 0; i < output.length; i++) {
      array[i] = output.charCodeAt(i);
    }

    const directory = this.file.externalApplicationStorageDirectory;
    const name = "triage.pdf"

    this.file.writeFile(directory, name, buffer)
      .then(result => this.showToast(JSON.stringify(result)))
      .catch(error => this.showToast(JSON.stringify(error)))

  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
    })

    toast.present();
  }

}
