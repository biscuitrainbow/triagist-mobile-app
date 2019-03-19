import { level, questionType, choiceType } from "../meta";

const result = {
  red1: {
    code: "2 แดง 1",
    level: level.red,
    advise: {
      contents: [
        {
          title: "มีใครที่อยู่บริเวณนั้นรู้เรื่องการกู้ชีพบ้างหรือไม่",
          descriptions: [
            "<b>ถ้ามี </b>ให้ตะโกนขอความช่วยเหลือปั๊มหัวใจผู้ป่วย <br> <b>ถ้าไม่มี</b> ให้ปฏิบัติตามหัวข้อถัดไป"
          ]
        },
        {
          title: "นำโทรศัพท์ไปใกล้ๆ ผู้ป่วยพร้อมเปิดลำโพง",
          descriptions: [
            " พร้อมบอกญาติว่า (ตอนนี้กำลังส่งรถพยาบาลที่ใกล้ที่สุดไป แต่ตอนนี้ผู้ป่วยมีภาวะหัวใจหยุดเต้น  ซึ่งหัวใจสามารถขาดเลือดได้ 4 นาทีเท่านั้น ญาติคือบุคคลคนเดียวที่จะสามารถช่วยผู้ป่วยได้ ) ให้ญาติตั้งสติ และใจเย็นๆก่อน กระผม/ดิฉัน จะบอกคุณว่าต้องทำอะไร"
          ]
        },
        {
          title: "สอนวิธีปั๊มหัวใจ",
          descriptions: [
            "ให้นำผู้ป่วยนอนราบบนพื้นแข็ง คุกเข่าข้างๆลำตัวผู้ป่วย",
            "ใช้มือข้างใดข้างหนึ่ง วางบนครึ่งล่างของกระดูกหน้าอก แล้วใช้มืออีกข้างหนึ่งวางทับพร้อมล็อคไว้ให้แน่น เหยียดแขนตรง ทำมุม 90 องศา",
            "ให้ทำการปั๊มหัวใจผู้ป่วย ลึก 2-2.4 นิ้ว(5-6 ซม.) อัตราเร็ว 100-120/นาที โดยไม่ยกมือออกจากหน้าอกผู้ป่วย หรือนับเป็นจังหวะ หนึ่ง และ สอง และ สาม.... ไปเรื่อยๆจนกว่าหน่วยช่วยเหลือจะมาถึง (หากมีผู้ช่วยเหลือหลายคนให้เปลี่ยนคนปั๊มหัวใจทุก 2 นาที หรือหากมีอาการเมื่อยล้า สามารถเปลี่ยนคนได้)"
          ]
        }
      ],
      notes: [
        "1. หากผู้ป่วยเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย",
        "2. เฝ้าสังเกตอาการผู้ป่วยและประเมินซ้ำทุก 2 นาที หากผู้ป่วยไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที",
        "3. กดเหล็กในออก(หากทำได้) ,ประคบน้ำแข็งบริเวณที่ถูกต่อย "
      ]
    }
  },
  red2: {
    code: "2 แดง 2",
    level: level.red,
    advise: {
      contents: [
        {
          title: "แนะนำให้ผู้ป่วยนอนราบศีรษะสูง ",
          descriptions: [
            "หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท"
          ]
        },
        {
          title: "ให้ผู้ป่วยควบคุมการหายใจเข้า-ออก ไม่เร็วจนเกินไป",
          descriptions: []
        },
        {
          title: "ให้ญาติผู้พบเห็นเหตุการณ์เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด ",
          descriptions: [
            "จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. กดเหล็กในออก(หากทำได้) ,ประคบน้ำแข็งบริเวณที่ถูกต่อย"
      ]
    }
  },
  red3: {
    code: "2 แดง 3",
    level: level.red,
    advise: {
      contents: [
        {
          title: "จัดท่าผู้ป่วยนอนราบศรีษะต่ำ",
          descriptions: ["ยกขาสูง อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด",
          descriptions: [
            "ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. กดเหล็กในออก(หากทำได้) ,ประคบน้ำแข็งบริเวณที่ถูกต่อย"
      ]
    }
  },
  red4: {
    code: "2 แดง 4",
    level: level.red
  },
  yellow1: {
    code: "2 เหลือง 1",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "จัดท่านอนศรีษะสูง",
          descriptions: [
            "หรือนั่งเพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท"
          ]
        },
        {
          title: "ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด",
          descriptions: [
            "ให้ญาติผู้พบเห็นเหตุการณ์ เฝ้าสังเกตอาการผู้ป่วยอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวผู้ป่วยและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับผู้ป่วยด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล"
          ]
        }
      ],
      notes: [
        "1. ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล ระหว่างรอรถพยาบาล",
        "2. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "3. กดเหล็กในออก(หากทำได้) ,ประคบน้ำแข็งบริเวณที่ถูกต่อย"
      ]
    }
  },
  yellow4: {
    code: "2 เหลือง 4",
    level: level.yellow,
    advise: {
      contents: [],
      notes: []
    }
  },
  yellow8: {
    code: "2 เหลือง 8",
    level: level.yellow,
    advise: {
      contents: [],
      notes: []
    }
  },
  yellow9: {
    code: "2 เหลือง 9",
    level: level.yellow,
    advise: {
      contents: [],
      notes: []
    }
  },
  white1: {
    code: "2 ขาว 1",
    level: level.white,
    advise: {
      contents: [
        {
          title: "แนะนำให้ผู้ป่วยนอนพัก ",
          descriptions: [
            "หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ"
          ]
        }
      ],
      notes: []
    }
  },
  white2: {
    code: "2 ขาว 2",
    level: level.white,
    advise: {
      contents: [
        {
          title: "แนะนำให้ผู้ป่วยนอนพัก ",
          descriptions: [
            "หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ"
          ]
        }
      ],
      notes: []
    }
  },
  white3: {
    code: "2 ขาว 3",
    level: level.white,
    advise: {
      contents: [
        {
          title: "แนะนำให้ผู้ป่วยนอนพัก",
          descriptions: ["หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ"]
        }
      ],
      notes: []
    }
  },
  white4: {
    code: "2 ขาว 4",
    level: level.white,
    advise: {
      contents: [
        {
          title: "แนะนำให้ผู้ป่วยนอนพัก ",
          descriptions: [
            "หากมีอาการแน่นหน้าอก  หายใจติดขัด เหงื่อออกตัวเย็น ซึมลง ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ"
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
    name: "ตบไหล่ และปลุกเรียก ผู้ป่วยรู้สึกตัวขึ้นหรือไม่",
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
        type: choiceType.result,
        name: "พูดได้แค่ประโยคสั้นๆ",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "ซี่โครงบาน จมูกบาน ไหปลาร้ายุบ",
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
        type: choiceType.question,
        name: "หายใจเร็ว",
        to: 3
      },
      {
        type: choiceType.result,
        name: "หายใจขัด โดยไม่มีอาการข้างต้นร่วมด้วย",
        result: result.red2
      },
      {
        type: choiceType.question,
        name: "พูดได้ / หายใจปกติ",
        to: 5
      }
    ]
  },
  {
    name: "ผู้ป่วยมีโรคหอบหืดหรือไม่",
    type: questionType.single,
    from: 3,
    choices: [
      {
        type: choiceType.result,
        name: "มี",
        result: result.red2
      },
      {
        type: choiceType.question,
        name: "ไม่มี",
        to: 4
      }
    ]
  },
  {
    name: "ผู้ป่วยอายุเท่าไหร่",
    type: questionType.single,
    from: 4,
    choices: [
      {
        type: choiceType.result,
        name: "มากกว่า 20 ปี",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "น้อยกว่า 20 ปี",
        result: result.yellow8
      }
    ]
  },
  {
    name: "ผู้ป่วยมีอาการต่อไปนี้บ้างหรือไม่",
    type: questionType.checkbox,
    from: 5,
    to: 6,
    criteria: {
      type: choiceType.result,
      minimum: 2,
      result: result.red3
    },
    choices: [
      {
        name: "เหงื่อท่วมตัว",
        checked: false
      },
      {
        name: "ซีดและผิวซีดเย็น",
        checked: false
      },
      {
        name: "เป็นลมหรือเกือบเป็นลม",
        checked: false
      },
      {
        name: "อาการซึมลง",
        checked: false
      }
    ]
  },
  {
    name: "ผุ้ป่วยเคยมีประวัติแพ้รุนแรงต่อสิ่งใดหรือไม่",
    type: questionType.single,
    from: 6,
    choices: [
      {
        type: choiceType.question,
        name: "เคย",
        to: 7
      },
      {
        type: choiceType.question,
        name: "ไม่เคย",
        to: 8
      }
    ]
  },
  {
    name: "เคยมีอาการเกิดขึ้นหลังจากได้รับสิ่งที่แพ้ภายใน 30 นาทีหรือไม่",
    type: questionType.single,
    from: 7,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.yellow1
      },
      {
        type: choiceType.question,
        name: "ไม่ใช่",
        to: 8
      }
    ]
  },
  {
    name: "ผุ้ป่วยเคยแพ้ยา / ช่วงนี้ผู้ป่วยกิน / ได้รับยาแล้วมีอาการแพ้หรือไม่",
    type: questionType.single,
    from: 8,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.yellow4
      },
      {
        type: choiceType.question,
        name: "ไม่ใช่",
        to: 9
      }
    ]
  },
  {
    name: "ผู้ป่วยมีอาการผิดปกติอย่างไรบ้าง",
    type: questionType.single,
    from: 9,
    choices: [
      {
        type: choiceType.result,
        name: "เป็นผื่นคัน / ลมพิษ",
        result: result.white3
      },
      {
        type: choiceType.result,
        name: "อาการอื่นๆ",
        result: result.white2
      },
      {
        type: choiceType.question,
        name: "ไม่มีอาการผิดปกติ",
        to: 11
      }
    ]
  },
  {
    name: "ผู้ป่วยเคยมีประวัติการแพ้หรือไม่",
    type: questionType.single,
    from: 10,
    choices: [
      {
        type: choiceType.result,
        name: "เคย",
        result: result.white4
      },
      {
        type: choiceType.result,
        name: "ไม่เคย",
        result: result.white1
      }
    ]
  }
];

const module2 = {
  module: 2,
  name: "แพ้ยา",
  description: "แพ้อาหาร , สัตว์ต่อย , ภูมิแพ้ ",
  image: "assets/imgs/pill.png",
  questions: questions
};

export default module2;
