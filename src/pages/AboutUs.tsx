import Character from "../components/Character";
import { motion } from "framer-motion";
import "./responsive.css";
import teachers from "./teachers.json";

interface PROPS {
  ism: string;
  telefon: string;
  lavozim: string;
}

// Convert JSON data to match TypeScript expectations
const formattedTeachers: PROPS[] = teachers.map((t) => ({
  ism: t.Ism,
  telefon: t.Telefon,
  lavozim: t.Lavozim,
}));

export default function AboutUs() {
  return (
    <motion.section
    className="w-full min-h-screen  mb-5 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 text-center bg-gradient-to-bl from-green-400 to-blue-700 text-white py-14 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Title */}
      <motion.div
        className="w-full max-w-4xl bg-white/20 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/30"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Biz haqimizda nimalarni bilasiz?
        </h1>
      </motion.div>

      {/* Director Section */}
      <motion.div
        className="w-full max-w-xl flex flex-col  items-center bg-gradient-to-br from-orange-300 to-blue-400 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/30 transform hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="/director.jpg"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-white/40 object-cover"
          alt="Director"
        />
        <div className="text-lg text-white mt-4 space-y-2">
          <Character size="no" heading="Asoschi" />
          <Character size="no" heading="slave_mg86@mail.ru" />
          <Character size="no" heading="+998(97)-395-23-78" />
          <Character size="no" heading="Samarqand viloyati, Urgut tumani" />
        </div>
      </motion.div>

      {/* Teachers Section */}
      <div className="w-full flex flex-wrap items-center justify-center gap-10 px-4">
        {formattedTeachers.map((teacher, index) => (
          <RenderTeachersComp key={index} {...teacher} />
        ))}
      </div>
    </motion.section>
  );
}

function RenderTeachersComp({ ism, telefon, lavozim }: PROPS) {
  return (
    <motion.div
      className="w-80 max-w-sm flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/30 transition-all transform hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src="/teacher-avatar.png"
        className="w-24 h-24 rounded-full shadow-md border-2 border-white/40 object-cover"
        alt={ism}
      />
      <div className="text-lg text-white mt-4 flex items-center justify-center flex-col gap-0  text-center">
        <Character size="no" heading={ism} />
        <Character size="no" heading={lavozim} />
        <Character size="no" heading={telefon} />  
        <Character size="no" heading="Samarqand viloyati, Urgut tumani" />
      </div>
    </motion.div>
  );
}
