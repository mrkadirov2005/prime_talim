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
    "No": 1,
    "Ismlar": "G’afforov Mahmud",
    "Telefon": "97 395 23 78",
    "Lavozim": "Ingliz tili/direktor",
    "Rasm": "/gafforov.jpg",
    "Tug'ilgan yili": "04.01.1986",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "Akademik Litsey,Prime Study o'quv markazi",
    "Pedagogik Tajriba": "16 yil",
    "Yutuqlar": "CEFR C1"
  },
  {
    "No": 5,
    "Ismlar": "Baratova Gulilola",
    "Telefon": "88 579 96 05",
    "Lavozim": "Ingliz tili IELTS, CEFR",
    "Rasm": "/gulilola.jpg",
    "Tug'ilgan yili": "03.06.2005",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "Niners Academy, Ixlos, Prime Study, elite academic school",
    "Pedagogik Tajriba": "3 YIL",
    "Yutuqlar": "CEFR C1"
  },
  {
    "No": 6,
    "Ismlar": "Diyorova Lobar",
    "Telefon": "93 996 20 53",
    "Lavozim": "Ingliz tili",
    "Rasm": "/lobar.jpg",
    "Tug'ilgan yili": "22.03.1997",
    "O'qigan Joyi": "SamDCHTI, Silk Road",
    "Ish Tajribasi": "“creativa Academy” o’quv markazi, 26-IDUM, “Elita” akademik maktabi, Prime Study o'quv markazi",
    "Pedagogik Tajriba": "6 yil",
    "Yutuqlar": ""
  },
  {
    "No": 7,
    "Ismlar": "Shodiyev Abdulaziz",
    "Telefon": "90 284 07 50",
    "Lavozim": "Ingliz tili IELTS, CEFR",
    "Rasm": "/abdulaziz.jpg",
    "Tug'ilgan yili": "16.07.2001",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "Elita akademik maktabi, Prime Study o'quv markazi",
    "Pedagogik Tajriba": "3 YIL",
    "Yutuqlar": "IELTS 7.0"
  },
  {
    "No": 8,
    "Ismlar": "Mirzayeva Zilola",
    "Telefon": "99 578 98 28",
    "Lavozim": "Ingliz tili",
    "Rasm": "/zilola.bmp",
    "Tug'ilgan yili": "15.03.1979",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "54 va 123- maktab,Prime Study",
    "Pedagogik Tajriba": "25 yil",
    "Yutuqlar": "IELTS 6.0"
  },
  {
    "No": 10,
    "Ismlar": "Umarov Xislat",
    "Telefon": "90 192 15 31",
    "Lavozim": "Ingliz tili SAT",
    "Rasm": "/xislat.jpg",
    "Tug'ilgan yili": "",
    "O'qigan Joyi": "",
    "Ish Tajribasi": "Prime Study o'quv markazi, Elita akademik maktabi",
    "Pedagogik Tajriba": "2 yil",
    "Yutuqlar": "IELTS 7.0   SAT 1210"
  },
  {
    "No": 9,
    "Ismlar": "Hamidov Elmurod",
    "Telefon": "77 055 05 65",
    "Lavozim": "Ingliz tili",
    "Rasm": "/elmurod.jpg",
    "Tug'ilgan yili": "31.03.1977",
    "O'qigan Joyi": "SamDCHTI",
    "Ish Tajribasi": "36,35,81-MAKTABLAR, Prime Study, Elita maktabi",
    "Pedagogik Tajriba": "20 yil",
    "Yutuqlar": "Oliy toifali o'qituvchi"
  },
  {
    "No": 11,
    "Ismlar": "Farhodov Firdavs",
    "Telefon": "97 575 82 32",
    "Lavozim": "Ingliz tili CEFR",
    "Rasm": "/firdavs.jpg",
    "Tug'ilgan yili": "11.01.2002",
    "O'qigan Joyi": "Toshkent Kimyo Xalqaro Universiteti",
    "Ish Tajribasi": "Al Aziz Academy NTM (oʻquv markazi), Elita Academic maktabi, Prime Study oʻquv markazi",
    "Pedagogik Tajriba": "2 yil",
    "Yutuqlar": "CEFR C1"
  },
  {
    "No": 19,
    "Ismlar": "Rahmonov Otabek",
    "Telefon": "97 933 88 27",
    "Lavozim": "Biologiya",
    "Rasm": "/otabek.jpg",
    "Tug'ilgan yili": "25.07.2000",
    "O'qigan Joyi": "SamDU",
    "Ish Tajribasi": "Bilim orzu, Cambridge ,  Prime taʼlim  o'quv markazi",
    "Pedagogik Tajriba": "5 yil",
    "Yutuqlar": "100 dan ortiq o'quvchisi talaba bo'lgan"
  },
  {
    "No": 20,
    "Ismlar": "Asliddinov Samandar",
    "Telefon": "91 628 33 81",
    "Lavozim": "Kimyo",
    "Rasm": "/samandar.jpg",
    "Tug'ilgan yili": "25.09.2003",
    "O'qigan Joyi": "SamDU",
    "Ish Tajribasi": "Prime Study o'quv markazi",
    "Pedagogik Tajriba": "3 yil",
    "Yutuqlar": "50 nafar o'quvchisi talaba bo'lgan"
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
  }
];

const TeacherCard: React.FC<{ teacher: TEACHER }> = ({ teacher }) => {
  return (
    <Card className="w-80 p-4 rounded-2xl shadow-lg h-fit pt-0 bg-white">
      <CardContent className="flex flex-col items-center">
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
