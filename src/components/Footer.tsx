import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

export default function Footer() {
  const links=["https://www.instagram.com/primestudy_in_urgut","https://facebook.com","https://t.me/primestudy_in_urgut","https://www.youtube.com/@prime_talim"]
  return (
    <motion.footer
      className=" footer_site bg-gradient-to-tr pt-20 from-blue-500 to-orange-900 hover:bg-gradient-to-br text-white w-full py-12 px-6 sm:px-20 flex flex-wrap justify-between items-center shadow-lg shadow-blue-900/40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="footer"
    >
      {/* Left Section - Logo & Description */}
      <motion.div
        className="w-full md:w-1/3 md:border-b-2 md:border-white flex flex-col items-center md:items-start text-center md:text-left space-y-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src="/logo.png" className="w-28" alt="Logo" />
        <p className="text-lg max-w-sm leading-relaxed">
          <b>Prime Ta'lim</b> o'quv markazi Samarqand viloyati, Urgut tumanida joylashgan bo'lib,
          <b> Mahmud G'afforov</b> tomonidan asos solingan va 10 yillik tajribaga ega.
        </p>
        <div className="flex w-full justify-start gap-5 items-center"><FaPhone></FaPhone> <span> +998 95 412 60 60</span></div>
        <div className="flex w-full justify-start gap-5 items-center"><b>@</b><span> primetalim@gmail.com</span></div>
      </motion.div>

      {/* Center Section - Navigation & Social Links */}
      <motion.div
        className="w-full md:w-1/3 flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <nav className="flex flex-col items-center  justify-center  space-y-3 text-lg font-semibold w-full ">
          {["Home", "Courses",  "Test"].map((label, index) => (
            <motion.div key={label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full flex items-center justify-center">
              <Link
                className="py-2 px-4  border-b-2 border-blue-400 hover:text-gray-300 transition"
                to={index === 0 ? "/" : `/${label.toLowerCase()}`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {["instagram", "facebook", "telegram", "youtube"].map((platform,index) => (
            <motion.a
              key={platform}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={`/${platform}-logo.png`} className="w-9 transition-transform" alt={platform} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Section - Location & Contact Buttons */}
      <motion.div
        className="w-full md:w-1/3 flex flex-col items-center space-y-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.a
          href="https://maps.app.goo.gl/v5r2ZnUv1rNgsPv76"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/map_1.png" className="w-48 transition-transform rounded-lg" alt="Google Maps" />
        </motion.a>

        <div className="flex space-x-4">
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="contained" sx={{ backgroundColor: "#1E40AF" }} ><a href="/contact">Aloqaga Chiqish</a></Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
