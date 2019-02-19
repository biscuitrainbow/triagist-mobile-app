import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ResultPage } from './../result/result';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { questionType, choiceType, criteriaType } from '../../datas/triages/meta';
import { App } from 'ionic-angular/components/app/app';
import modules from '../../datas/triages/triages';

@Component({
	selector: 'page-question',
	templateUrl: 'question.html',
})
export class QuestionPage {
	@ViewChild(Slides) slides: Slides;

	module: any;

	histories = [];
	questionStacks = [];

	constructor(
		public navCtrl: NavController,
		public toastCtrl: ToastController,
		public navParams: NavParams,
		public firestore: AngularFirestore,
		public firebaseAuth: AngularFireAuth,
		public platform: Platform,
		public menuCtrl: MenuController,
		public app: App
	) {
		this.module = navParams.get('module');
	}

	ionViewDidLoad() {
		this.menuCtrl.enable(false);

		let toast = this.toastCtrl.create({
			message: 'กวาดนิ้วไปด้านขวาเพื่อนย้อนกลับ',
			duration: 2000,
		});

		toast.present();
	}

	ionViewDidLeave() {
		this.menuCtrl.enable(true);
	}

	onChoiceClick(choice, question) {
		switch (question.type) {
			case questionType.single:
				this.buttonChoiceNavgation(choice, question);
				break;

			case questionType.checkbox:
				this.checkboxChoiceNavigation(question);
				break;

			default:
				console.log('default');

				break;
		}
	}

	buttonChoiceNavgation(choice, question) {
		let history = { question: question.name, answer: choice.name, result: null };

		switch (choice.type) {
			case choiceType.question: {
				this.toQuestion(choice.to);
				this.pushQuestion(question.from);
				break;
			}

			case choiceType.result: {
				this.navigateResult(choice.result);
				history.result = { code: choice.result.code, level: choice.result.level };
				break;
			}

			case choiceType.module: {
				const module = modules.find((question) => choice.module == question.module);
				this.navigateModule(module);

				break;
			}
		}

		this.histories.push(history);
	}

	checkboxChoiceNavigation(question) {
		const checkeds = question.choices.filter((item) => item.checked == true);
		let textChoices = '';

		if (checkeds.length !== 0) {
			textChoices = checkeds.map((item) => item.name).join(' ,');
		} else {
			textChoices = 'ไม่ได้เลือกข้อใดเลย';
		}

		let history = { question: question.name, answer: textChoices, result: null };

		const { criteria } = question;
		const matchedCriteria = checkeds.length >= question.criteria.minimum;

		if (matchedCriteria) {
			switch (criteria.type) {
				case criteriaType.question:
					this.toQuestion(criteria.to);
					break;

				case criteriaType.result:
					this.navigateResult(criteria.result);
					history.result = { code: criteria.result.code, level: criteria.result.level };
					break;

				default:
					break;
			}
		} else {
			this.toQuestion(question.to);
		}

		this.pushQuestion(question.from);
		this.histories.push(history);
	}

	navigateResult(result) {
		this.navCtrl.push(ResultPage, {
			moduleName: this.module.name,
			result: result,
			histories: this.histories,
			canSave: true,
		});
	}

	navigateModule(module) {
		this.app.getRootNav().push(QuestionPage, {
			module: module,
		});
	}

	toQuestion(to) {
		//console.log(this.questionStacks);

		this.slides.slideTo(to);
	}

	onSwipe(event, question) {
		if (event.direction === 4) {
			this.back();
		}
	}

	pushQuestion(index) {
		const last = this.questionStacks[this.questionStacks.length - 1];

		if (index !== last) {
			this.questionStacks.push(index);
		}

		console.log(this.questionStacks);
	}

	back() {
		const to = this.questionStacks[this.questionStacks.length - 1];
		console.log(`to : ${to}`);

		this.toQuestion(to);
		this.questionStacks.pop();
	}

	close() {
		this.navCtrl.pop();
	}
}
