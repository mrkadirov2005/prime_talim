import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "./responsive.css";

interface PROPS {
  name: string;
  description: string;
  // price: string;
  teacher: string;
  levels: string[];
  index: number;
}


export default function Course_card({ name, description,  teacher, levels, index }: PROPS) {
  return (
    <motion.div
      id={`${index}`}
      className="w-[350px] card_item_course text-gray-950 shadow-2xl shadow-gray-900 h-fit gap-5 px-5 flex flex-col items-start justify-start min-h-[300px] bg-gradient-to-tr from-orange-400 to-[#6A82FB] rounded-lg p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <h1 className="w-full text-left text-2xl border-b-4 border-gray-800 p-2 font-semibold">
        {index + 1}. {name}
      </h1>
      {/* <span className="text-xl border-b-4 border-gray-800 font-medium">Narx: {price}</span> */}
      <p className="w-[300px] course_card_description border-b-4 border-gray-800 pb-2 h-fit text-lg text-wrap flex flex-wrap">
        Tavsifi: {description}
      </p>
      <h1 className="w-full border-b-4 border-gray-800 text-lg font-medium">O'qituvchi: {teacher}</h1>
      <div className="w-full flex flex-wrap gap-3 mt-2">
        {levels.map((item, i) => (
          <motion.button
            key={i}
            className="bg-gray-800 text-white py-1 px-3 rounded-md shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.button>
        ))}
      </div>
      <Button variant="contained" color="error" className="mt-3">
        Aloqaga chiqish
      </Button>
    </motion.div>
  );
}
