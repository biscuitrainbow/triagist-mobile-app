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
    pdfMake.fonts = {
      THSarabunNew: {
        normal: 'THSarabunNew.ttf',
        bold: 'THSarabunNew Bold.ttf',
        italics: 'THSarabunNew Italic.ttf',
        bolditalics: 'THSarabunNew BoldItalic.ttf'
      }
    }

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
            text: `${data.name}\n`,
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
            text: `\n\n${data.result.code}`,
            style: 'subheader'
          },
          {
            text: data.result.description,
            style: 'detail'
          },
        ],
        defaultStyle: {
          font: 'THSarabunNew'
        },
        styles: {
          header: {
            fontSize: 22,
            bold: true,
            alignment: 'right',
          },
          subheader: {
            fontSize: 17
          },
          detail: {
            fontSize: 14,
            color: '#A1A1A4'
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
