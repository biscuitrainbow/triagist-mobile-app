import { level, questionType, choiceType, criteriaType } from "../meta";
import { result as module8Result } from "./module8";

const result = {
  red1: {
    code: "20 แดง 1",
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
        "1. หากเด็กเริ่มรู้สึกตัว / หายใจเองได้ หรือ  อาเจียน ให้จัดท่านอนตะแคงซ้าย",
        "2. เฝ้าสังเกตอาการเด็กและประเมินซ้ำทุก 2 นาที หากเด็กไม่รู้สึกตัวและไม่หายใจให้ทำการปั๊มหัวใจทันที"
      ]
    }
  },
  red2: {
    code: "20 แดง 2",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. แนะนำให้เด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก ",
          descriptions: ["เพื่อให้หายใจได้สะดวก อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย"
      ]
    }
  },
  red3: {
    code: "20 แดง 3",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก",
          descriptions: ["อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย"
      ]
    }
  },
  red4: {
    code: "20 แดง 4",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก",
          descriptions: ["อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย"
      ]
    }
  },
  red5: {
    code: "20 แดง 5",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. ให้ใช้ผ้าซุปน้ำอุณหภูมิห้อง เปียกหมาดๆ เช็ดตัวเด็ก 15 นาที",
          descriptions: []
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย"
      ]
    }
  },
  red6: {
    code: "20 แดง 6",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. จัดพื้นที่ให้โล่ง ไม่มีสิ่งกีดขวางขณะที่เด็กชัก",
          descriptions: []
        },
        {
          title: "2. ไม่งัดหรือใส่ของแข็งเข้าไปในปากเด็ก",
          descriptions: []
        },
        {
          title: "3. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก",
          descriptions: ["อยู่ในสถานที่อากาศถ่ายเท"]
        },
        {
          title: "4. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย"
      ]
    }
  },
  red8: {
    code: "20 แดง 8",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "2. ให้นำภาชนะของสารที่เด็กรับประทานนำไป โรงพยาบาลด้วย",
          descriptions: []
        },
        {
          title: "3. ห้ามล้วงคอเด็ก หรือทำให้เด็กอาเจียนเด็ดขาด",
          descriptions: []
        },
        {
          title: "4. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียนให้พลิกด้านตะแคงหน้าเด็กไปด้านใดด้านหนึ่ง"
      ]
    }
  },
  red7: {
    code: "20 แดง 7",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "2. ให้นำภาชนะของสารที่เด็กรับประทานนำไป โรงพยาบาลด้วย",
          descriptions: []
        },
        {
          title: "3. ห้ามล้วงคอเด็ก หรือทำให้เด็กอาเจียนเด็ดขาด",
          descriptions: []
        },
        {
          title: "4. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียนให้พลิกด้านตะแคงหน้าเด็กไปด้านใดด้านหนึ่ง"
      ]
    }
  },
  red9: {
    code: "20 แดง 9",
    level: level.red,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียนให้พลิกด้านตะแคงหน้าเด็กไปด้านใดด้านหนึ่ง"
      ]
    }
  },
  yellow1: {
    code: "20 เหลือง 1",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียนให้พลิกด้านตะแคงหน้าเด็กไปด้านใดด้านหนึ่ง"
      ]
    }
  },
  yellow2: {
    code: "20 เหลือง 2",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียนให้พลิกด้านตะแคงหน้าเด็กไปด้านใดด้านหนึ่ง"
      ]
    }
  },
  yellow5: {
    code: "20 เหลือง 5",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียนให้พลิกด้านตะแคงหน้าเด็กไปด้านใดด้านหนึ่ง"
      ]
    }
  },
  yellow6: {
    code: "20 เหลือง 6",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. ให้ใช้ผ้าซุปน้ำอุณหภูมิห้อง เปียกหมาดๆ เช็ดตัวเด็ก 15 นาที",
          descriptions: []
        },
        {
          title: "2. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากผู้เด็กอาเจียน ให้จัดท่าผู้ป่วยนอนตะแคงซ้าย"
      ]
    }
  },
  yellow7: {
    code: "20 เหลือง 7",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "2. ให้นำภาชนะของสารที่เด็กรับประทานนำไป โรงพยาบาลด้วย",
          descriptions: []
        },
        {
          title: "3. ห้ามล้วงคอเด็ก หรือทำให้เด็กอาเจียนเด็ดขาด",
          descriptions: []
        },
        {
          title: "4. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียนให้พลิกด้านตะแคงหน้าเด็กไปด้านใดด้านหนึ่ง"
      ]
    }
  },
  yellow8: {
    code: "20 เหลือง 8",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. จัดท่าเด็กนอนราบใช้ผ้าหนุนบริเวณไหล่เด็ก อยู่ในสถานที่อากาศถ่ายเท",
          descriptions: []
        },
        {
          title: "2. ให้นำภาชนะของสารที่เด็กรับประทานนำไป โรงพยาบาลด้วย",
          descriptions: []
        },
        {
          title: "3. ห้ามล้วงคอเด็ก หรือทำให้เด็กอาเจียนเด็ดขาด",
          descriptions: []
        },
        {
          title: "4. ให้ญาติผู้พบเห็นเหตุการณ์",
          descriptions: [
            "เฝ้าสังเกตอาการเด็กอย่างใกล้ชิด จนกว่ารถพยาบาลจะมาถึง และรวบรวมยาประจำตัวเด็กและผู้พบเห็นเหตุการณ์ ขึ้นรถพยาบาลไปพร้อมกับเด็กด้วย เพื่อให้ประวัติแก่ แพทย์ และเจ้าหน้าที่พยาบาล "
          ]
        }
      ],
      notes: [
        "1. หากไม่รู้สึกตัวและไม่หายใจ แนะนำให้ปั๊มหัวใจ",
        "2. อย่าให้เด็กดื่ม/กิน สิ่งใด และไม่ราดน้ำรดตัวเด็ก",
        "3. หากเด็กอาเจียนให้พลิกด้านตะแคงหน้าเด็กไปด้านใดด้านหนึ่ง"
      ]
    }
  },
  yellow9: {
    code: "20 เหลือง 9",
    level: level.yellow,
    advise: {
      contents: [
        {
          title: "1. หากมีอาการผิดปกติ แนะนำให้โทร 1669 หรือนำส่งโรงพยาบาลที่ใกล้ที่สุด",
          descriptions: []
        }
      ],
      notes: []
    }
  },
  green1: {
    code: "20 เขียว 1",
    level: level.green,
    advise: {
      contents: [
        {
          title: "1. เกลี่ยกล่อมให้เด็กสงบ ",
          descriptions: []
        },
        {
          title: "2. หากเด็กมีไข้ ให้เช็ดตัวด้วยน้ำอุณหภูมิห้อง ",
          descriptions: ["เปียกหมาดๆ เช็คย้อนรูขุมขน ประมาน 15 นาที หรือรับประทานยาลดไข้ ซ้ำได้ทุก 4-6 ชั่วโมง"]
        }
      ],
      notes: [
        "ผู้ป่วยมีอาการเปลี่ยนแปลงให้โทร 1669 อีกครั้ง เพื่อรับวิธีการปฐมพยาบาล  หากอาการยังไม่ดีขึ้นให้ญาตินำผู้ป่วยส่งโรงพยาบาลใกล้บ้าน"
      ]
    }
  },
  green2: {
    code: "20 เขียว 2",
    level: level.green,
    advise: {
      contents: [],
      notes: []
    }
  },
  green3: {
    code: "20 เขียว 3",
    level: level.green,
    advise: {
      contents: [],
      notes: []
    }
  },
  white1: {
    code: "20 ขาว 1",
    level: level.white,
    advise: {
      contents: [
        {
          title: "แนะนำให้ญาติเกลี่ยกล่อมเด็กนอนพัก",
          descriptions: [
            "และสังเกตอาการของเด็กอย่างใกล้ชิด หากมีอาการซึมลง ไข้สูง หายใจติดขัด เหงื่อออกตัวเย็น  ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ "
          ]
        }
      ],
      notes: []
    }
  },
  white2: {
    code: "20 ขาว 2",
    level: level.white,
    advise: {
      contents: [
        {
          title: "แนะนำให้ญาติเกลี่ยกล่อมเด็กนอนพัก",
          descriptions: [
            "และสังเกตอาการของเด็กอย่างใกล้ชิด หากมีอาการซึมลง ไข้สูง หายใจติดขัด เหงื่อออกตัวเย็น  ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ "
          ]
        }
      ],
      notes: []
    }
  },
  white3: {
    code: "20 ขาว 3",
    level: level.white,
    advise: {
      contents: [
        {
          title: "แนะนำให้ญาติเกลี่ยกล่อมเด็กนอนพัก",
          descriptions: [
            "และสังเกตอาการของเด็กอย่างใกล้ชิด หากมีอาการซึมลง ไข้สูง หายใจติดขัด เหงื่อออกตัวเย็น  ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ "
          ]
        }
      ],
      notes: []
    }
  },
  white4: {
    code: "20 ขาว 4",
    level: level.white,
    advise: {
      contents: [
        {
          title: "แนะนำให้ญาติเกลี่ยกล่อมเด็กนอนพัก",
          descriptions: [
            "และสังเกตอาการของเด็กอย่างใกล้ชิด หากมีอาการซึมลง ไข้สูง หายใจติดขัด เหงื่อออกตัวเย็น  ให้รีบมาพบแพทย์ทันที  หากไม่มีอาการดังกล่าว ให้มาพบแพทย์ในวันเวลาราชการ "
          ]
        }
      ],
      notes: []
    }
  },
  white5: {
    code: "20 ขาว 5",
    level: level.white,
    advise: {
      contents: [],
      notes: []
    }
  },
  white6: {
    code: "20 ขาว 6",
    level: level.white,
    advise: {
      contents: [],
      notes: []
    }
  },
  white7: {
    code: "20 ขาว 7",
    level: level.white,
    advise: {
      contents: [],
      notes: []
    }
  }
};

