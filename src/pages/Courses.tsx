import { useState } from "react";
import { motion } from "framer-motion";
import Course_card from "../components/Course_card";
import "./responsive.css";
import Left_floating_courses, { PROPS } from "../components/Left_floating_courses";
import { Button } from "@mui/material";

const courses = [
  {
    name: "Ingliz tili",
    description: "Ingliz tilini bosqichma-bosqich o'rganing.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    price: "250",
    teacher: "Muzaffar",
    key: 1,
  },
  {
    name: "Rus tili",
    description: "Rus tilini oson va samarali o'rganing.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    price: "220",
    teacher: "Oleg",
    key: 2,
  },
  {
    name: "Arab tili",
    description: "Arab tilini grammatik va talaffuz asosida o'rganing.",
    levels: ["Boshlang'ich", "O'rta", "Yuqori"],
    price: "230",
    teacher: "Ahmad",
    key: 3,
  },
  {
    name: "Koreys tili",
    description: "Koreys tilida erkin gapirishni o'rganing.",
    levels: ["1-daraja", "2-daraja", "3-daraja", "4-daraja"],
    price: "240",
    teacher: "Sung-min",
    key: 4,
  },
  {
    name: "Matematika",
    description: "Matematika fanining barcha muhim mavzulari.",
    levels: ["Boshlang'ich", "O'rta", "Oliy"],
    price: "260",
    teacher: "Ali",
    key: 5,
  },
  {
    name: "Ona tili va adabiyot",
    description: "O'zbek tili va adabiyotining asosiy qoidalari.",
    levels: ["Boshlang'ich", "O'rta", "Advanced"],
    price: "200",
    teacher: "Gulnora",
    key: 6,
  },
  {
    name: "Tarix",
    description: "Jahon va O'zbekiston tarixi bo'yicha chuqur ma'lumot.",
    levels: ["Qadimgi", "O'rta asrlar", "Hozirgi zamon"],
    price: "210",
    teacher: "Shavkat",
    key: 7,
  },
  {
    name: "IQ",
    description: "Mantiqiy va analitik fikrlashni rivojlantirish mashg'ulotlari.",
    levels: ["Asosiy", "Orta", "Murakkab"],
    price: "270",
    teacher: "Rustam",
    key: 8,
  },
];
export default function Courses() {
  const [data, setData] = useState(courses);
  const [isBarOpen, setIsBarOpen] = useState<boolean>(false);
  const [levels, setLevels] = useState<PROPS>(courses[0]);

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value.toLowerCase();
    const filteredData = courses.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value) ||
        item.levels.some((level) => level.toLowerCase().includes(value))
    );
    setData(filteredData);
  };

  return (
    <section className="flex flex-col items-center justify-start w-full min-h-screen bg-gradient-to-br from-[#FF7E5F] to-[#6A82FB]">
      {/* HEADER */}
      <div className="w-full flex items-center justify-center text-white text-3xl bg-gradient-to-tr from-orange-900 to-blue-900 min-h-[100px] shadow-md">
        <h1 className="courses_heading">Kursni tanlang va o'z joyingizni band qiling.</h1>
      </div>

      {/* SEARCH BAR */}
      <motion.input
        type="text"
        onChange={handleInputSearch}
        placeholder="Qidirish"
        className="w-[300px] text-white bg-white/20 mt-8 border border-white px-3 py-2 rounded-lg placeholder-white focus:ring-2 focus:ring-white focus:outline-none"
        whileFocus={{ scale: 1.05 }}
      />

      {/* COURSES LIST */}
      <div className="pb-10 courses_main_lsn items-center justify-center w-full gap-8 mt-10 flex flex-wrap">
        {data.map((item, index) => (
          <motion.div
            key={item.key}
            className="w-fit cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsBarOpen(!isBarOpen);
              setLevels(item);
            }}
          >
            <Course_card
              name={item.name}
              description={item.description}
              index={index}
              levels={item.levels}
              price={item.price}
              teacher={item.teacher}
            />
          </motion.div>
        ))}

        {/* SIDE PANEL */}
        {isBarOpen && (
          <motion.div
            className="fixed top-[80px] right-0  sm:top-0  md:top-[80px] bg-white/90 shadow-lg p-4 backdrop-blur-md rounded-l-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Button
              variant="contained"
              color="error"
              className="w-full p-2 mb-2"
              onClick={() => setIsBarOpen(!isBarOpen)}
            >
              X
            </Button>
            <Left_floating_courses
              name={levels.name}
              description={levels.description}
              key={levels.key}
              levels={levels.levels}
              price={levels.price}
              teacher={levels.teacher}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
