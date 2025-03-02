import Character from "../components/Character";
import { motion } from "framer-motion";
import "./responsive.css";

export default function AboutUs() {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center gap-5 text-center bg-gradient-to-br from-orange-400 via-blue-300 to-violet-500 h-full min-h-[100vh] text-white py-10 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="w-full max-w-3xl bg-opacity-90 bg-white/20 p-6 rounded-xl shadow-xl backdrop-blur-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white drop-shadow-md">
          Biz haqimizda nimalarni bilasiz?
        </h1>
      </motion.div>

      <div className="w-full flex gap-6 flex-wrap items-center justify-center">
        <motion.div
          className="CEO_responsive flex flex-wrap items-center justify-center bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/director.jpg"
            className="w-[350px] rounded-lg shadow-lg border-4 border-white/40"
            alt="Director"
          />
          <div className="text-lg text-white mt-4 space-y-2">
            <Character size={"no"} heading="Asoschi" />
            <Character size={"no"} heading="slave_mg86@mail.ru" />
            <Character size={"no"} heading="+998(97)-395-23-78" />
            <Character size={"no"} heading="Samarqand viloyati, Urgut tumani" />
          </div>
        </motion.div>

        {/* Data Responsive */}
        <motion.div
          className="data_responsive w-full max-w-2xl p-6 text-lg bg-white/20 backdrop-blur-md rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="leading-relaxed text-white">
            <strong>Prime Ta'lim</strong> o'quv markazi 2015-yildan buyon sifatli ta'lim
            berib kelmoqda va o'zining 10 yillik tajribasi bilan minglab o'quvchilarni
            ilm bilan ta'minlashda davom etmoqda.
          </p>
          <div className="aboutus_results mt-6">
            <h1 className="w-full text-center border-t-4 border-white/40 pt-3 mt-2 text-2xl font-semibold text-white drop-shadow-md">
              Bizning natijalar
            </h1>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-3">
              <Character size="full" heading="📌 700+ o'quvchi IELTS, CEFR sertifikatlarini qo'lga kiritgan" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-3">
              <Character size="full" heading="📌 700+ o'quvchi OTMga muvaffaqiyatli kirgan" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-3">
              <Character size="full" heading="📌 700+ yuqori malakali o'qituvchilar ta'lim bermoqda" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
