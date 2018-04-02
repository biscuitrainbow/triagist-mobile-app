import { ResultPage } from './../result/result';

export const CHOICE_TYPE = {
    CHECKBOX: 'checkbox',
    BUTTON: 'button'
}

export const TYPE = {
    'RESULT': 'result',
    'QUESTION': 'question'
}

export const LEVEL = {
    R: {
        text: 'ผู้ป่วยฉุกเฉินวิกฤติ',
        color: '#D72732'
    },
    Y: {
        text: 'ผู้ป่วยฉุกเฉินเร่งด่วน',
        color: '#F7E744'
    },
    G: {
        text: 'ผู้ป่วยฉุกเฉินไม่รุนแรง',
        color: '#1BA153'
    },
    W: {
        text: 'ผู้ป่วยทั่วไป',
        color: '#F0F0F0'
    }
}

export const RESULT = {
    R21: {
        code: '2 แดง 1',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
                    subDetails: [
                        '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป'
                    ]

                },
                {
                    detail: 'นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
                    subDetails: [
                        ' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ'
                    ]
                },
                {
                    detail: 'สอนวิธีปั๊มหัวใจ',
                    subDetails: [
                        'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
                        'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
                        'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)'
                    ]
                }
            ],
            notes: [
                '1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
                '2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
                '3. กดเหล็กในออก(หากทำได้) ,ประคบน้ำแข็งบริเวณที่ถูกต่อย ',
            ]
        }
    },
    R22: {
        code: '2 แดง 2',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ',
                    subDetails: [
                        'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    detail: 'ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
                    subDetails: [

                    ]
                },
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด ',
                    subDetails: [
                        'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                }
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
                '2. กดเหล็กในออก(หากทำได้) ,ประคบน้ำแข็งบริเวณที่ถูกต่อย',
            ]
        }
    },
    R23: {
        code: '2 แดง 3',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    subDetails: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    subDetails: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
                '2. กดเหล็กในออก(หากทำได้) ,ประคบน้ำแข็งบริเวณที่ถูกต่อย',

            ]
        }
    },
    R24: {
        code: '2 แดง 4',
        leave: LEVEL.R
    },
    Y21: {
        code: '2 เหลือง 1',
        leave: LEVEL.Y,
        advise: {
            contents: [
                {
                    detail: 'จัดท่านอนศรีษะสูง',
                    subDetails: [
                        'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    subDetails: [
                        'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
                '2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
                '3. กดเหล็กในออก(หากทำได้) ,ประคบน้ำแข็งบริเวณที่ถูกต่อย',

            ]
        }
    },
    Y24: {
        code: '2 เหลือง 4',
        leave: LEVEL.Y,
        advise: {
            contents: [

            ],
            notes: [

            ]
        }
    },
    Y28: {
        code: '2 เหลือง 8',
        leave: LEVEL.Y,
        advise: {
            contents: [

            ],
            notes: [

            ]
        }
    },
    Y29: {
        code: '2 เหลือง 9',
        leave: LEVEL.Y,
        advise: {
            contents: [

            ],
            notes: [

            ]
        }
    },
    W21: {
        code: '2 ขาว 1',
        leave: LEVEL.W,
        advise: {
            contents: [
                {
                    detail: 'แนะนำให้ผู้ป่วยนอนพัก ',
                    subDetails: [
                        'หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ'
                    ]
                },
            ],
            notes: [

            ]
        }
    },
    W22: {
        code: '2 ขาว 2',
        leave: LEVEL.W,
        advise: {
            contents: [
                {
                    detail: 'แนะนำให้ผู้ป่วยนอนพัก ',
                    subDetails: [
                        'หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ'
                    ]
                },
            ],
            notes: [

            ]
        }
    },
    W23: {
        code: '2 ขาว 3',
        leave: LEVEL.W,
        advise: {
            contents: [
                {
                    detail: 'แนะนำให้ผู้ป่วยนอนพัก',
                    subDetails: [
                        'หากมีอาการแน่นหน้าอก'
                    ]
                },
            ],
            notes: [

            ]
        }
    },
    W24: {
        code: '2 ขาว 4',
        leave: LEVEL.W,
        advise: {
            contents: [
                {
                    detail: 'แนะนำให้ผู้ป่วยนอนพัก ',
                    subDetails: [
                        'หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ'
                    ]
                },
            ],
            notes: [

            ]
        }
    },
    R141: {
        code: '14 แดง 1',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่',
                    subDetails: [
                        '<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป'
                    ]

                },
                {
                    detail: 'นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง',
                    subDetails: [
                        ' พร้อมบอกว่าญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆ ก่อนนะค่ะ กระผม/ดิฉัน จะบอกคุณว่า ต้องทำไรค่ะ'
                    ]
                },
                {
                    detail: 'สอนวิธีปั๊มหัวใจ',
                    subDetails: [
                        'ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย',
                        'ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา',
                        'ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)'
                    ]
                }
            ],
            notes: [
                '1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย',
                '2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที',
                '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',

            ]
        }
    },

    R142: {
        code: '14 แดง 2',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ',
                    subDetails: [
                        'หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    detail: 'ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป',
                    subDetails: [

                    ]
                },
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด ',
                    subDetails: [
                        'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                }
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
                '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',

            ]
        }
    },
    R143: {
        code: '14 แดง 3',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'จัดท่าผู้ป่วยนอนราบศรีษะต่ำ',
                    subDetails: [
                        'ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท'
                    ]

                },
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    subDetails: [
                        'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
                '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',

            ]
        }
    },
    Y144: {
        code: '14 เหลือง 4',
        leave: LEVEL.Y,
        advise: {
            contents: [
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    subDetails: [
                        'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
                '2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
                '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย'
            ]
        }
    },
    R146: {
        code: '14 แดง 6',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'จัดพื้นที่ให้โล่ง ',
                    subDetails: [
                        'ไม่มีสิ่งกีดขวางขณะที่ผู้ป่วยชัก'
                    ]

                },
                {
                    detail: 'ไม่งัดหรือใส่ของแข็งเข้าไปในปากผู้ป่วย',
                    subDetails: [

                    ]
                },
                {
                    detail: 'จัดท่านอนตะแคงซ้าย ',
                    subDetails: [
                        'อยู่ในสถานที่อากาศถ่ายเท'
                    ]
                },
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    subDetails: [
                        'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
                '2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
                '3. จัดท่านอนตะแคงซ้าย อยู่ในสถานที่อากาศถ่ายเท'

            ]
        }
    },
    R147: {
        code: '14 แดง 7',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'พูดคุยด้วยท่าทีเป็นมิตร ',
                    subDetails: [
                    ]

                },
                {
                    detail: 'สังเกตอาการผู้ป่วย ',
                    subDetails: [
                        'ระวังไม่ควรเข้าใกล้ผู้ป่วยมาก อยู่ห่างจากผู้ป่วยประมาณ 8 เมตร'
                    ]
                },
                {
                    detail: 'ควรนั่งอยู่ในระดับที่มองเห็นผู้ป่วยได้ชัดเจน ',
                    subDetails: [
                    ]
                },
                {
                    detail: 'หากผู้ป่วยมีแนวโน้มควบคุมตัวเองไม่ได้',
                    subDetails: [
                        'อาจต้องใช้วิธีผูกมัด'
                    ]
                },
            ],
            notes: [
                '1. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
                '2. หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',

            ]
        }
    },
    R149: {
        code: '14 แดง 9',
        leave: LEVEL.R,
        advise: {
            contents: [
                {
                    detail: 'อย่าทำให้ผู้ป่วยอาเจียน ',
                    subDetails: [
                    ]

                },
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    subDetails: [
                        'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
                '2. หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',

            ]
        }
    },
    Y148: {
        code: '14 เหลือง 8',
        leave: LEVEL.Y,
        advise: {
            contents: [
                {
                    detail: 'จัดท่านอนตะแคงซ้าย ',
                    subDetails: [
                        'เพื่อเปิดทางเดินหายใจให้โล่ง อยู่ในสถานที่อากาศถ่ายเท'
                    ]
                },
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    subDetails: [
                        'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย',
                '2. หากผู้ป่วยอาเจียนให้พลิกด้านตะแคงหน้าผู้ป่วยไปด้านใดด้านหนึ่ง',
            ]
        }
    },
    Y149: {
        code: '14 เหลือง 9',
        leave: LEVEL.Y,
        advise: {
            contents: [
                {
                    detail: 'ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด',
                    subDetails: [
                        'จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล'
                    ]
                },
            ],
            notes: [
                '1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล',
                '2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ',
                '3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย'
            ]
        }
    },
    G143: {
        code: '14 เขียว 3',
        leave: LEVEL.G,
        advise: {
            contents: [
                {
                    detail: 'พูดกับผู้ป่วยด้วยความนุ่มนวล ',
                    subDetails: [
                        'เกลี่ยกล่อมให้นอนพัก'
                    ]
                },
                {
                    detail: 'พยายามให้ผู้ป่วยอยู่ในบริเวณบ้าน ',
                    subDetails: [
                        'พื้นที่โล่งอากาศถ่ายเท'
                    ]
                },
                {
                    detail: 'ระวังไม่ให้มีสิ่งของที่สามารถทำอันตรายต่อญาติและผู้ป่วยอยู่ใกล้ตัว ',
                    subDetails: [
                    ]
                },
            ],
            notes: [
                '1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ'
            ]
        }
    },
    G144: {
        code: '14 เขียว 4',
        leave: LEVEL.G,
        advise: {
            contents: [

            ],
            notes: [

            ]
        }
    },
    G145: {
        code: '14 เขียว 5',
        leave: LEVEL.G,
        advise: {
            contents: [

            ],
            notes: [

            ]
        }
    },
    G148: {
        code: '14 เขียว 8',
        leave: LEVEL.G,
        advise: {
            contents: [
                {
                    detail: 'ล้างตาด้วยน้ำสะอาด ',
                    subDetails: [
                        'ไม่แนะนำให้ใช้ยาหยอดตาหรือยาป้ายตา'
                    ]
                },
            ],
            notes: [
                '1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล  หากอาการยังไม่ดีขึ้นให้ญาตินำผู้ป่วยส่งโรงพยาบาลใกล้บ้าน'
            ]
        }
    },
    W141: {
        code: '14 ขาว 1',
        leave: LEVEL.W,
        advise: {
            contents: [
                {
                    detail: 'แนะนำให้ผู้ป่วยนอนพัก',
                    subDetails: [
                        ' หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ'
                    ]
                },
            ],
            notes: [

            ]
        }
    }
}


export const QUESTIONS = [
    {
        name: 'แพ้ยา',
        description: 'แพ้อาหาร , สัตว์ต่อย , ภูมิแพ้ ',
        image: 'assets/imgs/pill.png',
        color: '#CA1F13',
        questions: [
            {
                question: 'ผู้ป่วยรู้สึกตัวหรือไม่',
                from: 0,
                choices: [
                    {
                        type: TYPE.QUESTION,
                        name: 'รู้สึกตัว',
                        to: 2,
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่รู้สึกตัว',
                        to: 1
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.Y.text,
                            code: RESULT.Y29.code,
                            advise: RESULT.Y29.advise,
                            color: LEVEL.Y.color,
                        }
                    }
                ]
            },
            {
                question: 'ตบไหล่ และปลุกเรียก ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
                from: 1,
                choices: [
                    {
                        type: TYPE.QUESTION,
                        name: 'พอรู้สึกตัว',
                        to: 2
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ยังคงไม่รู้สึกตัว',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R21.code,
                            advise: RESULT.R21.advise,
                            color: LEVEL.R.color,
                        }
                    }
                ]
            },
            {
                question: 'ลักษณะอาการหายใจเป็นอย่างไร',
                from: 2,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'พูดได้แค่สั้นๆ',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R22.code,
                            advise: RESULT.R22.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'หายใจมีเสียงดัง',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R22.code,
                            advise: RESULT.R22.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ซี่โครงบาน จมูกบานไหปลาร้ายุบ',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R22.code,
                            advise: RESULT.R22.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ตัวซีดและเหงือท่วมตัว',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R22.code,
                            advise: RESULT.R22.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ผู้ป่วยต้องลุกขึ้นนั่งหรือยืนเพื่อให้หายใจได้ดีขึ้น',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R22.code,
                            advise: RESULT.R22.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R22.code,
                            advise: RESULT.R22.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'หายใจเร็ว',
                        to: 3
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'พูดได้ / หายใจปกติ',
                        to: 5
                    },
                ]
            },
            {
                question: 'ผู้ป่วยมีโรคหอบหืดหรือไม่',
                from: 3,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'มี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R22.code,
                            advise: RESULT.R22.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่มี',
                        to: 4
                    },
                ]
            },
            {
                question: 'ผู้ป่วยอายุเท่าไหร่',
                from: 4,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'มากกว่า 20 ปี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R22.code,
                            advise: RESULT.R22.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'น้อยกว่า 20 ปี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.Y.text,
                            code: RESULT.Y28.code,
                            advise: RESULT.Y28.advise,
                            color: LEVEL.Y.color,
                        }
                    },

                ]
            },
            {
                question: 'ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่',
                type: CHOICE_TYPE.CHECKBOX,
                from: 5,
                to: 6,
                payload: {
                    level: LEVEL.R.text,
                    code: RESULT.R23.code,
                    advise: RESULT.R23.advise,
                    color: LEVEL.R.color,
                },
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'เหงื่อท่วมตัว',
                        checked: false,

                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ซีดและผิวซีดเย็น',
                        checked: false,

                    },
                    {
                        type: TYPE.RESULT,
                        name: 'เป็นลมหรือเกือบเป็นลม',
                        checked: false,

                    },
                    {
                        type: TYPE.RESULT,
                        name: 'อาการซึมลง',
                        checked: false,
                    },
                ]
            },
            {
                question: 'ผุ้ป่วยเคยมีประวัติแพ้รุนแรงต่อสิ่งใดหรือไม่',
                from: 6,
                choices: [
                    {
                        type: TYPE.QUESTION,
                        name: 'เคย',
                        to: 7
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่เคย',
                        to: 8
                    },
                ]
            },
            {
                question: 'เคยมีอาการเกิดขึ้นหลังจากได้รับสิ่งที่แพ้ภายใน 30 นาทีหรือไม่',
                from: 7,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'ใช่',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.Y.text,
                            code: RESULT.Y21.code,
                            advise: RESULT.Y21.advise,
                            color: LEVEL.Y.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่ใช่',
                        to: 8
                    },
                ]
            },
            {
                question: 'ผุ้ป่วยเคยแพ้ยา / ช่วงนี้ผู้ป่วยกิน / ได้รับยาแล้วมีอาการแพ้หรือไม่',
                from: 8,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'ใช่',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.Y.text,
                            code: RESULT.Y24.code,
                            advise: RESULT.Y24.advise,
                            color: LEVEL.Y.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่ใช่',
                        to: 9
                    },
                ]
            },
            {
                question: 'ผู้ป่วยมีอาการผิดปกติอย่างไรบ้าง',
                from: 9,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'เป็นผื่นคัน / ลมพิษ',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.W.text,
                            code: RESULT.W23.code,
                            advise: RESULT.W23.advise,
                            color: LEVEL.W.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'อาการอื่นๆ',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.W.text,
                            code: RESULT.W22.code,
                            advise: RESULT.W22.advise,
                            color: LEVEL.W.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่มีอาการผิดปกติ',
                        to: 11
                    },
                ]
            },
            {
                question: 'ผู้ป่วยเคยมีประวัติการแพ้หรือไม่',
                from: 10,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'เคย',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.W.text,
                            code: RESULT.W24.code,
                            advise: RESULT.W24.advise,
                            color: LEVEL.W.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ไม่เคย',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.W.text,
                            code: RESULT.W21.code,
                            advise: RESULT.W21.advise,
                            color: LEVEL.W.color,
                        }
                    },
                ]
            },
        ]
    },
    {
        name: 'ได้รับสารพิษ',
        description: 'ยาเกินขนาด',
        image: 'assets/imgs/poison.png',
        color: '#FF85A7',
        questions: [
            {
                question: 'ผู้ป่วยรู้สึกตัวหรือไม่',
                from: 0,
                choices: [
                    {
                        type: TYPE.QUESTION,
                        name: 'รู้สึกตัว',
                        to: 2,
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่รู้สึกตัว',
                        to: 1
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.Y.text,
                            code: RESULT.Y149.code,
                            advise: RESULT.Y149.advise,
                            color: LEVEL.Y.color,
                        }
                    }
                ]
            },
            {
                question: 'ตบไหล่ และปลุกเรียก ผู้ป่วยรู้สึกตัวขึ้นหรือไม่',
                from: 1,
                choices: [
                    {
                        type: TYPE.QUESTION,
                        name: 'พอรู้สึกตัว',
                        to: 2
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ยังคงไม่รู้สึกตัว',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R141.code,
                            advise: RESULT.R141.advise,
                            color: LEVEL.R.color,
                        }
                    }
                ]
            },
            {
                question: 'ลักษณะอาการหายใจเป็นอย่างไร',
                from: 2,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'พูดได้แค่สั้นๆ',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R142.code,
                            advise: RESULT.R142.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'หายใจมีเสียงดัง',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R142.code,
                            advise: RESULT.R142.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ซี่โครงบาน จมูกบานไหปลาร้ายุบ',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R142.code,
                            advise: RESULT.R142.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ตัวซีดและเหงือท่วมตัว',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R142.code,
                            advise: RESULT.R142.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ผู้ป่วยต้องลุกขึ้นนั่งหรือยืนเพื่อให้หายใจได้ดีขึ้น',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R142.code,
                            advise: RESULT.R142.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R142.code,
                            advise: RESULT.R142.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'หายใจเร็ว',
                        to: 3
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'พูดได้ / หายใจปกติ',
                        to: 5
                    },
                ]
            },
            {
                question: 'ผู้ป่วยมีโรคหอบหืดหรือไม่',
                from: 3,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'มี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R142.code,
                            advise: RESULT.R142.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่มี',
                        to: 4
                    },
                ]
            },
            {
                question: 'ผู้ป่วยอายุเท่าไหร่',
                from: 4,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'มากกว่า 20 ปี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R142.code,
                            advise: RESULT.R142.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'น้อยกว่า 20 ปี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.Y.text,
                            code: RESULT.Y148.code,
                            advise: RESULT.Y148.advise,
                            color: LEVEL.Y.color,
                        }
                    },

                ]
            },
            {
                question: 'ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่',
                type: CHOICE_TYPE.CHECKBOX,
                from: 5,
                to: 6,
                payload: {
                    level: LEVEL.R.text,
                    code: RESULT.R143.code,
                    advise: RESULT.R143.advise,
                    color: LEVEL.R.color,
                },
                choices: [
                    {
                        type: TYPE.RESULT,
                        from: 5,
                        name: 'เหงื่อท่วมตัว',
                        checked: false,

                    },
                    {
                        type: TYPE.RESULT,
                        from: 5,
                        name: 'ซีดและผิวซีดเย็ด',
                        checked: false,

                    },
                    {
                        type: TYPE.RESULT,
                        from: 5,
                        name: 'เป็นลมหรือเกือบเป็นลม',
                        checked: false,

                    },
                ]
            },
            {
                question: 'ผู้ป่วยมีอาการชักหรือไม่',
                from: 6,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'ชัก',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R146.code,
                            advise: RESULT.R146.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่ใช่',
                        to: 7
                    },
                ]
            },
            {
                question: 'เจ้าหน้าที่ร้องขอการเตรียมพร้อมเนื่องจากผู้ป่วยมีภาวะคุกคาม อันจะเป็นอัตรายต่อตนเองและผู้อื่นหรือไม่',
                from: 7,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'ใช่',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R147.code,
                            advise: RESULT.R147.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'ไม่ใช่',
                        to: 8
                    },
                ]
            },
            {
                question: 'ผู้ป่วยได้รับ/สารอะไรเข้าสู่ร่างกาย',
                from: 8,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'ยา',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.G.text,
                            code: RESULT.G144.code,
                            advise: RESULT.G144.advise,
                            color: LEVEL.G.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'สารเคมีที่ใช้ในการเกษตร',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R149.code,
                            advise: RESULT.R149.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'สารกัดกร่อน / สารเคมีอื่น (ที่ไม่ใช่อาหารยา)',
                        to: 9,
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'สารป้องกันตัว เช่น แก๊สน้ำตา สเปรย์พริกไทย',
                        to: 11,
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'สารเสพติด',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.G.text,
                            code: RESULT.G143.code,
                            advise: RESULT.G143.advise,
                            color: LEVEL.G.color,
                        }
                    },
                ]
            },
            {
                question: 'ผู้ป่วยกลืน น้ำลาย น้ำ และอากหาร ลำบากหรือไม่่',
                from: 9,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'กลืนลำบาก',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.R.text,
                            code: RESULT.R149.code,
                            advise: RESULT.R149.advise,
                            color: LEVEL.R.color,
                        }
                    },
                    {
                        type: TYPE.QUESTION,
                        name: 'กลืนได้ปกติ',
                        to: 10
                    },
                ]
            },
            {
                question: 'มีอาการผิดปกติอื่นเช่น เจ็บคอ ปวดท้อง ปวดศรีษะ คัน วิงเวียน',
                from: 10,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'มี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.Y.text,
                            code: RESULT.Y144.code,
                            advise: RESULT.Y144.advise,
                            color: LEVEL.Y.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ไม่มี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.G.text,
                            code: RESULT.G145.code,
                            advise: RESULT.G145.advise,
                            color: LEVEL.G.color,
                        }
                    },
                ]
            },
            {
                question: 'มีอาการผิดปกติหรือไม่ เช่น ปวดท้อง ปวดศรีษะ คัน วิงเวียน',
                from: 11,
                choices: [
                    {
                        type: TYPE.RESULT,
                        name: 'มี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.G.text,
                            code: RESULT.G148.code,
                            advise: RESULT.G148.advise,
                            color: LEVEL.G.color,
                        }
                    },
                    {
                        type: TYPE.RESULT,
                        name: 'ไม่มี',
                        to: ResultPage,
                        payload: {
                            level: LEVEL.W.text,
                            code: RESULT.W141.code,
                            advise: RESULT.W141.advise,
                            color: LEVEL.W.color,
                        }
                    },
                ]
            },
        ]
    }
]
