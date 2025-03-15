import { Button } from "@mui/material";
import { useState } from "react";
export default function Contact() {
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
    <div id="contact" className="m-0 min-h-screen mt-[-20px] mb-[-50px] p-0 bg-gradient-to-br from-orange-300 to-blue-300 w-full flex items-center justify-center contact_form_bg mx-auto bg-cover   relative ">
        <form 
           
          className="w-full md:w-[600px] text-white m-auto md:ml-auto min-h-[550px] bg-orange-700 p-6 md:p-14 rounded-md flex flex-col gap-4"
        >
          <h1 className="text-white text-2xl md:text-4xl">Aloqaga chiqish</h1>
          <div className="flex flex-col gap-4 w-full">
            {["Ismingiz", "Familiyangiz", "Telefon raqamingiz"].map((placeholder, index) => (
              <input 
              required
                key={index} 
                 
                className="w-full p-3 border-2 border-white bg-gray-800 text-white rounded-md"
                type="text" 
                placeholder={placeholder} 
              />
            ))}
            <select  className="w-full border-2 border-white p-3 bg-gray-800 text-white rounded-md">
              <option disabled selected>--Maktabingizni tanlang:</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "Tugatganman"].map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <Button variant="contained" disabled={isSent==true} color="success" onClick={()=>handleSend()}>{isSent?"Yuborildi":"Yuborish"}</Button>
          </div>
        </form>
      </div>
  )
}
