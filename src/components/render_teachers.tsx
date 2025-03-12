import React from "react";
import { Card, CardContent } from "@mui/material";

export interface TEACHER {
  No: number;
  Ismlar: string;
  Telefon: string;
  Lavozim: string;
  Rasm: string;
  "Tug'ilgan yili": string;
  "O'qigan Joyi": string;
  "Ish Tajribasi": string;
  "Pedagogik Tajriba": string;
  Yutuqlar: string;
}

const teachers: TEACHER[] = [
  {
    No: 1,
    Ismlar: "G’afforov Mahmud",
    Telefon: "97 395 23 78",
    Lavozim: "Ingliz tili/direktor",
    Rasm: "/gafforov.jpg",
    "Tug'ilgan yili": "04.01.1986",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "Akademik Litsey, Prime Study o'quv markazi",
    "Pedagogik Tajriba": "16 yil",
    Yutuqlar: "CEFR C1",
  },
  {
    No: 8,
    Ismlar: "Mirzayeva Zilola",
    Telefon: "99 578 98 28",
    Lavozim: "Ingliz tili",
    Rasm: "/zilola.bmp",
    "Tug'ilgan yili": "15.03.1979",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "54 va 123-maktab, Prime Study",
    "Pedagogik Tajriba": "25 yil",
    Yutuqlar: "IELTS 6.0",
  },
  {
    No: 13,
    Ismlar: "Ishev Nodir",
    Telefon: "97 923 53 79",
    Lavozim: "Arab tili",
    Rasm: "/nodir.jpg",
    "Tug'ilgan yili": "15.09.1985",
    "O'qigan Joyi": "Toshkent Islom Universiteti",
    "Ish Tajribasi": "Prime Study o'quv markazi",
    "Pedagogik Tajriba": "5 yil",
    Yutuqlar: "",
  },
  {
    No: 5,
    Ismlar: "Baratova Gulilola",
    Telefon: "88 579 96 05",
    Lavozim: "Ingliz tili IELTS, CEFR",
    Rasm: "/gulilola.jpg",
    "Tug'ilgan yili": "03.06.2005",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "Niners Academy, Ixlos, Prime Study, elite academic school",
    "Pedagogik Tajriba": "3 yil",
    Yutuqlar: "CEFR C1",
  },
  {
    No: 6,
    Ismlar: "Diyorova Lobar",
    Telefon: "93 996 20 53",
    Lavozim: "Ingliz tili",
    Rasm: "/lobar.jpg",
    "Tug'ilgan yili": "22.03.1997",
    "O'qigan Joyi": "SamDCHTI, Silk Road",
    "Ish Tajribasi":
      "“Creativa Academy” o’quv markazi, 26-IDUM, “Elita” akademik maktabi, Prime Study o'quv markazi",
    "Pedagogik Tajriba": "6 yil",
    Yutuqlar: "",
  },
  {
    No: 7,
    Ismlar: "Shodiyev Abdulaziz",
    Telefon: "90 284 07 50",
    Lavozim: "Ingliz tili IELTS, CEFR",
    Rasm: "/abdulaziz.jpg",
    "Tug'ilgan yili": "16.07.2001",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "Elita akademik maktabi, Prime Study o'quv markazi",
    "Pedagogik Tajriba": "3 yil",
    Yutuqlar: "IELTS 7.0",
  },
  {
    No: 11,
    Ismlar: "Farhodov Firdavs",
    Telefon: "97 575 82 32",
    Lavozim: "Ingliz tili CEFR",
    Rasm: "/firdavs.jpg",
    "Tug'ilgan yili": "11.01.2002",
    "O'qigan Joyi": "Toshkent Kimyo Xalqaro Universiteti",
    "Ish Tajribasi":
      "Al Aziz Academy NTM (oʻquv markazi), Elita Academic maktabi, Prime Study oʻquv markazi",
    "Pedagogik Tajriba": "2 yil",
    Yutuqlar: "CEFR C1",
  },
  {
    No: 14,
    Ismlar: "Xakimova Sevinchbonu",
    Telefon: "91 318 20 21",
    Lavozim: "Rus tili",
    Rasm: "/sevinch.jpg",
    "Tug'ilgan yili": "11.04.2001",
    "O'qigan Joyi": "SamDU",
    "Ish Tajribasi": "Prime Study o'quv markazi",
    "Pedagogik Tajriba": "3 yil",
    Yutuqlar: "",
  },
  {
    No: 15,
    Ismlar: "Shodiyev Odiljon",
    Telefon: "94 345 83 26",
    Lavozim: "Ona tili",
    Rasm: "/odil.jpg",
    "Tug'ilgan yili": "30.12.1994",
    "O'qigan Joyi": "Jizzax Davlat universiteti, SamDU",
    "Ish Tajribasi": "Prime Study o'quv markazi, 121-MAKTAB",
    "Pedagogik Tajriba": "7 yil",
    Yutuqlar:
      "2016-yil “Navoiy nomidagi davlat stipendiyasi” sovrindori, 2 ta kitob, 1 ta to‘plam muallifi, 40+ milliy maqolalar, 10+ xalqaro maqolalar, Magistr darajasi",
  },
  {
    No: 17,
    Ismlar: "Ibodullayev Sherali",
    Telefon: "99 193 23 37",
    Lavozim: "Matematika",
    Rasm: "/sherali.jpg",
    "Tug'ilgan yili": "23.05.1984",
    "O'qigan Joyi": "SamDU",
    "Ish Tajribasi": "Prime Study o'quv markazi, 121-MAKTAB",
    "Pedagogik Tajriba": "20 yil",
    Yutuqlar: "",
  },
  {
    No: 18,
    Ismlar: "Tosheva Xurshida",
    Telefon: "99 549 19 18",
    Lavozim: "Matematika",
    Rasm: "/xurshida.jpg",
    "Tug'ilgan yili": "15.08.1982",
    "O'qigan Joyi": "Toshkent Moliya instituti",
    "Ish Tajribasi":
      "Iqtisodiyot kolleji, 149-maktab, ELT maktabi",
    "Pedagogik Tajriba": "16 yil",
    Yutuqlar: "Triz pedagogikasi sertifikati, DTM-2024 matematikadan 40/40, 1-toifali o'qituvchi",
  },
  {
    No: 19,
    Ismlar: "Rahmonov Otabek",
    Telefon: "97 933 88 27",
    Lavozim: "Biologiya",
    Rasm: "/otabek.png",
    "Tug'ilgan yili": "25.07.2000",
    "O'qigan Joyi": "SamDU",
    "Ish Tajribasi": "Bilim Orzu, Cambridge, Prime ta’lim o'quv markazi",
    "Pedagogik Tajriba": "5 yil",
    Yutuqlar: "100 dan ortiq o'quvchisi talaba bo'lgan",
  },
  {
    No: 20,
    Ismlar: "Asliddinov Samandar",
    Telefon: "91 628 33 81",
    Lavozim: "Kimyo",
    Rasm: "/samandar.jpg",
    "Tug'ilgan yili": "25.09.2003",
    "O'qigan Joyi": "SamDU",
    "Ish Tajribasi": "Prime Study o'quv markazi",
    "Pedagogik Tajriba": "3 yil",
    Yutuqlar: "50 nafar o'quvchisi talaba bo'lgan",
  },
  
];

