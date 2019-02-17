import { choiceType, level, questionType, criteriaType } from "../meta";

const result = {
    red1: {
        code: '1 แดง 1',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
                    descriptions: [
                        '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป'
                    ]

                },
                {
                    title: '2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
                    descriptions: [
                        ' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ'
                    ]
                },
                {
                    title: '3. สอนวิธีปั๊มหัวใจ',
                    descriptions: [
                        'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
                        'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
                        'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)'
                    ]
                }
            ],
            notes: [
                '1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
                '2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
            ]
        },
    },
    red2: {
        code: '1 แดง 2',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ',
                    descriptions: [
                        'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท'
                    ]
                },
                {
                    title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
                    descriptions: [
                    ],
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
            ]
        },
    },
    red3: {
        code: '1 แดง 3',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    descriptions: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]
                },
                {
                    title: '2. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
            ]
        }
    },
    red4: {
        code: '1 แดง 4',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    descriptions: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    title: '2. อย่าให้ผู้ป่วยดื่ม หรือกินอะไร ',
                    descriptions: [
                        'เพราะอาจทำให้ผู้ป่วยสำลักได้'
                    ]
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
            ]
        }
    },
    red5: {
        code: '1 แดง 5',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    descriptions: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    title: '2. อย่าให้ผู้ป่วยดื่ม หรือกินอะไร ',
                    descriptions: [
                        'ให้งดน้ำงดอาหารทุกชนิด'
                    ]
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
            ]
        }
    },
    red6: {
        code: '1 แดง 6',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    descriptions: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    title: '2. อย่าให้ผู้ป่วยดื่ม หรือกินอะไร ',
                    descriptions: [
                        'ให้งดน้ำงดอาหารทุกชนิด'
                    ]
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
            ]
        }
    },
    red7: {
        code: '1 แดง 7',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    descriptions: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    title: '2. อย่าให้ผู้ป่วยดื่ม หรือกินอะไร ',
                    descriptions: [
                        'ให้งดน้ำงดอาหารทุกชนิด'
                    ]
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
            ]
        }
    },
    red8: {
        code: '1 แดง 8',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    descriptions: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    title: '2. อย่าให้ผู้ป่วยดื่ม หรือกินอะไร ',
                    descriptions: [
                        'ให้งดน้ำงดอาหารทุกชนิด'
                    ]
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
            ]
        }
    },
    red9: {
        code: '1 แดง 9',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    descriptions: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    title: '2. อย่าให้ผู้ป่วยดื่ม หรือกินอะไร ',
                    descriptions: [
                        'ให้งดน้ำงดอาหารทุกชนิด'
                    ]
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
            ]
        }
    },
    yellow1: {
        code: '1 เหลือง 1',
        level: level.red,
        advise: {
            contents: [
                {
                    title: '1. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
                {
                    title: '2. อย่าให้ผู้ป่วยดื่ม หรือกินอะไร ',
                    descriptions: [
                        'ให้งดน้ำงดอาหารทุกชนิด'
                    ]
                },

            ],
            notes: [

            ]
        }
    },
    yellow2: {
        code: '1 เหลือง 2',
        level: level.yellow,
        advise: {
            contents: [
                {
                    title: '1.จัดท่าผู้ป่วยนอนราบ ',
                    descriptions: [
                        'และอยู่ในสถานที่อากาศถ่ายเท',
                    ],
                },
                {
                    title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
                    descriptions: [
                    ],
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    yellow3: {
        code: '1 เหลือง 3',
        level: level.yellow,
        advise: {
            contents: [
                {
                    title: '1.จัดท่าผู้ป่วยนอนราบ ',
                    descriptions: [
                        'และอยู่ในสถานที่อากาศถ่ายเท',
                    ],
                },
                {
                    title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
                    descriptions: [
                    ],
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    yellow4: {
        code: '1 เหลือง 4',
        level: level.yellow,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนอยู่ในท่าที่สบาย',
                    descriptions: [
                        'และอยู่ในสถานที่อากาศถ่ายเท'
                    ],
                },
                {
                    title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
                    descriptions: [
                    ],
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    yellow5: {
        code: '1 เหลือง 5',
        level: level.yellow,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนอยู่ในท่าที่สบาย',
                    descriptions: [
                        'และอยู่ในสถานที่อากาศถ่ายเท'
                    ],
                },
                {
                    title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
                    descriptions: [
                    ],
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    yellow6: {
        code: '1 เหลือง 6',
        level: level.yellow,
        advise: {
            contents: [

            ],
            notes: [

            ]
        }
    },
    yellow8: {
        code: '1 เหลือง 8',
        level: level.yellow,
        advise: {
            contents: [

            ],
            notes: [

            ]
        }
    },
    yellow9: {
        code: '1 เหลือง 9',
        level: level.yellow,
        advise: {
            contents: [
                {
                    title: '1. จัดท่าผู้ป่วยนอนอยู่ในท่าที่สบาย',
                    descriptions: [
                        'และอยู่ในสถานที่อากาศถ่ายเท'
                    ],
                },
                {
                    title: '2. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
                    descriptions: [
                    ],
                },
                {
                    title: '3. ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    descriptions: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    green1: {
        code: '1 เขียว 1',
        level: level.green,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    green2: {
        code: '1 เขียว 2',
        level: level.green,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    white1: {
        code: '1 ขาว 1',
        level: level.white,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    white2: {
        code: '1 ขาว 2',
        level: level.white,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    white3: {
        code: '1 ขาว 3',
        level: level.white,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    white4: {
        code: '1 ขาว 4',
        level: level.white,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    white5: {
        code: '1 ขาว 5',
        level: level.white,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    white6: {
        code: '1 ขาว 6',
        level: level.white,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
    white7: {
        code: '1 ขาว 7',
        level: level.white,
        advise: {
            contents: [
                {
                    title: '1. ให้ผู้ป่วยนอนพัก ',
                    descriptions: [
                        'และอยู่ในท่าที่สบาย'
                    ],
                },
                {
                    title: '2. แนะนำให้นำผู้ป่วย ไปตรวจในวันและเวลาราชการ',
                    descriptions: [
                        'และให้นำยาที่ผู้ป่วยใช้ทั้งไป รพ. พร้อมผู้ป่วยด้วย'
                    ],
                },
                {
                    title: '3. หากผู้ป่วยมีอาการเปลี่ยนแปลงให้โทรแจ้ง 1669 อีกครั้ง',
                    descriptions: [
                    ]
                },
            ],
            notes: [
            ]
        }
    },
};


const questions = [
    {
        name: 'ผู้ป่วยรู้สึกตัวหรือไม่',
        type: questionType.button,
        from: 0,
        choices: [
            {
                type: choiceType.question,
                name: 'ไม่รู้สึกตัว',
                to: 1
            },
            {
                type: choiceType.question,
                name: 'รู้สึกตัว',
                to: 2,
            },
            {
                type: choiceType.result,
                name: 'ผู้แจ้งตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้',
                result: result.yellow9
            }
        ]
    },
    {
        name: 'ตบไหล่ และปลุกเรียก ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
        type: questionType.button,
        from: 1,
        choices: [
            {
                type: choiceType.result,
                name: 'ยังคงไม่รู้สึกตัว',
                result: result.red1
            },
            {
                type: choiceType.question,
                name: 'พอรู้สึกตัว',
                to: 2
            },
        ]
    },
    {
        name: 'ลักษณะอาการหายใจเป็นอย่างไร',
        type: questionType.button,
        from: 2,
        choices: [
            {
                type: choiceType.result,
                name: 'พูดได้แค่ประโยคสั้นๆ/พูดติดขัด',
                result: result.red2

            },
            {
                type: choiceType.result,
                name: 'ซี่โครงบาน จมูกบานไหปลาร้ายุบ',
                result: result.red2

            },
            {
                type: choiceType.result,
                name: 'หายใจมีเสียงดัง',
                result: result.red2

            },
            {
                type: choiceType.result,
                name: 'ผู้ป่วยต้องลุกขึ้นนั่งหรือยืนเพื่อให้หายใจได้ดีขึ้น',
                result: result.red2

            },
            {
                type: choiceType.result,
                name: 'ตัวซีดและเหงือท่วมตัว',
                result: result.red2

            },
            {
                type: choiceType.question,
                name: 'หายใจเร็ว',
                to: 3
            },
            {
                type: choiceType.result,
                name: 'หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย',
                result: result.red2
            },
            {
                type: choiceType.question,
                name: 'พูดได้ / หายใจปกติ',
                to: 5
            },
        ]
    },
    {
        name: 'ผู้ป่วยมีโรคหอบหืดหรือไม่',
        type: questionType.button,
        from: 3,
        choices: [
            {
                type: choiceType.result,
                name: 'มี',
                result: result.red2
            },
            {
                type: choiceType.question,
                name: 'ไม่มี',
                to: 4
            },
        ]
    },
    {
        name: 'ผู้ป่วยอายุเท่าไหร่',
        type: questionType.button,
        from: 4,
        choices: [
            {
                type: choiceType.result,
                name: 'มากกว่า 20 ปี',
                result: result.red2

            },
            {
                type: choiceType.result,
                name: 'น้อยกว่า 20 ปี',
                result: result.yellow8

            },
        ]
    },
    {
        name: 'ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่',
        type: questionType.checkbox,
        from: 5,
        to: 21,
        criteria: {
            type: criteriaType.question,
            minimum: 1,
            to: 6,
        },
        choices: [
            {
                name: 'เหงื่อท่วมตัว',
                checked: false,
            },
            {
                name: 'ซีดและผิวซีดเย็น',
                checked: false,
            },
            {
                name: 'เป็นลมหรือเกือบเป็นลมเมื่อลุกนั่งหรือยืน',
                checked: false,
            },
        ]
    },
    {
        name: 'ผู้ป่วยปวดท้องส่วนใด',
        type: questionType.button,
        from: 6,
        choices: [
            {
                type: choiceType.question,
                name: 'ปวด/จุกเสียด/แน่นยอดอก/ลิ้นปี่/ท้องส่วนบน (เหนือสะดือ)',
                to: 7
            },
            {
                type: choiceType.question,
                name: 'ปวดท้องน้อย/หลัง/บั้นเอว/สีข้าง',
                to: 8
            },
            {
                type: choiceType.result,
                name: 'ปวดไม่จำเพาะเจาะจง/อื่นๆ',
                result: result.yellow3
            },
        ]
    },
    {
        name: 'ผู้ป่วยอายุมากกว่า 50 ปี หรือไม่',
        type: questionType.button,
        from: 7,
        choices: [
            {
                type: choiceType.result,
                name: 'อายุมากกว่า 50 ปี',
                result: result.red9
            },
            {
                type: choiceType.result,
                name: 'อายุน้อยกว่า 50 ปี',
                result: result.yellow3
            },
        ]
    },
    {
        name: 'อาการปวดเกิดจากการบาดเจ็บหรือไม่',
        type: questionType.button,
        from: 8,
        choices: [
            {
                type: choiceType.question,
                name: 'ไม่เกิดอาการบาดเจ็บ',
                to: 9
            },
            {
                type: choiceType.module,
                name: 'เกิดอาการบาดเจ็บ',
                module: 21,
            },
        ]
    },
    {
        name: 'ผู้ป่วยอายุเท่าใด',
        type: questionType.button,
        from: 9,
        choices: [
            {
                type: choiceType.result,
                name: 'อายุมากกว่า 65 ปี',
                result: result.red8
            },
            {
                type: choiceType.result,
                name: 'อายุ 50 - 65 ปี',
                result: result.yellow4
            },
            {
                type: choiceType.result,
                name: 'อายุน้อยกว่า 50 ปี',
                result: result.yellow3
            },
        ]
    },
    {
        name: 'ผู้ป่วยอาเจียนหรือไม่',
        type: questionType.button,
        from: 10,
        choices: [
            {
                type: choiceType.question,
                name: 'อาเจียน',
                to: 11
            },
            {
                type: choiceType.question,
                name: 'ไม่อาเจียน',
                to: 12,
            },
        ]
    },
    {
        name: 'ผู้ป่วยมีเลือดออกหรือไม่ ที่ใดบ้าง',
        type: questionType.button,
        from: 11,
        choices: [
            {
                type: choiceType.result,
                name: 'อาเจียนเป็นเลือด',
                result: result.red5
            },
            {
                type: choiceType.result,
                name: 'ถ่ายอุจจาระดำ / แดงคล้ำ',
                result: result.red6
            },
            {
                type: choiceType.result,
                name: '(กรณีเป็นผู้หญิง)มีเลือดออกทางช่องคลอด',
                result: result.red7
            },
            {
                type: choiceType.result,
                name: 'ไม่เห็นมีเลือดออก',
                result: result.green1
            },
        ]
    },
    {
        name: 'ผู้ป่วยปวดท้องส่วนใด บนเหนือสะดือหรือส่่วนอื่น',
        type: questionType.button,
        from: 12,
        choices: [
            {
                type: choiceType.question,
                name: 'ท้องส่วนบน เหนือสะดือ',
                to: 13
            },
            {
                type: choiceType.question,
                name: 'ท้องน้อย',
                to: 14
            },
            {
                type: choiceType.question,
                name: 'หลัง',
                to: 16
            },
            {
                type: choiceType.question,
                name: 'บั้นเอว/สีข้าง',
                to: 19
            },
            {
                type: choiceType.question,
                name: 'ขาหนีบ',
                to: 20
            },
            {
                type: choiceType.result,
                name: 'ระบุบริเวณที่ปวดชัดเจนไม่ได้',
                result: result.white1
            },
        ]
    },
    {
        name: 'ผู้ป่วยอายุมากกว่า 50 ปีหรือไม่',
        type: questionType.button,
        from: 13,
        choices: [
            {
                type: choiceType.result,
                name: 'อายุมากกว่า 50 ปี',
                result: result.yellow6
            },
            {
                type: choiceType.result,
                name: 'อายุน้อยกว่า 50 ปี',
                result: result.white2
            },

        ]
    },
    {
        name: 'อาการปวดเกิดจากการบาดเจ็บหรือไม่',
        type: questionType.button,
        from: 14,
        choices: [
            {
                type: choiceType.question,
                name: 'ไม่ใช่',
                to: 15
            },
            {
                type: choiceType.module,
                name: 'ใช่',
                module: 21,
            },
        ]
    },
    {
        name: 'ผู้ป่วยอายุมากกว่า 50 ปีหรือไม่',
        type: questionType.button,
        from: 15,
        choices: [
            {
                type: choiceType.result,
                name: 'อายุมากกว่า 50 ปี',
                result: result.yellow4
            },
            {
                type: choiceType.result,
                name: 'อายุน้อยกว่า 50 ปี',
                result: result.white2
            },

        ]
    },
    {
        name: 'อาการปวดเกิดจากการบาดเจ็บ/ยกของหนักใช่หรือไม่',
        type: questionType.button,
        from: 16,
        choices: [
            {
                type: choiceType.question,
                name: 'ไม่ใช่',
                to: 17
            },
            {
                type: choiceType.result,
                name: 'ใช่',
                result: result.white6
            },
        ]
    },
    {
        name: 'ผู้ป่วยมีอายุมากกว่า 50 ปีหรือไม่',
        type: questionType.button,
        from: 17,
        choices: [
            {
                type: choiceType.question,
                name: 'อายุมากกว่า 50 ปี',
                to: 18
            },
            {
                type: choiceType.question,
                name: 'อายุน้อยกว่า 50 ปี',
                to: 19
            },
        ]
    },
    {
        name: 'ผู้ป่วยเริ่มมีอาการปวดรุนแรงขึ้นมาอย่างเฉียบพลันหรือไม่',
        type: questionType.button,
        from: 18,
        choices: [
            {
                type: choiceType.result,
                name: 'ใช่',
                result: result.yellow4
            },
            {
                type: choiceType.result,
                name: 'ไม่ใช่',
                result: result.white3
            },
        ]
    },

    {
        name: 'ปวดบีบอย่างรุนแรงเป็นช่วงๆหรือไม่',
        type: questionType.button,
        from: 19,
        choices: [
            {
                type: choiceType.result,
                name: 'ใช่',
                result: result.yellow5
            },
            {
                type: choiceType.result,
                name: 'ไม่ใช่',
                result: result.white4
            },

        ]
    },
    {
        name: 'ผู้ป่วยเริ่มมีอาการปวดรุนแรงขึ้นมาอย่างเฉียบพลันหรือไม่',
        type: questionType.button,
        from: 20,
        choices: [
            {
                type: choiceType.result,
                name: 'ใช่',
                result: result.green1
            },
            {
                type: choiceType.result,
                name: 'ไม่ใช่',
                result: result.white5
            },

        ]
    },
    {
        name: 'ผู้ป่วยมีปัญหาสายสวนหรือไม่',
        type: questionType.button,
        from: 21,
        choices: [
            {
                type: choiceType.question,
                name: 'มี',
                to: 22
            },
            {
                type: choiceType.question,
                name: 'ไม่มี',
                to: 10
            },
        ]
    },
    {
        name: 'เป็นสายสวนอะไร',
        type: questionType.button,
        from: 22,
        choices: [
            {
                type: choiceType.result,
                name: 'สายสวนปัสสาวะ',
                result: result.white7
            },
            {
                type: choiceType.result,
                name: 'สายสวนอื่นๆ',
                result: result.green2
            },
        ]
    },

];

const module1 = {
    module: 1,
    name: 'ปวดท้อง',
    description: 'ปวดท้อง, หลัง, เชิงกรานและขาหนีบ',
    image: 'assets/imgs/stomach-ache.png',
    questions: questions,
}

export default module1;