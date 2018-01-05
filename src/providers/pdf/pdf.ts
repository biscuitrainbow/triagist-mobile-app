import { Injectable } from "@angular/core";
import { File } from "@ionic-native/file";
import { FirebaseUserProvider } from "../firebase-user/firebase-user";
import { MapProvider } from "./../map/map";
import { style, THSarabunNew } from "./constant";

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import * as moment from "moment";
import * as jsPDF from "jspdf";

@Injectable()
export class PdfProvider {
  constructor(
    private file: File,
    private map: MapProvider,
    private user: FirebaseUserProvider
  ) {
    pdfMake.fonts = THSarabunNew;
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        let location = await this.map.getCurrentAddress();
        let user = await this.user.getUser();

        Promise.all([user, location]).then(() => {
          let dd = {
            content: [
              {
                text: "Triage Summary\n\n",
                style: "header"
              },
              {
                text: `${user.data().name} ${user.data().lastName} \n`,
                style: "subheader"
              },
              {
                text: location[0].formatted_address,
                style: "detail"
              },
              {
                text: moment().format("MMMM Do YYYY, h:mm:ss a"),
                style: "detail"
              },
              {
                text: `\n\n${data.code}`,
                style: "subheader"
              },
              {
                text: data.description,
                style: "detail"
              }
            ],
            defaultStyle: {
              font: "THSarabunNew"
            },
            styles: style
          };

          pdfMake.createPdf(dd).download();
          pdfMake.createPdf(dd).getBlob(blob => {
            resolve(blob);
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  save(blob) {
    const directory = this.file.externalApplicationStorageDirectory;
    const name = `${moment()}.pdf`;

    return this.file.writeFile(directory, name, blob);
  }
}
