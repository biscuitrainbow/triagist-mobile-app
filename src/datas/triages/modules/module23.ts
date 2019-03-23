import { level, questionType, choiceType, criteriaType } from "../meta";

const result = {
  red1: {
    code: "23 แดง 1",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่",
          descriptions: [
            "<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป"
          ]
        },
        {
          title: "2. นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง",
          descriptions: [
            " พร้อมบอกญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆก่อน กระผม/ดิฉัน จะบอกคุณว่าต้องทำอะไร"
          ]
        },
        {
          title: "สอนวิธีปั๊มหัวใจ",
          descriptions: [
            "ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย",
            "ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา",
            "ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเหนื่อยล้า สามารถเปลี่ยนคนได้)"
          ]
        }
      ],
      notes: [
        "1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย",
        "2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที",
        "3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย",
        "4. เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย "
      ]
    }
  },
  red2: {
    code: "23 แดง 2",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย ",
          descriptions: []
        },
        {
          title: "2. แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ",
          descriptions: [" หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "3. ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป",
          descriptions: []
        },
        {
          title: "4.อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "5. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: ["1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"]
    }
  },
  red3: {
    code: "23 แดง 3",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย ",
          descriptions: []
        },
        {
          title: "2. จัดท่าผู้ป่วยนอนราบศีรษะต่ำ",
          descriptions: ["ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "4. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: ["1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"]
    }
  },
  red4: {
    code: "23 แดง 4",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย ",
          descriptions: []
        },
        {
          title: "2. จัดท่านอนตะแคงซ้าย  อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "4. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: ["1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"]
    }
  },
  red5: {
    code: "23 แดง 5",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย ",
          descriptions: []
        },
        {
          title: "2. หากกดห้ามเลือดไม่หยุด ให้ทำการขันชะเนาะ ",
          descriptions: [
            "โดยใช้ผ้าที่หนาประมาณ 1 .5 นิ้ว รัดเหนือบาดแผลประมาณ 5-10 ซม. รัดจนกว่าเลือดจนจะหยุด หรือจนคลำชีพจรไม่ได้  พร้อมบันทึกเวลาที่ทำการขันชะเนาะไว้ด้วย"
          ]
        },
        {
          title: "3. ปลอบโยนให้ผู้ป่วยอยู่ในความสงบ ",
          descriptions: ["จัดท่านอนตะแคงซ้าย อยู่ในพื้นที่อากาศถ่ายเท"]
        },
        {
          title: "4. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "5. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: ["1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"]
    }
  },
  red6: {
    code: "23 แดง 6",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. เคลื่อนย้ายสิ่งของให้ห่างจากผู้ป่วยจนพ้นระยะที่อาจจะกระทบกระแทกได้",
          descriptions: []
        },
        {
          title: "2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวผู้ป่วย",
          descriptions: []
        },
        {
          title: "3.ไม่ราดน้ำรดตัวผู้ป่วย และไม่ผูกมัดผู้ป่วย",
          descriptions: []
        },
        {
          title: "4. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. หากหยุดชัก/ อาเจียน /มีอาการซึมให้จัดท่านอนตะแคงซ้าย"
      ]
    }
  },
  red7: {
    code: "23 แดง 7",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. ผู้พบเห็น หรือพลเมืองดี หากมีชูชีพ/ทุ่นลอยน้ำให้โยนให้ผู้ป่วยเกาะ ห้ามลงน้ำ",
          descriptions: []
        },
        {
          title: "2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "3. หากผู้ป่วยขึ้นมาจากน้ำได้  ให้เช็ดตัวให้แห้ง",
          descriptions: [
            "และให้ความอบอุ่นแก่ผู้ป่วย ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และ เจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: ["1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"]
    }
  },
  red9: {
    code: "23 แดง 9",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. ผู้พบเห็น หรือพลเมืองดี หากมีชูชีพ/ทุ่นลอยน้ำให้โยนให้ผู้ป่วยเกาะ ห้ามลงน้ำ",
          descriptions: []
        },
        {
          title: "2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "3. หากผู้ป่วยขึ้นมาจากน้ำได้  ให้เช็ดตัวให้แห้ง",
          descriptions: [
            "และให้ความอบอุ่นแก่ผู้ป่วย ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และ เจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: ["1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"]
    }
  },
  yellow1: {
    code: "23 เหลือง 1",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. ผู้พบเห็น หรือพลเมืองดี หากมีชูชีพ/ทุ่นลอยน้ำให้โยนให้ผู้ป่วยเกาะ ห้ามลงน้ำ",
          descriptions: []
        },
        {
          title: "2. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "3. หากผู้ป่วยขึ้นมาจากน้ำได้  ให้เช็ดตัวให้แห้ง",
          descriptions: [
            "และให้ความอบอุ่นแก่ผู้ป่วย ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และ เจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล",
        "2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"
      ]
    }
  },
  yellow2: {
    code: "23 เหลือง 2",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. จัดท่านอนศีรษะสูง",
          descriptions: ["หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "4. ให้ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง ",
          descriptions: [
            "และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล",
        "2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"
      ]
    }
  },
  yellow3: {
    code: "23 เหลือง 3",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. จัดท่านอนศีรษะสูง",
          descriptions: ["หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "4. ให้ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง ",
          descriptions: [
            "และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล",
        "2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"
      ]
    }
  },
  yellow4: {
    code: "23 เหลือง 4",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. อย่าเคลื่อนย้ายผู้ป่วย ",
          descriptions: ["หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง"]
        },
        {
          title: "3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "4. ให้ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง ",
          descriptions: [
            "และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล",
        "2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"
      ]
    }
  },
  yellow5: {
    code: "23 เหลือง 5",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. อย่าเคลื่อนย้ายผู้ป่วย ",
          descriptions: ["หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง"]
        },
        {
          title: "3. ให้ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง ",
          descriptions: [
            "และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล",
        "2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"
      ]
    }
  },
  yellow6: {
    code: "23 เหลือง 6",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. จัดท่าผู้ป่วยให้นอนอยู่ในท่าที่สบาย อากาศถ่ายเท ",
          descriptions: []
        },
        {
          title: "3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "4. ให้ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง ",
          descriptions: [
            "และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล",
        "2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"
      ]
    }
  },
  yellow7: {
    code: "23 เหลือง 7",
    level: level.yellow,
    advise: {
      contents: [],
      notes: []
    }
  },
  yellow9: {
    code: "23 เหลือง 9",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. จัดท่าผู้ป่วยให้นอนอยู่ในท่าที่สบาย อากาศถ่ายเท ",
          descriptions: []
        },
        {
          title: "3. อย่าให้ผู้ป่วยดื่ม/กิน สิ่งใด",
          descriptions: []
        },
        {
          title: "4. ให้ผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง ",
          descriptions: [
            "และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล",
        "2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ"
      ]
    }
  },
  green1: {
    code: "23 เขียว 1",
    level: level.green,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. ล้างแผลด้วยน้ำสะอาด หรือน้ำสบู่",
          descriptions: ["ปิดแผลด้วยผ้าสะอาด แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน"]
        }
      ],
      notes: []
    }
  },
  green3: {
    code: "23 เขียว 3",
    level: level.green,
    advise: {
      contents: [],
      notes: []
    }
  },
  green4: {
    code: "23 เขียว 4",
    level: level.green,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. อย่าเคลื่อนย้ายผู้ป่วย",
          descriptions: [
            "หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน"
          ]
        }
      ],
      notes: []
    }
  },
  green5: {
    code: "23 เขียว 5",
    level: level.green,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. สังเกตอาการผู้ป่วย",
          descriptions: [
            "หากมีอาการเปลี่ยนแปลง แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน"
          ]
        }
      ],
      notes: []
    }
  },
  white1: {
    code: "23 ขาว 1",
    level: level.white,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. ล้างแผลด้วยน้ำสะอาด หรือน้ำสบู่",
          descriptions: [
            "ปิดแผลด้วยผ้าสะอาด แผลฟกช้ำให้ประคบเย็นใน 24 ชั่วโมงแรก และประคบร้อน 24 ชั่วโมงหลัง หากแผลบวมแดง มีน้ำเหลือง หรือ อาการไม่ดีขึ้น แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน หรือในวันวันเวลาราชการ"
          ]
        }
      ],
      notes: []
    }
  },
  white4: {
    code: "23 ขาว 4",
    level: level.white,
    advise: {
      contents: [
        {
          title: "1. ให้เช็ดตัวให้แห้ง และให้ความอบอุ่นแก่ผู้ป่วย",
          descriptions: []
        },
        {
          title: "2. อย่าเคลื่อนย้ายผู้ป่วย",
          descriptions: [
            "หากมีอุปกรณ์ดามให้ดามส่วนที่ผิดรูปให้อยู่นิ่ง แนะนำให้ญาติพาผู้ป่วยไปรับการรักษาที่โรงพยาบาลใกล้บ้าน"
          ]
        }
      ],
      notes: []
    }
  }
};

