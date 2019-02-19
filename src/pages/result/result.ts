import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Loading } from 'ionic-angular/components/loading/loading';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import * as moment from 'moment';
import { MapProvider } from '../../providers/map/map';
import { PdfProvider } from '../../providers/pdf/pdf';
import { FirebaseUserProvider } from './../../providers/firebase-user/firebase-user';
import { AdvisePage } from './../advise/advise';

@Component({
	selector: 'page-result',
	templateUrl: 'result.html',
})
export class ResultPage {
	public moduleName;
	public result;
	public histories;
	public timestamp;
	public loader: Loading;
	public canSave = true;

	public pdfUrl = '';
	constructor(
		public fileOpener: FileOpener,
		public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public alertCtrl: AlertController,
		public userProvider: FirebaseUserProvider,
		public pdf: PdfProvider,
		public map: MapProvider,
		public socialSharing: SocialSharing,
		public loadingCtrl: LoadingController,
		public firestore: AngularFirestore,
		public firebaseAuth: AngularFireAuth
	) {
		this.moduleName = navParams.get('moduleName');
		this.result = navParams.get('result');
		this.histories = navParams.get('histories');
		this.canSave = navParams.get('canSave');
		this.timestamp = navParams.get('timestamp');
	}

	ion;

	submitResult() {
		this.showLoading('กำลังบันทึก...');

		let uid = this.firebaseAuth.auth.currentUser.uid;

		this.firestore
			.collection('triages')
			.add({ histories: this.histories, result: this.result, module: this.moduleName, user: uid, timestamp: this.timestamp })
			.then(() => {
				this.hideLoading();
				this.showToast('บันทึกแล้ว');
			})
			.catch(() => {
				this.hideLoading();
				this.showToast('บันทึกไม่สำเร็จ ลองอีกครั้ง');
			});
	}

	async openPdf() {
		if (this.pdfUrl == '') {
			this.showLoading('Generating PDF file...');
			await this.createPdf();
			this.hideLoading();
		}

		this.fileOpener
			.open(this.pdfUrl, 'application/pdf')
			.then(() => console.log('File is opened'))
			.catch((e) => console.log('Error openening file', e));
	}

	async share() {
		if (this.pdfUrl == '') {
			this.showLoading('Generating PDF file...');
			await this.createPdf();
			this.hideLoading();
		}

		this.socialSharing
			.share(
				'Body',
				'Subject',
				// ["natthaponsricort@gmail.com"],
				// undefined,
				// undefined,
				this.pdfUrl
			)
			.catch((e) => alert(JSON.stringify(e)));
	}

	async createPdf() {
		try {
			let data = { moduleName: this.moduleName, code: this.result.code, histories: this.histories, timestamp: this.timestamp };
			let blob = await this.pdf.create(data);
			let saveResult = await this.pdf.save(blob);
			return (this.pdfUrl = saveResult.nativeURL);
		} catch (e) {
			this.showToast(e);
			// this.hideLoading();
		}
	}

	showToast(message: string) {
		this.toastCtrl
			.create({
				message: message,
				duration: 3000,
			})
			.present();
	}

	showLoading(message: string) {
		this.loader = this.loadingCtrl.create({
			content: message,
		});

		this.loader.present();
	}

	hideLoading() {
		this.loader.dismiss();
	}

	navigateAdvisePage() {
		this.navCtrl.push(AdvisePage, {
			advise: this.result.advise,
		});
	}
}
