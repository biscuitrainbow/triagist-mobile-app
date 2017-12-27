import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import * as moment from 'moment';
import * as jsPDF from 'jspdf';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable()
export class PdfProvider {


  constructor(private file: File) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  create(data) {
    var dd = { content: 'your pdf data' };
    pdfMake.createPdf(dd).download();

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
