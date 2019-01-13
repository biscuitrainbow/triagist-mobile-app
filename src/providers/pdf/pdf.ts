import { Injectable } from "@angular/core";
import { File } from "@ionic-native/file";
import { FirebaseUserProvider } from "../firebase-user/firebase-user";
import { MapProvider } from "./../map/map";
import { style, THSarabunNew, defaultStyle } from "./constant";

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

  async create(data) {
    return new Promise(async (resolve, reject) => {
      let user = await this.user.getUser();

      let pdfContent = {
        content: [
          {
            text: `${data.code}`,
            style: "code"
          },
          {
            text: "ผลการคัดกรอง\n",
            style: "header"
          },
          {
            text: (user.isAnonymous) ? 'Anonymous' : `${user.displayName} \n`,
            style: "subheader"
          },
          {
            text: moment().format("MMMM Do YYYY, h:mm:ss a"),
            style: "detail"
          },
          {
            text: "\nลำดับการถามตอบ\n",
            style: "header"
          },
        ],
        defaultStyle: defaultStyle,
        styles: style
      };

      try {
        data.answers.forEach(item => {
          pdfContent.content.push(
            {
              text: item.question,
              style: "question"
            },
            {
              text: item.answer + "\n\n",
              style: "answer"
            }
          )
        });


        pdfMake.createPdf(pdfContent).download();
        // pdfMake.createPdf(pdfContent).getBlob(blob => {
        //   resolve(blob);
        // });
      } catch (e) {
        reject(e);
      }
    })
  }

  save(blob) {
    const directory = this.file.dataDirectory;
    const name = `${moment()}.pdf`;

    return this.file.writeFile(directory, name, blob)
  }
}
