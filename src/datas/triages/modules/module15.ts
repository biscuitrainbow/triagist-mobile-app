import { level, questionType, choiceType, criteriaType } from '../meta';

const result = {
	red1: {
		code: '15 แดง 1',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
					descriptions: [ '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป' ],
				},
				{
					title: '2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
					descriptions: [
						' พร้อมบอกญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆก่อน กระผม/ดิฉัน จะบอกคุณว่าต้องทำอะไร',
					],
				},
				{
					title: '3. สอนวิธีปั๊มหัวใจ',
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
				'3. หากมีผู้ช่วยเหลือคนเดียวให้หาผ้าห่มหนาๆไว้ใต้หลังเอวด้านขวาของผู้ป่วย เพื่อลดแรงดันและทำให้  เลือดไหลเวียนดีขึ้น  เนื่องจากหากผู้ป่วยนอนราบมดลูกจะกดลงบนหลอดเลือดใหญ่ในช่องท้อง หากมีผู้ช่วยเหลือหลายคนให้ผู้ช่วยเหลือ 1 คนทำการโกยมดลูกไปด้านซ้ายขณะปั๊มหัวใจ',
			],
		},
	},
	red2: {
		code: '15 แดง 2',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'3. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	red3: {
		code: '15 แดง 3',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
					descriptions: [ 'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'3. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	red4: {
		code: '15 แดง 4',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนตะแคงซ้าย ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'3. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	red5: {
		code: '15 แดง 5',
		level: level.red,
		advise: {
			contents: [],
			notes: [],
		},
	},
	red6: {
		code: '15 แดง 6',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนตะแคงซ้าย ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ห้ามให้ผู้ป่วยดื่มกินสิ่งใด ',
					descriptions: [ 'และห้ามนำสิ่งของใดให้ผู้ป่วยกัด' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ไม่รู้สึกตัว แต่ยังหายใจ  ให้เปิดทางเดินหายใจ กดหน้าผากเชยคาง',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	red7: {
		code: '15 แดง 7',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. ให้ผู้พบเห็นเหตุการณ์ให้ผ้าสะอาดรองรับตัวเด็ก',
					descriptions: [ 'และเช็ดตัวทารกให้แห้ง และ ห่มผ้าให้ความอบอุ่นแก่ทารกวางทารกไว้บนลำตัวมารดา  ระหว่างรอรถพยาบาล ' ],
				},
				{
					title: '2. บันทึกเวลาที่ทารกคลอด ',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ไม่รู้สึกตัว แต่ยังหายใจ  ให้เปิดทางเดินหายใจ กดหน้าผากเชยคาง',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. หากบริเวณนั้นมีลูกสูบยางแดงให้ใช้ลูกสูบยางแดงดูดเสมหะในปากและจมูกของทารก',
				'4. หากทารกไม่ตอบสนองให้กระตุ้น ด้วยการลูบหลัง หรือดีดฝ่าเท้า',
			],
		},
	},
	red8: {
		code: '15 แดง 8',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนตะแคงซ้าย ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ไม่รู้สึกตัว แต่ยังหายใจ  ให้เปิดทางเดินหายใจ กดหน้าผากเชยคาง',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	red9: {
		code: '15 แดง 9',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนตะแคงซ้าย ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ไม่รู้สึกตัว แต่ยังหายใจ  ให้เปิดทางเดินหายใจ กดหน้าผากเชยคาง',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	red10: {
		code: '15 แดง 10',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนตะแคงซ้าย ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ไม่รู้สึกตัว แต่ยังหายใจ  ให้เปิดทางเดินหายใจ กดหน้าผากเชยคาง',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	yellow1: {
		code: '15 เหลือง 1',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	yellow4: {
		code: '15 เหลือง 4',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	yellow5: {
		code: '15 เหลือง 5',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	yellow6: {
		code: '15 เหลือง 6',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	yellow8: {
		code: '15 เหลือง 8',
		level: level.yellow,
		advise: {
			contents: [],
			notes: [],
		},
	},
	yellow7: {
		code: '15 เหลือง 7',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	yellow9: {
		code: '15 เหลือง 9',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
					descriptions: [
						'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'3. อย่าให้ผู้ป่วยไปนั่งส้วม',
				'4. ห่มผ้าให้ผู้ป่วย และจัดหาผ้าขนหนูสะอาดไว้',
			],
		},
	},
	white1: {
		code: '15 ขาว 1',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ผู้ป่วยนอนพัก ',
					descriptions: [
						'หากมีอาการเลือดออกช่องคลอดมากผิดปกติ หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	white2: {
		code: '15 ขาว 2',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้ผู้ป่วยนอนพัก ',
					descriptions: [
						'หากมีอาการเลือดออกช่องคลอดมากผิดปกติ หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	green1: {
		code: '15 เขียว 1',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green2: {
		code: '15 เขียว 2',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green4: {
		code: '15 เขียว 4',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green6: {
		code: '15 เขียว 6',
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
		],
	},
	{
		name: 'ลักษณะอาการหายใจเป็นอย่างไร',
		type: questionType.single,
		from: 2,
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
			minimum: 2,
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
		name: 'ผู้ป่วยมีครรภ์หรือไม่',
		type: questionType.single,
		from: 6,
		choices: [
			{
				type: choiceType.question,
				name: 'ใช่',
				to: 7,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 16,
			},
		],
	},
	{
		name: 'อายุครรภ์มากกว่า 20 สัปดาห์ (4.5 เดือน) หรือไม่',
		type: questionType.single,
		from: 7,
		choices: [
			{
				type: choiceType.question,
				name: 'มากกว่า 20 สัปดาห์',
				to: 8,
			},
			{
				type: choiceType.question,
				name: 'น้อยกว่า 20 สัปดาห์',
				to: 14,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการอย่างไร',
		type: questionType.single,
		from: 8,
		choices: [
			{
				type: choiceType.result,
				name: 'ชัก / ปวดศรีษะ / เห็นภาพซ้อน / แน่นหน้าอก',
				result: result.red6,
			},
			{
				type: choiceType.result,
				name: 'เลือดออกทางช่องคลอด',
				result: result.red5,
			},
			{
				type: choiceType.question,
				name: 'เจ็บท้องคลอด',
				to: 9,
			},
			{
				type: choiceType.result,
				name: 'ทารกกำลังคลอดออกมา',
				result: result.red7,
			},
			{
				type: choiceType.question,
				name: 'ได้รับบาดเจ็บช่องท้อง',
				to: 10,
			},
			{
				type: choiceType.result,
				name: 'ถุงน้ำคร่ำแตก (น้ำเดิน)',
				result: result.red8,
			},
		],
	},
	{
		name: 'มีน้ำเดิน หรือ มูกเลือดออกทางช่องคลอดหรือไม่',
		type: questionType.single,
		from: 9,
		choices: [
			{
				type: choiceType.result,
				name: 'มี',
				result: result.red8,
			},
			{
				type: choiceType.question,
				name: 'ไม่มี',
				to: 11,
			},
		],
	},
	{
		name: 'ปวดท้องหรือไม่',
		type: questionType.single,
		from: 10,
		choices: [
			{
				type: choiceType.result,
				name: 'ไม่ปวด',
				result: result.green4,
			},
			{
				type: choiceType.result,
				name: 'ปวด',
				result: result.yellow4,
			},
		],
	},
	{
		name: 'เป็นท้องที่เท่าไหร่',
		type: questionType.single,
		from: 11,
		choices: [
			{
				type: choiceType.question,
				name: 'ท้องแรก',
				to: 12,
			},
			{
				type: choiceType.question,
				name: 'ท้องที่ 2 ขึ้นไป',
				to: 13,
			},
		],
	},
	{
		name: 'ปวดมานานเท่าไหร่แล้ว',
		type: questionType.single,
		from: 12,
		choices: [
			{
				type: choiceType.result,
				name: 'น้อยกว่า 24 ชั่วโมง',
				result: result.green6,
			},
			{
				type: choiceType.result,
				name: 'มากกว่า 24 ชั่วโมง',
				result: result.yellow6,
			},
		],
	},
	{
		name: 'อายุครรภ์เท่าไหร่',
		type: questionType.single,
		from: 13,
		choices: [
			{
				type: choiceType.result,
				name: 'น้อยกว่า 8 เดือน (37 สัปดาห์)',
				result: result.yellow7,
			},
			{
				type: choiceType.result,
				name: 'เท่ากับหรือมากกว่า 8 เดือน',
				result: result.red8,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการอย่างไร',
		type: questionType.single,
		from: 14,
		choices: [
			{
				type: choiceType.question,
				name: 'ปวดท้อง',
				to: 15,
			},
			{
				type: choiceType.result,
				name: 'เป็นตะคริว',
				result: result.white1,
			},
			{
				type: choiceType.module,
				name: 'ชัก',
				module: 16,
			},
		],
	},
	{
		name: 'มีเลือดออกทางช่องคลอดหรือไม่',
		type: questionType.single,
		from: 15,
		choices: [
			{
				type: choiceType.result,
				name: 'มีเลือดออก',
				result: result.red5,
			},
			{
				type: choiceType.result,
				name: 'ไม่มีเลือดออก',
				result: result.green1,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการอย่างไร',
		type: questionType.single,
		from: 16,
		choices: [
			{
				type: choiceType.question,
				name: 'ปวดท้อง',
				to: 17,
			},
			{
				type: choiceType.result,
				name: 'เป็นตะคริว',
				result: result.white1,
			},
			{
				type: choiceType.module,
				name: 'ชัก',
				module: 16,
			},
			{
				type: choiceType.result,
				name: 'มีเลือดออกทางช่องท้อง',
				result: result.green2,
			},
		],
	},
	{
		name: 'มีเลือดออกทางช่องคลอดหรือไม่',
		type: questionType.single,
		from: 17,
		choices: [
			{
				type: choiceType.result,
				name: 'มีเลือดออก',
				result: result.green1,
			},
			{
				type: choiceType.result,
				name: 'ไม่มีเลือดออก',
				result: result.white1,
			},
		],
	},
];

const module15 = {
	name: 'มีครรภ์',
	description: 'คลอด, นรีเวช',
	module: 15,
	image: 'assets/imgs/pregnancy-with-hearts.png',
	color: '#CA1F13',
	questions: questions,
};

export default module15;
