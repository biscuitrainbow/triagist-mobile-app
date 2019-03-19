import { level, questionType, choiceType, criteriaType } from '../meta';

const result = {
	red1: {
		code: '24 แดง 1',
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
		code: '23 แดง 2',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
					descriptions: [],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red3: {
		code: '24 แดง 3',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่าผู้ป่วยนอนราบศีรษะต่ำ  ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท ',
					descriptions: [],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red4: {
		code: '24 แดง 4',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนตะแคงซ้าย  อยู่ในสถานที่อากาศถ่ายเท',
					descriptions: [],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red5: {
		code: '24 แดง 5',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. หากกดห้ามเลือดไม่หยุด ให้ทำการขันชะเนาะ',
					descriptions: [
						'โดยใช้ผ้าที่หนาประมาณ 1 .5 นิ้ว รัดเหนือบาดแผลประมาณ 5-10 ซม. รัดจนกว่าเลือดจนจะหยุด หรือจนคลำชีพจรไม่ได้  พร้อมบันทึกเวลาที่ทำการขันชะเนาะไว้ด้วย',
					],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2. หากทำการขันชะเนาะเส้นแรกแล้วเลือดยังไม่หยุด สามารถรัดเพิ่มได้อีก 1 เส้น โดยรัดเหนือเส้นแรก 5-10 ซม. หลีกเลี่ยงบริเวณข้อต่อ เนื่องจากจะทำให้การขันชะเนาะมีประสิทธิภาพลดลง',
			],
		},
	},
	red6: {
		code: '24 แดง 6',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. หากกดห้ามเลือดไม่หยุด ให้ทำการขันชะเนาะ',
					descriptions: [
						'โดยใช้ผ้าที่หนาประมาณ 1 .5 นิ้ว รัดเหนือบาดแผลประมาณ 5-10 ซม. รัดจนกว่าเลือดจนจะหยุด หรือจนคลำชีพจรไม่ได้  พร้อมบันทึกเวลาที่ทำการขันชะเนาะไว้ด้วย',
					],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
				'2. หากทำการขันชะเนาะเส้นแรกแล้วเลือดยังไม่หยุด สามารถรัดเพิ่มได้อีก 1 เส้น โดยรัดเหนือเส้นแรก 5-10 ซม. หลีกเลี่ยงบริเวณข้อต่อ เนื่องจากจะทำให้การขันชะเนาะมีประสิทธิภาพลดลง',
			],
		},
	},
	red7: {
		code: '24 แดง 7',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ล้างแผลด้วยน้ำสะอาด หรือน้ำสบู่',
					descriptions: [
						'ปิดแผลด้วยผ้าสะอาด ส่วนอวัยวะที่ถูกตัดขาดให้เก็บใส่ถุงมัดปากถุงให้แน่น นำไปแช่ในกระติกน้ำแข็งที่มีน้ำผสมอยู่ด้วย ไม่แช่ในน้ำแข็งโดยตรง',
					],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red8: {
		code: '24 แดง 8',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	red9: {
		code: '24 แดง 9',
		level: level.red,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	yellow1: {
		code: '24 เหลือง 1',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนตะแคงซ้าย  อยู่ในสถานที่อากาศถ่ายเท',
					descriptions: [],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow2: {
		code: '24 เหลือง 2',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. จัดท่านอนศีรษะสูง ',
					descriptions: [ 'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow3: {
		code: '24 เหลือง 3',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ล้างแผลด้วยน้ำสะอาด หรือน้ำสบู่',
					descriptions: [
						'ปิดแผลด้วยผ้าสะอาด ส่วนอวัยวะที่ถูกตัดขาดให้เก็บใส่ถุงมัดปากถุงให้แน่น นำไปแช่ในกระติกน้ำแข็งที่มีน้ำผสมอยู่ด้วย ไม่แช่ในน้ำแข็งโดยตรง',
					],
				},
				{
					title: '3. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '5. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [ 'หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ' ],
		},
	},
	yellow4: {
		code: '24 เหลือง 4',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. อย่าเคลื่อนย้ายผู้ป่วย หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง',
					descriptions: [],
				},
				{
					title: '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow5: {
		code: '24 เหลือง 5',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow6: {
		code: '24 เหลือง 6',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow7: {
		code: '24 เหลือง 7',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	yellow9: {
		code: '24 เหลือง 9',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: '1. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ',
					descriptions: [ 'จัดท่าผู้ป่วยให้อยู่ในท่าที่สบาย อยู่ในพื้นที่อากาศถ่ายเท' ],
				},
				{
					title: '2. ห่มผ้าให้ความอบอุ่นแก่ผู้ป่วย',
					descriptions: [],
				},
				{
					title: '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
					descriptions: [],
				},
				{
					title: '4. ให้ญาติผู้พบเห็นเหตุการณ์',
					descriptions: [
						'เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล',
					],
				},
			],
			notes: [
				'1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
				'2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
			],
		},
	},
	green1: {
		code: '24 เขียว 1',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'ล้างแผลด้วยน้ำสะอาด หรือน้ำสบู่ ปิดแผลด้วยผ้าสะอาด แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน',
					descriptions: [],
				},
			],
			notes: [],
		},
	},
	green2: {
		code: '24 เขียว 2',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'พยายามอย่าเคลื่อนไหวผู้ป่วยมาก',
					descriptions: [ 'หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน' ],
				},
			],
			notes: [],
		},
	},
	green3: {
		code: '24 เขียว 3',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'พยายามอย่าเคลื่อนไหวผู้ป่วยมาก',
					descriptions: [ 'หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน' ],
				},
			],
			notes: [],
		},
	},
	green4: {
		code: '24 เขียว 4',
		level: level.green,
		advise: {
			contents: [
				{
					title: 'พยายามอย่าเคลื่อนไหวผู้ป่วยมาก',
					descriptions: [ 'หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน' ],
				},
			],
			notes: [],
		},
	},
	green6: {
		code: '24 เขียว 6',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	green9: {
		code: '24 เขียว 9',
		level: level.green,
		advise: {
			contents: [],
			notes: [],
		},
	},
	white1: {
		code: '24 ขาว 1',
		level: level.yellow,
		advise: {
			contents: [
				{
					title: 'ล้างแผลด้วยน้ำสะอาด หรือน้ำสบู่',
					descriptions: [
						'ปิดแผลด้วยผ้าสะอาด แผลฟกช้ำให้ประคบเย็นใน 24 ชั่วโมงแรก และประคบร้อน 24 ชั่วโมงหลัง หากแผลบวมแดง มีน้ำเหลือง หรือ อาการไม่ดีขึ้น แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน หรือในวันวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	white2: {
		code: '24 ขาว 2',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้สังเกตอาการ ',
					descriptions: [
						'หากมีอาการเจ็บแน่นหน้าอก หายใจติดขัด อาเจียนพุ่ง ซึมลง ให้มาพบแพทย์ทันที หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	white3: {
		code: '24 ขาว 3',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'แนะนำให้สังเกตอาการ ',
					descriptions: [
						'หากมีอาการเจ็บแน่นหน้าอก หายใจติดขัด อาเจียนพุ่ง ซึมลง ให้มาพบแพทย์ทันที หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ',
					],
				},
			],
			notes: [],
		},
	},
	white4: {
		code: '24 ขาว 4',
		level: level.white,
		advise: {
			contents: [
				{
					title: 'พยายามอย่าเคลื่อนไหวผู้ป่วยมาก ',
					descriptions: [ 'หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน' ],
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
				to: 17,
			},

			{
				type: choiceType.result,
				name: 'กำลังชัก',
				result: result.red6,
			},
			{
				type: choiceType.question,
				name: 'รู้สึกตัว',
				to: 1,
			},
			{
				type: choiceType.result,
				name: 'ผู้แจ้งตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้',
				result: result.yellow9,
			},
		],
	},
	{
		name: 'ผู้ป่วยชักหลังการบาดเจ็บหรือไม่',
		type: questionType.single,
		from: 1,
		choices: [
			{
				type: choiceType.result,
				name: 'ชัก',
				result: result.red6,
			},
			{
				type: choiceType.question,
				name: 'ไม่ชัก',
				to: 2,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอวัยวะ(แขน/ขา/ส่วนอื่น) ขาด/ติดคาที่ หรือไม่',
		type: questionType.single,
		from: 2,
		choices: [
			{
				type: choiceType.question,
				name: 'ใช่',
				to: 3,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 4,
			},
		],
	},
	{
		name: 'สามารถเคลื่อนย้ายผู้ป่วยพร้อมวัตถุได้หรือไม่',
		type: questionType.single,
		from: 3,
		choices: [
			{
				type: choiceType.result,
				name: 'เคลื่อนย้ายไม่ได้',
				result: result.red7,
			},
			{
				type: choiceType.result,
				name: 'เคลื่อนย้ายได้',
				result: result.yellow7,
			},
		],
	},
	{
		name: 'ตกจากที่สูงเกินกว่า 5 เมตรหรือไม่',
		type: questionType.single,
		from: 4,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.red8,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 5,
			},
		],
	},
	{
		name: 'ผู้ป่วยหมดสติชั่ววูบหรือไม่',
		type: questionType.single,
		from: 5,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.yellow1,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 6,
			},
		],
	},
	{
		name: 'มีกระดูกหักหรือไม่',
		type: questionType.single,
		from: 6,
		choices: [
			{
				type: choiceType.question,
				name: 'มี',
				to: 16,
			},
			{
				type: choiceType.result,
				name: 'ไม่มี',
				result: result.white1,
			},
		],
	},
	{
		name: 'ก่อนเกิดอุบุติเหตุมีอาการต่อไปนี้บ้างหรือไม่',
		type: questionType.single,
		from: 7,
		choices: [
			{
				type: choiceType.result,
				name: 'เจ็บแน่นทรวงอก',
				result: result.yellow3,
			},
			{
				type: choiceType.result,
				name: 'วิงเวียนศรีษะ/ปวดหัว/มึนงง',
				result: result.yellow3,
			},
			{
				type: choiceType.result,
				name: 'เบาหวาน',
				result: result.yellow3,
			},
			{
				type: choiceType.question,
				name: 'ไม่มีอาการดังกล่าวข้างต้น',
				to: 8,
			},
		],
	},
	{
		name: 'ผู้ป่วย/ผู้แจ้งยังยืนยันการขอความช่วยเหลือใช่หรือไม่',
		type: questionType.single,
		from: 8,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.green6,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				to: 9,
			},
		],
	},
	{
		name: 'ลักษณะอาการหายใจเป็นอย่างไร',
		type: questionType.single,
		from: 9,
		choices: [
			{
				type: choiceType.result,
				name: 'พูดได้แค่สั้นๆ / พูดติดขัด',
				result: result.red2,
			},
			{
				type: choiceType.result,
				name: 'หายใจเร็ว ซี่โครงบาน จมูกบานไหปลาร้ายุบ',
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
				type: choiceType.result,
				name: 'หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย',
				result: result.red2,
			},
			{
				type: choiceType.question,
				name: 'พูดได้ / หายใจปกติ',
				to: 10,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่',
		type: questionType.checkbox,
		from: 10,
		to: 11,
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
		name: 'ผู้ป่วยสามารถขยับแขน/ขาได้หรือไม่',
		type: questionType.single,
		from: 11,
		choices: [
			{
				type: choiceType.result,
				name: 'ขยับไม่ได้',
				result: result.red8,
			},
			{
				type: choiceType.question,
				name: 'ขยับได้',
				to: 12,
			},
		],
	},
	{
		name: 'ผู้ป่วยมีอาการปวดบริเวณใดหรือไม่',
		type: questionType.single,
		from: 12,
		choices: [
			{
				type: choiceType.result,
				name: 'ศรีษะ / คอ / หลัง / สะโพก / ลำตัว',
				result: result.yellow4,
			},
			{
				type: choiceType.result,
				name: 'แขนยา',
				result: result.white2,
			},
			{
				type: choiceType.question,
				name: 'ไม่มีอาการปวด',
				to: 13,
			},
		],
	},
	{
		name: 'มีตำแหน่งของบาดแผลส่วนใดของร่างกาย',
		type: questionType.single,
		from: 13,
		choices: [
			{
				type: choiceType.result,
				name: 'ศรีษะ / คอ / ทรวงอก / ช่องท้อง',
				result: result.red5,
			},
			{
				type: choiceType.question,
				name: 'ที่อื่นๆ',
				to: 14,
			},
			{
				type: choiceType.question,
				name: 'ไม่มีบาดแผล',
				to: null, // TODO : FIX THIS
			},
		],
	},
	{
		name: 'ขณะนี้ผู้ป่วยยังมีเลือดออกอยู่หรือไม่',
		type: questionType.single,
		from: 14,
		choices: [
			{
				type: choiceType.question,
				name: 'เลือดยังไหลอยู่',
				to: 15,
			},
			{
				type: choiceType.question,
				name: 'ไม่มีเลือดออก/เลือดหยุดแล้ว',
				result: result.white1,
			},
		],
	},
	{
		name: 'ให้ใช้ผ้าสะอาดหนาๆ กดบนแผนแน่นๆ ค้างไว้ แล้วมีเลือดชุ่มขึ้นมาหรือไม่',
		type: questionType.single,
		from: 15,
		choices: [
			{
				type: choiceType.result,
				name: 'ใช่',
				result: result.red5,
			},
			{
				type: choiceType.question,
				name: 'ไม่ใช่',
				result: result.green1,
			},
		],
	},
	{
		name: 'กระดูกหักตำแหน่งใด',
		type: questionType.single,
		from: 16,
		choices: [
			{
				type: choiceType.result,
				name: 'ต้นคอ / หลัง / กระดูกเชิงกราน / ต้นขา / ต้นแขน',
				result: result.red9,
			},
			{
				type: choiceType.result,
				name: 'อื่นๆ ที่เหลือ',
				result: result.green1,
			},
		],
	},
	{
		name: 'อย่าขยับผู้ป่วย (โดยเฉพาะส่วนศรีษะและคอ) แล้วเรียกผู้ป่วยดังๆ ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
		type: questionType.single,
		from: 17,
		choices: [
			{
				type: choiceType.result,
				name: 'ยังคงไม่รู้สึกตัว',
				result: result.red1,
			},
			{
				type: choiceType.question,
				name: 'พอรู้สึกตัว',
				to: 1,
			},
		],
	},
];

const module24 = {
	name: 'พลัดหกล้ม',
	description: 'อุบัติเหตุ , เจ็บปวด',
	module: 24,
	image: 'assets/imgs/man-pushing-child.png',
	color: '#CA1F13',
	questions: questions,
};

export default module24;
