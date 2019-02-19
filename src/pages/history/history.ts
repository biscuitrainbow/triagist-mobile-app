import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import BasePage from '../BasePage';
import { ResultPage } from './../result/result';

@Component({
	selector: 'page-history',
	templateUrl: 'history.html',
})
export class HistoryPage extends BasePage {
	private triages: Array<Object> = [];

	private lastVisible;
	private limit = 8;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public firestore: AngularFirestore,
		public firebaseAuth: AngularFireAuth,
		public loadingCtrl: LoadingController
	) {
		super(loadingCtrl);
	}

	ionViewDidLoad() {
		this.showLoading('Fetching data...');
		let uid = this.firebaseAuth.auth.currentUser.uid;

		this.firestore.collection('triages').ref.where('user', '==', uid).orderBy('timestamp', 'desc').limit(this.limit).get().then((val) => {
			this.lastVisible = val.docs[val.docs.length - 1];
			val.docs.map((doc) => {
				this.triages.push(doc.data());
			});

			this.hideLoading();
		});
	}

	view(triage) {
		this.navCtrl.push(ResultPage, {
			moduleName: triage.module,
			result: triage.result,
			histories: triage.histories,
			canSave: false,
		});
	}

	doInfinite(event) {
		let uid = this.firebaseAuth.auth.currentUser.uid;

		if (this.lastVisible !== undefined) {
			this.firestore
				.collection('triages')
				.ref.where('user', '==', uid)
				.orderBy('timestamp', 'desc')
				.startAfter(this.lastVisible)
				.limit(this.limit)
				.get()
				.then((val) => {
					this.lastVisible = val.docs[val.docs.length - 1];
					val.docs.map((doc) => {
						this.triages.push(doc.data());
						console.log(doc.data());
					});
					event.complete();
				})
				.catch((e) => {
					console.log(e);
				});
		} else {
			event.complete();
		}
	}
}
