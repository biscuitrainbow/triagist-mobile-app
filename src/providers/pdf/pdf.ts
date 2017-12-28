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
    return new Promise((resolve, reject) => {
      var dd = {
        content: [
          {
            text: 'Triage Summary\n\n',
            style: 'header'
          },
          {
            text: `${data.name}\n\n`,
            style: 'subheader'
          },
          {
            text: data.location,
            style: 'detail'
          },
          {
            text: data.datetime,
            style: 'detail'
          },
          {
            text: `\n\n Result `,
            style: 'subheader'
          },
          {
            text: data.result.code,
            style: 'subheader'
          },
          {
            text: data.result.question,
            style: 'detail'
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            alignment: 'right',
          },
          subheader: {
            fontSize: 13
          },
          detail: {
            fontSize: 10,
            color: '#A1A1A4'
          },
          superMargin: {
            margin: [20, 0, 40, 0],
            fontSize: 15
          }
        }
      }

      pdfMake.createPdf(dd).download();

      pdfMake.createPdf(dd).getBlob(blob => {
        resolve(blob);
      })
    })
  }

  save(buffer) {
    const directory = this.file.externalApplicationStorageDirectory;
    const name = `${moment()}.pdf`;

    return this.file.writeFile(directory, name, buffer)
  }

}
