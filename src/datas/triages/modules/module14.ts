import { level, questionType, choiceType, criteriaType } from '../meta';

const result = {
	red1: {
		code: '14 แดง 1',
		level: level.red,
		advise: {
			contents: [
				{
					title: 'มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
					descriptions: [ '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป' ],
				},
				{
					title: 'นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
					descriptions: [
						' พร้อมบอกญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆก่อน กระผม/ดิฉัน จะบอกคุณว่าต้องทำอะไร',
					],
				},
				{
					title: 'สอนวิธีปั๊มหัวใจ',
					descriptions: [
						'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
						'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
						'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเหนื่อยล้า สามารถเปลี่ยนคนได้)',
					],
				},
			],
			notes: [
				'1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
				'2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
				'3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	red2: {
		code: '14 แดง 2',
		level: level.red,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: 'ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: 'ให้ญาติผู้พบเห็นเหตุการณ์เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด ',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ', '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย' ],
		},
	},
	red3: {
		code: '14 แดง 3',
		level: level.red,
		advise: {
			contents: [
				{
					title: 'จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
					descriptions: [ 'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ', '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย' ],
		},
	},
	red6: {
		code: '14 แดง 6',
		level: level.red,
		advise: {
			contents: [
				{
					title: 'จัดพื้นที่ให้โล่ง ',
					descriptions: [ 'ไม่มีสิ่งกีดขวางขณะที่ผู้ป่วยชัก' ],
				},
				{
					title: 'ไม่งัดหรือใส่ของแข็งเข้าไปในปากผู้ป่วย',
					descriptions: [],
				},
				{
					title: 'จัดท่านอนตะแคงซ้าย ',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'3. จัดท่านอนตะแคงซ้าย อยู่ในสถานที่อากาศถ่ายเท',
			],
		},
	},
	red7: {
		code: '14 แดง 7',
		level: level.red,
		advise: {
			contents: [
				{
					title: 'พูดคุยด้วยท่าทีเป็นมิตร ',
					descriptions: [],
				},
				{
					title: 'สังเกตอาการผู้ป่วย ',
					descriptions: [ 'ระวังไม่ควรเข้าใกล้ผู้ป่วยมาก อยู่ห่างจากผู้ป่วยประมาณ 8 เมตร' ],
				},
				{
					title: 'ควรนั่งอยู่ในระดับที่มองเห็นผู้ป่วยได้ชัดเจน ',
					descriptions: [],
				},
				{
					title: 'หากผู้ป่วยมีแนวโน้มควบคุมตัวเองไม่ได้',
					descriptions: [ 'อาจต้องใช้วิธีผูกมัด' ],
				},
			],
			notes: [
				'1. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'2. หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',
			],
		},
	},
	red9: {
		code: '14 แดง 9',
		level: level.red,
		advise: {
			contents: [
				{
					title: 'อย่าทำให้ผู้ป่วยอาเจียน ',
					descriptions: [],
				},
				{
					title: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'2. หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',
			],
		},
	},
	yellow4: {
		code: '14 เหลือง 4',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	yellow8: {
		code: '14 เหลือง 8',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: 'จัดท่านอนตะแคงซ้าย ',
					descriptions: [ 'เพื่อเปิดทางเดินหายใจให้โล่ง อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'2. หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',
			],
		},
	},
	yellow9: {
		code: '14 เหลือง 9',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	green3: {
		code: '14 เขียว 3',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'พูดกับผู้ป่วยด้วยความนุ่มนวล ',
					descriptions: [ 'เกลี่ยกล่อมให้นอนพัก' ],
				},
				{
					title: 'พยายามให้ผู้ป่วยอยู่ในบริเวณบ้าน ',
					descriptions: [ 'พื้นที่โล่งอากาศถ่ายเท' ],
				},
				{
					title: 'ระวังไม่ให้มีสิ่งของที่สามารถทำอันตรายต่อญาติและผู้ป่วยอยู่ใกล้ตัว ',
					descriptions: [],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
			],
		},
	},
	green4: {
		code: '14 เขียว 4',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green5: {
		code: '14 เขียว 5',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green8: {
		code: '14 เขียว 8',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'ล้างตาด้วยน้ำสะอาด ',
					descriptions: [ 'ไม่แนะนำให้ใช้ยาหยอดตาหรือยาป้ายตา' ],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล  หากอาการยังไม่ดีขึ้นให้ญาตินำผู้ป่วยส่งโรงพยาบาลใกล้บ้าน',
			],
		},
	},
	white1: {
		code: '14 ขาว 1',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ผู้ป่วยนอนพัก',
					descriptions: [
						' หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
};

const questions = [
	{
		name: 'ผู้ป่วยรู้สึกตัวหรือไม่',
		type: questionType.single,
		from: 0,
		choices: [
			{
				type: choiceType.question,
				name: 'ไม่รู้สึกตัว',
				to: 1,
			},
			{
				type: choiceType.question,
				name: 'รู้สึกตัว',
				to: 2,
			},
			{
				type: choiceType.result,
				name: 'ผู้แจ้งตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้',
				result: result.yellow9,
			},
		],
	},
	{
		name: 'ตบไหล่ และปลุกเรียก ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
		type: questionType.single,
		from: 1,
		choices: [
			{
				type: choiceType.result,
				name: 'ยังคงไม่รู้สึกตัว',
				result: result.red1,
			},
			{
				type: choiceType.question,
				name: 'พอรู้สึกตัว',
				to: 2,
			},
		],
	},
	{
		name: 'ลักษณะอาการหายใจเป็นอย่างไร',
		type: questionType.single,
		from: 2,
		choices: [
			{
				type: choiceType.result,
				name: 'พูดได้แค่ประโยคสั้นๆ / พูดติดขัด',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ซี่โครงบาน จมูกบานไห ปลาร้ายุบ',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจมีเสียงดัง',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ตัวซีดและเหงือท่วมตัว',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ผู้ป่วยต้องลุกขึ้นนั่งหรือยืนเพื่อให้หายใจได้ดีขึ้น',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'หายใจเร็ว',
				to: 3,
			},
			{
				type: choiceType.result,
				name: 'หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย',
				result: result.red2,
			},

			{
				type: choiceType.question,
				name: 'พูดได้ / หายใจปกติ',
				to: 5,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีโรคหอบหืดหรือไม่',
		type: questionType.single,
		from: 3,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'ไม่มี',
				to: 4,
			},
		],
	},
	{
		name: 'ผู้ป่วยอายุเท่าไหร่',
		type: questionType.single,
		from: 4,
		choices: [
			{
				type: choiceType.result,
				name: 'มากกว่า 20 ปี',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'น้อยกว่า 20 ปี',
				result: result.yellow8,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่',
		type: questionType.checkbox,
		from: 5,
		to: 6,
		criteria: {
			type: criteriaType.result,
			result: result.red3,
			minimum: 2,
		},

		choices: [
			{
				name: 'เหงื่อท่วมตัว',
				checked: false,
			},
			{
				name: 'ซีดและผิวซีดเย็ด',
				checked: false,
			},
			{
				name: 'เป็นลมหรือเกือบเป็นลม',
				checked: false,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการชักหรือไม่',
		type: questionType.single,
		from: 6,
		choices: [
			{
				type: choiceType.result,
				name: 'ชัก',
				result: result.red6,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 7,
			},
		],
	},
	{
		name: 'เจ้าหน้าที่ร้องขอการเตรียมพร้อมเนื่องจากผู้ป่วยมีภาวะคุกคาม อันจะเป็นอัตรายต่อตนเองและผู้อื่นหรือไม่',
		type: questionType.single,
		from: 7,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.red7,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 8,
			},
		],
	},
	{
		name: 'ผู้ป่วยได้รับ/สารอะไรเข้าสู่ร่างกาย',
		type: questionType.single,
		from: 8,
		choices: [
			{
				type: choiceType.result,
				name: 'ยา',
				result: result.green4,
			},
			{
				type: choiceType.result,
				name: 'สารเคมีที่ใช้ในการเกษตร',
				result: result.red9,
			},
			{
				type: choiceType.question,
				name: 'สารกัดกร่อน / สารเคมีอื่น (ที่ไม่ใช่อาหารยา)',
				to: 9,
			},
			{
				type: choiceType.result,
				name: 'สารเสพติด',
				result: result.green3,
			},
			{
				type: choiceType.question,
				name: 'สารป้องกันตัว เช่น แก๊สน้ำตา สเปรย์พริกไทย',
				to: 11,
			},
		],
	},
	{
		name: 'ผู้ป่วยกลืน น้ำลาย น้ำ และอากหาร ลำบากหรือไม่่',
		type: questionType.single,
		from: 9,
		choices: [
			{
				type: choiceType.result,
				name: 'กลืนลำบาก',
				result: result.red9,
			},
			{
				type: choiceType.question,
				name: 'กลืนได้ปกติ',
				to: 10,
			},
		],
	},
	{
		name: 'มีอาการผิดปกติอื่นเช่น เจ็บคอ ปวดท้อง ปวดศรีษะ คัน วิงเวียน',
		type: questionType.single,
		from: 10,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.yellow4,
			},
			{
				type: choiceType.result,
				name: 'ไม่มี',
				result: result.green5,
			},
		],
	},
	{
		name: 'มีอาการผิดปกติหรือไม่ เช่น ปวดท้อง ปวดศรีษะ คัน วิงเวียน',
		type: questionType.single,
		from: 11,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.green8,
			},
			{
				type: choiceType.result,
				name: 'ไม่มี',
				result: result.white1,
			},
		],
	},
];

const module14 = {
	name: 'ได้รับสารพิษ',
	module: 14,
	description: 'ยาเกินขนาด',
	image: 'assets/imgs/poison.png',
	questions: questions,
};

export default module14;

export { result };
