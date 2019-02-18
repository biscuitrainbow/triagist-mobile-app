import { choiceType, questionType } from '../meta';

const questions = [
	{
		name: 'พิจารณาไม่ใช้เนื่องจากซ้ำซ้อนกับกลุ่มอาการที่ 17',
		type: questionType.button,
		from: 0,
		choices: [
			{
				type: choiceType.module,
				name: 'ใช้กลุ่มอาการที่ 17',
				module: 17,
			},
		],
	},
];

const module10 = {
	name: 'ภาวะฉุกเฉินเหตุสิ่งแวดล้อม',
	module: 10,
	description: 'ภาวะฉุกเฉินเหตุสิ่งแวดล้อม',
	image: 'assets/imgs/erupting-volcano.png',
	questions: questions,
};

export default module10;