const questions = [
  {
    name: "ผู้ป่วยรู้สึกตัวหรือไม่",
    type: questionType.single,
    from: 0,
    choices: [
      {
        type: choiceType.question,
        name: "ไม่รู้สึกตัว",
        to: 1
      },
      {
        type: choiceType.result,
        name: "กำลังชัก",
        result: result.red6
      },
      {
        type: choiceType.question,
        name: "รู้สึกตัว",
        to: 2
      },
      {
        type: choiceType.result,
        name: "ผู้แจ้งตรวจสอบยืนยันรายละเอียดของผู้ป่วยไม่ได้",
        result: result.yellow9
      }
    ]
  },
  {
    name: "อย่าขยับตัวผู้ป่วย (โดยเฉพาะส่วนศรีษะและคอ) แล้วเรียกผู้ป่วยด้วยเสียงดังๆ ผู้ป่วยรู้สึกตัวขึ้นหรือไม่",
    type: questionType.single,
    from: 1,
    choices: [
      {
        type: choiceType.result,
        name: "ยังคงไม่รู้สึกตัว",
        result: result.red1
      },
      {
        type: choiceType.question,
        name: "พอรู้สึกตัว",
        to: 2
      }
    ]
  },
  {
    name: "ลักษณะอาการหายใจเป็นอย่างไร",
    type: questionType.single,
    from: 2,
    choices: [
      {
        type: choiceType.question,
        name: "พูดได้ / หายใจปกติ",
        to: 3
      },
      {
        type: choiceType.result,
        name: "พูดได้แค่สั้นๆ / พูดติดขัด",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "หายใจเร็ว ซี่โครงบาน จมูกบานไหปลาร้ายุบ",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "หายใจมีเสียงดัง",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "ผู้ป่วยต้องลุกขึ้นนั่งหรือยืนเพื่อให้หายใจได้ดีขึ้น",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "ตัวซีดและเหงือท่วมตัว",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย",
        result: result.red2
      }
    ]
  },
  {
    name: "ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่",
    type: questionType.checkbox,
    from: 3,
    to: 4,
    criteria: {
      type: criteriaType.result,
      minimum: 2,
      result: result.red3
    },

    choices: [
      {
        name: "เหงื่อท่วมตัว",
        checked: false
      },
      {
        name: "เป็นลมหรือเกือบเป็นลมเมื่อลุกนั่งหรือยิืน",
        checked: false
      },
      {
        name: "ซีดและผิวซีดเย็ด",
        checked: false
      }
    ]
  },
  {
    name: "ผู้ป่วยชักหลังจากจมน้ำหรือไม่",
    type: questionType.single,
    from: 4,
    choices: [
      {
        type: choiceType.result,
        name: "ชัก",
        result: result.red6
      },
      {
        type: choiceType.question,
        name: "ไม่ชัก",
        to: 5
      }
    ]
  },
  {
    name: "มีตำแหน่งบาดแผลส่วนใดของร่างกาย",
    type: questionType.single,
    from: 5,
    choices: [
      {
        type: choiceType.result,
        name: "ศรีษะ / คอ / ทรวงอก / ช่องท้อง",
        result: result.red5
      },
      {
        type: choiceType.question,
        name: "ที่อื่นๆ",
        to: 10
      },
      {
        type: choiceType.question,
        name: "ไม่มีบาดแผล",
        to: 11
      }
    ]
  },
  {
    name: "ขณะนี้ผู้ป่วยยังมีเลือดออกอยู่หรือไม่",
    type: questionType.single,
    from: 6,
    choices: [
      {
        type: choiceType.question,
        name: "เลือดยังไหลอยู่",
        to: 7
      },
      {
        type: choiceType.question,
        name: "ไม่มีเลือดออก/เลือดหยุดแล้ว",
        to: 8
      }
    ]
  },
  {
    name: "ให้ใช้ผ้าสะอาดหนาๆ กดบนแผนแน่นๆ ค้างไว้ แล้วมีเลือดชุ่มขึ้นมาหรือไม่",
    type: questionType.single,
    from: 7,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.red5
      },
      {
        type: choiceType.question,
        name: "ไม่ใช่",
        to: 8
      }
    ]
  },
  {
    name: "เป็นอุบัติเหตุจากการดำน้ำหรือไม่",
    type: questionType.single,
    from: 8,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.yellow7
      },
      {
        type: choiceType.question,
        name: "ไม่ใช่",
        to: 9
      }
    ]
  },
  {
    name: "ผู้ป่วยไอ/สำลักน้ำหรือไม่",
    type: questionType.single,
    from: 9,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.yellow3
      },
      {
        type: choiceType.result,
        name: "ไม่ใช่",
        result: result.green3
      }
    ]
  },
  {
    name: "ปวดคอหรือไม่",
    type: questionType.single,
    from: 10,
    choices: [
      {
        type: choiceType.result,
        name: "ปวด",
        result: result.yellow5
      },
      {
        type: choiceType.result,
        name: "ไม่ปวด",
        result: result.green5
      }
    ]
  },
  {
    name: "มีกระดูกหักหรือไม่",
    type: questionType.single,
    from: 11,
    choices: [
      {
        type: choiceType.question,
        name: "มี",
        to: 12
      },
      {
        type: choiceType.result,
        name: "ไม่มี",
        result: result.white1
      }
    ]
  },
  {
    name: "กระดูกหักตำแหน่งใด",
    type: questionType.single,
    from: 12,
    choices: [
      {
        type: choiceType.result,
        name: "ต้นคอ / หลัง / กระดูกเชิงกราน / ต้นขา / ต้นแขน",
        result: result.red9
      },
      {
        type: choiceType.result,
        name: "อื่นๆ ที่เหลือ",
        result: result.green4
      }
    ]
  }
];

const module23 = {
  name: "ตกน้ำ จมน้ำ",
  module: 23,
  description: "หน้ำคว่าจมน้ำ , บาดเจ็บเหตุดำน้ำม, บาดเจ็บทางน้ำ",
  image: "assets/imgs/man-drowing.png",
  questions: questions
};

export default module23;
