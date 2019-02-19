import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import * as moment from 'moment';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { FirebaseUserProvider } from '../firebase-user/firebase-user';
import { defaultStyle, style, THSarabunNew } from './constant';

@Injectable()
export class PdfProvider {
	constructor(private file: File, private user: FirebaseUserProvider) {
		pdfMake.fonts = THSarabunNew;
		pdfMake.vfs = pdfFonts.pdfMake.vfs;
	}

	async create(data) {
		return new Promise(async (resolve, reject) => {
			let user = await this.user.getUser();
			let userDetail = await this.user.getUserDetail();

			moment.locale('th');

			const histories = data.histories.map((item) => {
				return [
					{
						text: item.question,
						style: 'question',
						alignment: 'left',
					},
					{
						text: item.answer,
						style: 'answer',
						alignment: 'left',
					},
				];
			});

			const content = [
				{
					columns: [
						[
							{
								text: `${data.code}`,
								style: 'code',
							},
							{
								text: `${data.moduleName}\n\n`,
								style: 'subheader',
							},
							{
								text: 'ลำดับการถามตอบ',
								style: 'header',
							},

							...histories,
						],
						[
							{
								text: user.isAnonymous ? 'Anonymous' : `${user.displayName.toUpperCase()}`,
								style: 'subheader',
								alignment: 'right',
							},
							{
								text: userDetail.exists ? `เบอร์โทรญาติ ${userDetail.data().number}` : '',
								style: 'detail',
								alignment: 'right',
							},
							{
								text: moment().add(543, 'y').format('Do MMMM YYYY, HH:mm:ss'),
								style: 'detail',
								alignment: 'right',
							},
						],
					],
				},
			];

			const footer = {
				columns: [ { text: 'แอปพลิเคชัน TRIAGIST', alignment: 'right', margin: [ 5, 0 ] } ],
			};

			const document = {
				content,
				footer,
				defaultStyle: defaultStyle,
				styles: style,
				pageMargins: [ 30, 20 ],
			};

			try {
				pdfMake.createPdf(document).download();
				pdfMake.createPdf(document).getBlob((blob) => {
					resolve(blob);
				});
			} catch (e) {
				reject(e);
			}
		});
	}

	save(blob) {
		const directory = this.file.dataDirectory;
		const name = `${moment()}.pdf`;

		return this.file.writeFile(directory, name, blob);
	}
}
