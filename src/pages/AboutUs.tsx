import { motion } from "framer-motion";
import "./responsive.css";
import { useState } from "react";
import {  Button } from "@mui/material";
import TeacherList from "../components/render_teachers";




export default function AboutUs() {
  const [isview,setIsView]=useState<boolean>(false)
  return (
    <motion.section
    className="w-full min-h-screen   mb-5 flex flex-col flex-wrap items-center justify-center gap-6 text-center bg-gradient-to-bl from-green-200 to-violet-500 text-white py-14 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Title */}
      <motion.div
        className="w-ful l max-w-4xl bg-white/20 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/30"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Biz haqimizda nimalarni bilasiz?
        </h1>
      <Button variant="contained" color="success" onClick={()=>setIsView(!isview)}>{isview?"Yopish":"Barcha ustozlar"}</Button>
      </motion.div>

    <div className="w-full flex flex-wrap items-center justify-center gap-10 px-4">
        {
        <TeacherList/>
        }
      </div>
      
    </motion.section>
  );
}
