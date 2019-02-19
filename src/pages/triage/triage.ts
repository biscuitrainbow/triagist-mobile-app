import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import modules from '../../datas/triages/triages';
import { QuestionPage } from '../question/question';
import { ReferencePage } from '../reference/reference';

@Component({
	selector: 'page-triage',
	templateUrl: 'triage.html',
})
export class TriagePage {
	simpleMode = true;
	searchQuery: string = '';
	filteredModules = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public app: App) {
		menuCtrl.enable(true);

		this.filteredModules = modules;
	}

	navigateTriageQuestion(module: object) {
		const copiedModule = { ...module };

		this.app.getRootNav().push(QuestionPage, {
			module: copiedModule,
		});
	}

	navigateReferencePage() {
		this.navCtrl.push(ReferencePage);
	}

	toggleSimpleMode() {
		this.simpleMode = !this.simpleMode;
	}

	search(ev: any) {
		const val = ev.target.value;

		if (val && val.trim() != '') {
			this.filteredModules = modules.filter((item) => {
				return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
			});
		} else {
			this.filteredModules = modules;
		}
	}
}
