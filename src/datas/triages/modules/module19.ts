import { level, questionType, choiceType, criteriaType } from '../meta';
import { result as module8Result } from './module8';

const result = {
	red1: {
		code: '19 แดง 1',
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
			],
		},
	},
	red2: {
		code: '19 แดง 2',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1.แนะนำให้ผู้ป่วยนอนราบศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: 'ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด ',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'3.หากผู้ป่วยอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย',
			],
		},
	},
	red3: {
		code: '19 แดง 3',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1.จัดท่าผู้ป่วยนอนราบศีรษะต่ำ',
					descriptions: [ 'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'3.หากผู้ป่วยอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย',
			],
		},
	},
	red4: {
		code: '19 แดง 4',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'3.หากผู้ป่วยอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย',
			],
		},
	},
	red6: {
		code: '19 แดง 6',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1.จัดพื้นที่ให้โล่ง',
					descriptions: [ 'ไม่มีสิ่งกีดขวางขณะที่ผู้ป่วยชัก' ],
				},
				{
					title: '2.ไม่งัดหรือใส่ของแข็งเข้าไปในปากผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3.จัดท่านอนตะแคงซ้าย',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '4.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'3.หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',
			],
		},
	},
	red7: {
		code: '19 แดง 7',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1.จัดท่าให้ผู้ป่วยนอนในท่าสบาย',
					descriptions: [],
				},
				{
					title: '2.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'3.หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',
			],
		},
	},
	red8: {
		code: '19 แดง 8',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย',
					descriptions: [ ' เพื่อเปิดทางเดินหายใจให้โล่ง อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'3.หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',
			],
		},
	},
	red9: {
		code: '19 แดง 9',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1.จัดท่าให้ผู้ป่วยนอนในท่าสบาย ',
					descriptions: [],
				},
				{
					title: '2.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
				'3.หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',
			],
		},
	},
	yellow1: {
		code: '19 เหลือง 1',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย',
					descriptions: [],
				},
				{
					title: '2.คลายเสื้อผ้าให้หลวม',
					descriptions: [ '  อยู่ในที่อากาศถ่ายเท' ],
				},
				{
					title: '3.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	yellow2: {
		code: '19 เหลือง 2',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
				{
					title: '3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
			],
			notes: [
				'1.ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	yellow3: {
		code: '19 เหลือง 3',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย ',
					descriptions: [],
				},
				{
					title: '2.คลายเสื้อผ้าให้หลวม',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '3.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	yellow4: {
		code: '19 เหลือง 4',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย ',
					descriptions: [],
				},
				{
					title: '2.คลายเสื้อผ้าให้หลวม',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '3.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	yellow5: {
		code: '19 เหลือง 5',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย ',
					descriptions: [],
				},
				{
					title: '2.คลายเสื้อผ้าให้หลวม',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '3.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	yellow7: {
		code: '19 เหลือง 7',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย ',
					descriptions: [],
				},
				{
					title: '2.คลายเสื้อผ้าให้หลวม',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '3.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	yellow6: {
		code: '19 เหลือง 6',
		level: level.yellow,
		advise: {
			contents: [],
			notes: [],
		},
	},
	yellow8: {
		code: '19 เหลือง 8',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย ',
					descriptions: [],
				},
				{
					title: '2.คลายเสื้อผ้าให้หลวม',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '3.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	yellow9: {
		code: '19 เหลือง 9',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1.จัดท่านอนตะแคงซ้าย ',
					descriptions: [],
				},
				{
					title: '2.คลายเสื้อผ้าให้หลวม',
					descriptions: [ 'อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '3.ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1.ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2.หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
			],
		},
	},
	green1: {
		code: '19 เขียว 1',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'เกลี่ยกล่อมให้กลับบ้านนอนพัก หรือนอนในสถานที่ปลอดภัยพื้นที่โล่งอากาศถ่ายเท',
					descriptions: [],
				},
			],
			notes: [
				'ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล  หากอาการยังไม่ดีขึ้นให้ญาตินำผู้ป่วยส่งโรงพยาบาลใกล้บ้าน',
			],
		},
	},
	green2: {
		code: '19 เขียว 2',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'เกลี่ยกล่อมให้กลับบ้านนอนพัก หรือนอนในสถานที่ปลอดภัยพื้นที่โล่งอากาศถ่ายเท',
					descriptions: [],
				},
			],
			notes: [
				'ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล  หากอาการยังไม่ดีขึ้นให้ญาตินำผู้ป่วยส่งโรงพยาบาลใกล้บ้าน',
			],
		},
	},
	white1: {
		code: '19 ขาว 1',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ผู้ป่วยนอนพัก',
					descriptions: [
						'หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	white2: {
		code: '19 ขาว 2',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ผู้ป่วยนอนพัก',
					descriptions: [
						'หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	white6: {
		code: '19 ขาว 6',
		level: level.white,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green3: {
		code: '19 เขียว 3',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green5: {
		code: '19 เขียว 5',
		level: level.green,
		advise: {
			contents: [],
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
			{
				type: choiceType.result,
				name: 'ผู้แจ้งไม่สามารถเข้าไปปลุก/เรียกผู้ป่วยได้',
				result: result.yellow1,
			},
		],
	},
	{
		name: 'ผู้ป่วยพูดหรือมีเสียงร้องออกมาหรือไม่',
		type: questionType.single,
		from: 2,
		choices: [
			{
				type: choiceType.question,
				name: 'ไม่มีเสียงออกมา',
				to: 7,
			},
			{
				type: choiceType.question,
				name: 'มีเสียงออกมา',
				to: 3,
			},
		],
	},
	{
		name: 'ลักษณะอาการหายใจเป็นอย่างไร',
		type: questionType.single,
		from: 3,
		choices: [
			{
				type: choiceType.result,
				name: 'พูดได้แค่ประโยคสั้นๆ/พูดติดขัด',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ซี่โครงบาน จมูกบาน ไหปลาร้ายุบ',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจมีเสียงดัง',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ผู้ป่วยต้องลุกขึ้นนั่งหรือยืนเพื่อให้หายใจได้ดีขึ้น',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'ตัวซีดและเหงือท่วมตัว',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'หายใจเร็ว',
				to: 4,
			},
			{
				type: choiceType.result,
				name: 'หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'พูดได้ / หายใจปกติ',
				to: 6,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีโรคหอบหืดหรือไม่',
		type: questionType.single,
		from: 4,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'ไม่มี',
				to: 5,
			},
		],
	},
	{
		name: 'ผู้ป่วยอายุเท่าไหร่',
		type: questionType.single,
		from: 5,
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
		from: 6,
		to: 8,
		criteria: {
			type: criteriaType.result,
			minimum: 1,
			result: result.red3,
		},
		choices: [
			{
				name: 'เหงื่อท่วมตัว',
				checked: false,
			},
			{
				name: 'เป็นลมหรือเกือบเป็นลมเมื่อลุกนั่งหรือยืน',
				checked: false,
			},
			{
				name: 'ซีดและผิวซีดเย็น',
				checked: false,
			},
		],
	},
	{
		name: 'ผู้ป่วยตัวเขียวคล้ำหรือไม่',
		type: questionType.single,
		from: 7,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: module8Result.red3,
			},
			{
				type: choiceType.result,
				name: 'ไม่ใช่',
				result: module8Result.red2,
			},
		],
	},
	{
		name: 'ผู้ป่วยร่วมมือทำตามคำสั่งง่ายๆ เช่น ยกแขน แบมือ กำมือ',
		type: questionType.single,
		from: 8,
		choices: [
			{
				type: choiceType.result,
				name: 'ทำไม่ได้',
				result: result.yellow5,
			},
			{
				type: choiceType.result,
				name: 'ไม่อยากทำ',
				result: result.yellow6,
			},
			{
				type: choiceType.question,
				name: 'ทำได้',
				to: 9,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการเกร็งกระตุกหรือไม่',
		type: questionType.single,
		from: 9,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.red6,
			},
			{
				type: choiceType.question,
				name: 'ไม่มี',
				to: 10,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีเป็นเบาหวานหรือไม่',
		type: questionType.single,
		from: 10,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.red9,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 11,
			},
		],
	},
	{
		name: 'มีอาการเจ็บแน่นทรวงอก/ใจสั่นหรือไม่',
		type: questionType.single,
		from: 11,
		choices: [
			{
				type: choiceType.question,
				name: 'มี',
				to: 12,
			},
			{
				type: choiceType.question,
				name: 'ไม่มี',
				to: 13,
			},
		],
	},
	{
		name: 'ผู้ป่วยอายุเท่าไร',
		type: questionType.single,
		from: 12,
		choices: [
			{
				type: choiceType.result,
				name: 'มากกว่า 40 ปี',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'น้อยกว่า 40 ปี',
				result: result.yellow7,
			},
		],
	},
	{
		name: 'มีโรคกล้ามเนื้อหัวใจขาดเลือดอยู่เดิม',
		type: questionType.single,
		from: 13,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.red8,
			},
			{
				type: choiceType.question,
				name: 'ไม่มี',
				to: 14,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการหมดสติชั่ววูบเป็นครั้งแรกในวันนี้ใช่หรือไม่',
		type: questionType.single,
		from: 14,
		choices: [
			{
				type: choiceType.result,
				name: 'เป็น 2 ครั้งขึ้นไป',
				result: result.yellow4,
			},
			{
				type: choiceType.result,
				name: 'เป็นครั้งแรก',
				result: result.green5,
			},
			{
				type: choiceType.result,
				name: 'หน้ามืดแต่ไม่หมดสติ',
				result: result.white1,
			},
			{
				type: choiceType.question,
				name: 'ไม่มี',
				to: 15,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีประวัติบาดเจ็บที่ศรีษะมาก่อนหรือไม่ (ภายใน 3 วัน)',
		type: questionType.single,
		from: 15,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.green3,
			},
			{
				type: choiceType.result,
				name: 'ไม่มี',
				result: result.white2,
			},
		],
	},
];

const module19 = {
	name: 'ไม่รู้สติ',
	description: 'ไม่ตอบสนอง, หมดสติชั่ววูบ',
	module: 19,
	image: 'assets/imgs/knock-down.png',
	questions: questions,
};

export default module19;