const TeacherCard: React.FC<{ teacher: TEACHER }> = ({ teacher }) => {
  return (
    <Card className="w-80  hover:scale-105 hover:bg-blue-500 rounded-2xl shadow-lg h-fit pt-0 ">
      <CardContent className="flex flex-col items-center hover:bg-gradient-to-br from-orange-400 to-blue-400">
        <img src={teacher.Rasm} alt={teacher.Ismlar} className="w-auto max-h-[250px] mb-3" />
        <h3 className="text-xl font-bold">{teacher.Ismlar}</h3>
        <p className="text-sm text-gray-500">{teacher.Lavozim}</p>
        <p className="text-sm text-gray-600">📅 {teacher["Tug'ilgan yili"]}</p>
        <p className="text-sm text-gray-600">🎓 {teacher["O'qigan Joyi"]}</p>
        <p className="text-sm text-gray-600">⌛ Tajriba: {teacher["Ish Tajribasi"]}</p>
        {teacher.Yutuqlar && (
          <p className="mt-2 bg-green-500 text-white p-1 rounded-lg">🏆 {teacher.Yutuqlar}</p>
        )}
      </CardContent>
    </Card>
  );
};

const TeacherList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.No} teacher={teacher} />
      ))}
    </div>
  );
};

export default TeacherList;
