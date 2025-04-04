import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Card from "../components/Card";
import Item_Card from "../components/Item_Card";
import Class from "../components/Class";
import AboutUs from "./AboutUs";
import { useState } from "react";
import Item_Card_2 from "../components/Item_Card_2";

// Variants for animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Home() {
const [isSent,setIsSent]=useState<boolean>();
  const handleSend = async () => {

    const formData = {
      ismingiz: (document.querySelector("input[placeholder='Ismingiz']") as HTMLInputElement).value,
      familiyangiz: (document.querySelector("input[placeholder='Familiyangiz']") as HTMLInputElement).value,
      telefon: (document.querySelector("input[placeholder='Telefon raqamingiz']") as HTMLInputElement).value,
      maktab: (document.querySelector("select") as HTMLSelectElement).value,
    };
  
    if (!formData.ismingiz || !formData.familiyangiz || !formData.telefon || formData.maktab === "--Maktabingizni tanlang:") {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    setIsSent(true);
    try {
      console.log(formData)
      await fetch("https://script.google.com/macros/s/AKfycbwnj13TjHhQ8wt4AuYfbuS5cf1yokSGvHyqy5fkuU86L341Eh1uwucTLRtftbufAWvf/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode:"no-cors"
      });
  
      
    } catch (error) {
    }
  };
  


  return (
    <motion.section initial="hidden" animate="visible" className="w-full">
      
      {/* Hero Section */}
      <motion.div 
        variants={fadeIn} 
        className="relative flex flex-col items-center justify-center w-full h-[450px] md:h-[600px] bg-cover bg-no-repeat bg-[url('/web.jpg')] rounded-md border-4 p-6 md:p-10 hover:border-0 transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 rounded-md"></div>
        <motion.h1 variants={slideUp} className="relative text-white text-3xl md:text-6xl font-extrabold drop-shadow-lg text-center">
        Ilm ummoniga sayohat
        </motion.h1>
        <motion.p variants={slideUp} className="relative text-white text-lg md:text-2xl w-[90%] md:w-[70%] text-center drop-shadow-md">
          Prime Ta'lim 2013 yildan buyon o'quvchilarga sifatli ta'lim berib kelmoqda.
        </motion.p>
        <motion.div variants={slideUp}>
          <Button variant="contained" color="warning" className="relative hover:scale-110 transition-transform">
            <a href="#contact">Aloqaga chiqish</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Results Section */}
      <motion.section variants={staggerContainer} className="py-10 flex flex-col items-center">
        <motion.h1 variants={slideUp} className="text-2xl md:text-3xl uppercase text-orange-500 font-bold text-center">
          Bizning Natijalar
        </motion.h1>
        <motion.div variants={staggerContainer} className="flex md:flex-wrap  w-[90%] pt-10">
            <motion.div variants={slideUp} className="flex justify-center gap-5 md:justify-between w-full flex-wrap">
              <Card source="/reading.svg" field={"O'quvchilar"} number={1000} />
              <Card source="/reading.svg" field={"Ustozlar"} number={20} />
              <Card source="/reading.svg" field={"IELTS"} number={50} />
              <Card source="/reading.svg" field={"CEFR"} number={50} />
              <Card source="/reading.svg" field={"Xorijiy OTM"} number={10} />
              <Card source="/reading.svg" field={"OTM"} number={200} />
            </motion.div>
        </motion.div>
      </motion.section>

      {/* Comforts Section */}
      <motion.section variants={staggerContainer} className="py-10 flex flex-col items-center gap-6">
        <motion.h1 variants={slideUp} className="text-center font-bold text-orange-700 text-2xl md:text-4xl uppercase">
          Bizning Qulayliklarimiz
        </motion.h1>
        <motion.div variants={staggerContainer} className="flex flex-wrap items-center justify-center gap-5 w-[90%] bg-orange-200 p-6 md:p-10 rounded-md">
          {[
            { heading: "Joylashuv", data: "Qulay joylashuv" },
            { heading: "Aloqa", data: "ota onalar bilan muntazam aloqa" },
            { heading: "Imtihonlar", data: "Imtihondan yiqilganlar qaytadan pastgi guruhlarga tushurish" },
                      { heading: "Ustozlar", data: "Yuqori malakali o'qituvchilar" },
            { heading: "Sifat", data: "Yuqori sifat va natija ustuvorligi" },
            { heading: "O'quv tizimi", data: "Cambridge standartlari asosida" },
            { heading: "Sinov Imtihonlari", data: "Har darajadan so'ng testlar" },
            { heading: "Narxlar", data: "Hamyonbop narxlar" },
          ].map((item, index) => (
            <motion.div key={index} variants={slideUp}>
              <Item_Card heading={item.heading} data={item.data} />
            </motion.div>
          ))}
         
        </motion.div>
      </motion.section>
      <div className="w-[90%] hover:scale-105 hover:skew-x-2 m-auto flex flex-col p-8 rounded-md items-center justify-center bg-orange-400">
          <h1 className="w-full m-auto bg-orange-500 text-center p-2 my-2 bg-gradient-to-r from-green-700 text-2xl to-blue-400 text-white shadow-2xl shadow-green-700">Hamkorlarimiz</h1>
           <div className="w-full gap-x-9 gap-y-2 flex items-center flex-wrap  justify-center">
            {
              [
                {  data: "Fast Education" },
                {  data: "Elita akademik Maktabi" },
                {  data: "Prime Study Toshkent bosh office" },
                {  data: "Perfect Education(Bulung'ur)" },
              ].map(item=><Item_Card_2 data={item.data}></Item_Card_2>)
            }
          </div>
          </div>

      {/* Courses Section */}
      <motion.section variants={staggerContainer} className="py-10 flex flex-col items-center gap-6">
        <motion.h1 variants={slideUp} className="text-center font-bold text-orange-700 text-2xl md:text-4xl uppercase">
          Bizdagi kurslar
        </motion.h1>
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] bg-orange-300 p-6 md:p-10 rounded-md">
          {[
            { classs: "Ingliz tili", type: "language" },
            { classs: "Rus tili", type: "language" },
            { classs: "Arab tili", type: "language" },
            { classs: "Ona tili va Adabiyot", type: "language" },
            { classs: "Biologiya", type: "math" },
            { classs: "Kimyo", type: "math" },
            { classs: "Nemis tili", type: "math" },
            { classs: "Uy hamshirasi kursi", type: "math" },
          ].map((item, index) => (
            <motion.div key={index} className="m-auto" variants={slideUp}>
            <a href="/courses">  <Class classs={item.classs} type={item.type} /></a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {/* about us part */}
      <AboutUs/>
      {/* Contact Form */}
      <motion.section variants={fadeIn} id="contact" className="m-0 mt-[-20px] mb-[-50px] p-0 bg-gradient-to-br from-orange-300 to-blue-300 w-full flex items-center justify-center contact_form_bg mx-auto bg-cover min-h-[600px]  relative ">
        <motion.form 
          variants={slideUp} 
          className="w-full md:w-[600px] text-white m-auto md:ml-auto min-h-[550px] bg-orange-700 p-6 md:p-14 rounded-md flex flex-col gap-4"
        >
          <h1 className="text-white text-2xl md:text-4xl">Aloqaga chiqish</h1>
          <div className="flex flex-col gap-4 w-full">
            {["Ismingiz", "Familiyangiz", "Telefon raqamingiz"].map((placeholder, index) => (
              <motion.input 
              required
                key={index} 
                variants={slideUp} 
                className="w-full p-3 border-2 border-white bg-gray-800 text-white rounded-md"
                type="text" 
                placeholder={placeholder} 
              />
            ))}
            <motion.select variants={slideUp} className="w-full border-2 border-white p-3 bg-gray-800 text-white rounded-md">
              <option disabled selected>--Maktabingizni tanlang:</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "Tugatganman"].map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </motion.select>
            <Button variant="contained" disabled={isSent==true} color="success" onClick={()=>handleSend()}>{isSent?"Yuborildi":"Yuborish"}</Button>
          </div>
        </motion.form>
      </motion.section>

    </motion.section>
  );
}


// https://script.google.com/macros/s/AKfycbzOnN1dPJL3I-2wA_O8v_GDCY7spTUjrXFTRkVj0AOATV6J7SpiN7Onh5nlFQpWt72h/exec
