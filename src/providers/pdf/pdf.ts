import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import * as moment from 'moment';
import * as jsPDF from 'jspdf';

@Injectable()
export class PdfProvider {

  private doc: jsPDF;

  constructor(private file: File) {
    this.doc = new jsPDF("p", "mm", "a4");
  }

  create(data) {
    this.doc.setFontType('bold')
    this.doc.setFontSize(12);
    this.doc.text(data.name, 15, 20)

    this.doc.setFontType('normal')
    this.doc.setFontSize(10);
    this.doc.setTextColor(100)

    this.doc.text(data.location, 15, 30)
    this.doc.text(data.datetime, 15, 35)

    return this.doc.output()
  }

  save(output) {
    let buffer = new ArrayBuffer(output.length);
    let array = new Uint8Array(buffer);

    for (let i = 0; i < output.length; i++) {
      array[i] = output.charCodeAt(i);
    }

    const directory = this.file.externalApplicationStorageDirectory;
    const name = `${moment()}.pdf`;

    return this.file.writeFile(directory, name, buffer)
  }

}