const questions = [
  {
    name: "เด็กรู้สึกตัวหรือไม่",
    type: questionType.single,
    from: 0,
    choices: [
      {
        type: choiceType.question,
        name: "ไม่รู้สึกตัว",
        to: 24
      },
      {
        type: choiceType.question,
        name: "รู้สึกตัว",
        to: 2
      },
      {
        type: choiceType.result,
        name: "ตรวจสอบยืนยันรายละเอียดของเด็กไม่ได้",
        result: result.yellow9
      }
    ]
  },
  {
    name: "ตบไหล่ และปลุกเรียก เด็กรู้สึกตัวขึ้นหรือไม่",
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
    name: "เด็กพูดหรือมีเสียงร้องออกมาหรือไม่",
    type: questionType.single,
    from: 2,
    choices: [
      {
        type: choiceType.question,
        name: "ไม่มีเสียงออกมา",
        to: 6
      },
      {
        type: choiceType.question,
        name: "มีเสียงออกมา",
        to: 3
      }
    ]
  },
  {
    name: "ลักษณะอาการหายใจเป็นอย่างไร",
    type: questionType.single,
    from: 3,
    choices: [
      {
        type: choiceType.result,
        name: "หายใจเร็วดูเหนื่อย / ต้องผงกศรีษะช่วยให้หายใจได้",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "พูดได้แค่ประโยคสั้นๆ/พูดติดขัด (เด็กอายุมากกว่า 6 ปี)",
        result: result.red2
      },
      {
        type: choiceType.question,
        name: "พูดได้ / หายใจปกติ",
        to: 4
      },
      {
        type: choiceType.result,
        name: "หายใจแล้วหน้าอกบุ๋ม",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "หายใจมีเสียงดัง",
        result: result.red2
      },
      {
        type: choiceType.result,
        name: "กระสับกระส่าย ต้องผุดลุกผุดนั่ง / น้องนั่งโน้มตัวไปข้างหน้า ใช้มือยันเพื่อช่วยให้หายใจได้",
        result: result.red2
      }
    ]
  },
  {
    name: "เด็กมีอาการต่อไปนี้บ้างหรือไม่",
    type: questionType.checkbox,
    from: 4,
    to: 5,
    criteria: {
      type: criteriaType.result,
      minimum: 1,
      result: result.red3
    },
    choices: [
      {
        name: "ริมผีปากเขียวคล้ำ",
        checked: false
      },
      {
        name: "ตัวลายจ้ำๆ/ผิวลายเป็นดวงๆ",
        checked: false
      },
      {
        name: "ตัวเย็นซีด",
        checked: false
      },
      {
        name: "เป็นลม/เกือบเป็นลมเมื่อนั่งหรือยืน",
        checked: false
      },
      {
        name: "ตัวอ่อนปวกเปียก",
        checked: false
      },
      {
        name: "กระหม่อมบุ๋ม / ตาโหล / ปากแห้ง / ปัสสาวะน้อย",
        checked: false
      }
    ]
  },
  {
    name: "เด็กมีอาการผิดปกต่อไปนี้บ้างหรือไม่",
    type: questionType.checkbox,
    from: 5,
    to: 8,
    criteria: {
      type: criteriaType.result,
      minimum: 2,
      result: result.red4
    },
    choices: [
      {
        name: "เซื่องซึม / เงื่องหงอย",
        checked: false
      },
      {
        name: "เงียบผิดปกติ",
        checked: false
      },
      {
        name: "มีน้ำลายยิดร่วมกับอาการกลืนลำบาก",
        checked: false
      }
    ]
  },
  {
    name: "ผู้ป่วยตัวหรือปากเขียวคล้ำหรือไม่",
    type: questionType.single,
    from: 6,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: module8Result.red3
      },
      {
        type: choiceType.result,
        name: "ไม่ใช่",
        result: module8Result.red2
      }
    ]
  },
  {
    name: "อาการบาดเจ็บมีสาเหตุจากการบาดเจ็บหรือไม่",
    type: questionType.single,
    from: 7,
    choices: [
      {
        type: choiceType.module,
        name: "มี / สงสัยอาจมี / ไม่แน่ใจ",
        module: 21
      },
      {
        type: choiceType.question,
        name: "ไม่มีสาเหตุจากการบาดเจ็บ",
        to: 1
      }
    ]
  },
  {
    name: "เด็กมีไข้หรือไม่",
    type: questionType.single,
    from: 8,
    choices: [
      {
        type: choiceType.question,
        name: "มี",
        to: 9
      },
      {
        type: choiceType.question,
        name: "ไม่มี",
        to: 14
      }
    ]
  },
  {
    name: "มีเลือดออกโดยไม่ได้รับบาดเจ็บ เช่น มีจุดเลือดออก เลือดกำเดา อาเจียนเป็นเลือด ถ่ายเป็นเลือด",
    type: questionType.single,
    from: 9,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.yellow5
      },
      {
        type: choiceType.question,
        name: "ไม่ใช่",
        to: 10
      }
    ]
  },
  {
    name: "มีอาการมาแล้วกี่วัน",
    type: questionType.single,
    from: 10,
    choices: [
      {
        type: choiceType.result,
        name: "4 - 7 วัน",
        result: result.green2
      },
      {
        type: choiceType.question,
        name: "น้อยกว่า 4 วัน หรือ มากกว่า 7 วัน",
        to: 13
      }
    ]
  },
  {
    name: "เด็กกรีดร้องกวนผิดปกติหรือไม่",
    type: questionType.single,
    from: 11,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.green1
      },
      {
        type: choiceType.question,
        name: "ไม่ใช่",
        to: 12
      }
    ]
  },
  {
    name: "พ่อแม่หรือคนเลี้ยงสามารถกล่อมแล้วหยุดร้องได้หรือไม่",
    type: questionType.single,
    from: 12,
    choices: [
      {
        type: choiceType.result,
        name: "กล่อมให้หยุดร้องไม่ได้",
        result: result.green1
      },
      {
        type: choiceType.result,
        name: "กล่อมแล้วเงียบได้",
        result: result.white5
      }
    ]
  },
  {
    name: "เด็กอายุเท่าไหร่",
    type: questionType.single,
    from: 13,
    choices: [
      {
        type: choiceType.result,
        name: "อายุน้อยกว่า 3 เดือน",
        result: result.white6
      },
      {
        type: choiceType.question,
        name: "อายุมากกว่า 3 เดือน",
        to: 23
      }
    ]
  },
  {
    name: "เด็กกินสารพิษ / ยาเกินขนาด/ ยาของคนอื่นหรือเปล่า",
    type: questionType.single,
    from: 14,
    choices: [
      {
        type: choiceType.question,
        name: "กิน",
        to: 15
      },
      {
        type: choiceType.question,
        name: "ไม่กิน",
        to: 20
      }
    ]
  },
  {
    name: "กินยา / สารพิษมานานเท่าไหร่",
    type: questionType.single,
    from: 15,
    choices: [
      {
        type: choiceType.question,
        name: "น้อยกว่า 30 นาที",
        to: 16
      },
      {
        type: choiceType.result,
        name: "มากกว่า 30 นาที",
        result: result.yellow7
      }
    ]
  },
  {
    name: "มีคนเห็นและยินยันได้ชัดเจนว่าเด็กกินยา / สารพิษหรือไม่",
    type: questionType.single,
    from: 16,
    choices: [
      {
        type: choiceType.question,
        name: "มีคนเห็น",
        to: 17
      },
      {
        type: choiceType.question,
        name: "ไม่มีคนเห็น / ไม่แน่ใจ",
        to: 19
      }
    ]
  },
  {
    name: "สิ่งที่กินเป็นอะไร",
    type: questionType.single,
    from: 17,
    choices: [
      {
        type: choiceType.result,
        name: "ยา",
        result: result.red8
      },
      {
        type: choiceType.question,
        name: "สารกัดกร่อน",
        to: 18
      },
      {
        type: choiceType.result,
        name: "น้ำมันที่ไม่ใช้อาหาร เช่น น้ำมันก๊าด น้ำมันสน",
        result: result.red8
      }
    ]
  },
  {
    name: "มีอาการกลืนลำบากหรือเปล่า",
    type: questionType.single,
    from: 18,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.red7
      },
      {
        type: choiceType.result,
        name: "ไม่ใช่",
        result: result.yellow7
      }
    ]
  },
  {
    name: "สิ่งที่คาดว่ากินเข้าไปเป็นอะไร",
    type: questionType.single,
    from: 19,
    choices: [
      {
        type: choiceType.result,
        name: "ยา",
        result: result.yellow7
      },
      {
        type: choiceType.question,
        name: "สารกัดกร่อน",
        to: 18
      },
      {
        type: choiceType.result,
        name: "น้ำมันที่ไม่ใช้อาหาร เช่น น้ำมันก๊าด น้ำมันสน",
        result: result.yellow7
      }
    ]
  },
  {
    name: "เด็กมีอาการชักหรือไม่",
    type: questionType.single,
    from: 20,
    choices: [
      {
        type: choiceType.result,
        name: "กำลังชัก",
        result: result.red6
      },
      {
        type: choiceType.question,
        name: "ใช่หยุดชักแล้ว",
        to: 21
      },
      {
        type: choiceType.question,
        name: "ไม่ใช่",
        to: 22
      }
    ]
  },
  {
    name: "ชักมาแล้วกี่ครั้ง",
    type: questionType.single,
    from: 21,
    choices: [
      {
        type: choiceType.result,
        name: "หลายครั้ง (มากกว่า 3 ครั้งต่อชั่วโมง)",
        result: result.red6
      },
      {
        type: choiceType.result,
        name: "น้อยกว่า 3 ครั้ง ต่อชั่วโมง",
        result: result.yellow6
      }
    ]
  },
  {
    name: "เด็กมีอาการอื่นอย่างไรบ้าง",
    type: questionType.single,
    from: 22,
    choices: [
      {
        type: choiceType.result,
        name: "มีผื่นตามตัว",
        result: result.white1
      },
      {
        type: choiceType.result,
        name: "ปวดหู / ปวดฟัน",
        result: result.white2
      },
      {
        type: choiceType.result,
        name: "อาการไม่จำเพาะอื่นๆ",
        result: result.white4
      },
      {
        type: choiceType.result,
        name: "เด็กมีความผิดปกติแต่กำเนิด/พิการ และต้องการความช่วยเหลือ",
        result: result.green3
      }
    ]
  },
  {
    name: "อาเจียนหรือถ่ายเหลวมากกว่า 10 ครั้งใน 1 วันหรือไม่",
    type: questionType.single,
    from: 23,
    choices: [
      {
        type: choiceType.result,
        name: "ใช่",
        result: result.yellow1
      },
      {
        type: choiceType.question,
        name: "ไม่ใช่",
        to: 11
      }
    ]
  },
  {
    name: "อาการหมดสติมีสาเหตุจากการบาดเจ็บหรือไม่",
    type: questionType.single,
    from: 24,
    choices: [
      {
        type: choiceType.module,
        name: "มี / สงสัยอาจมี / ไม่แน่ใจ",
        module: 21
      },
      {
        type: choiceType.question,
        name: "ไม่ได้มีสาเหตุจากการบาดเจ็บ",
        to: 1
      }
    ]
  }
];

const module20 = {
  name: "เด็ก",
  module: 20,
  description: "กุมารเวช",
  image: "assets/imgs/crying-baby.png",
  questions: questions
};

export default module20;
