import React from "react";
import {Button} from "@mui/material"
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./responsive.css"
export default function Footer() {
	return (
		<footer className="bg-orange-500 min-h-[400px] w-screen flex items-center justify-between  px-40 shadow-2xl shadow-amber-800 ">
			<div className="w-[25%] bg-gray-800 p-5 shadow-2xl shadow-gray-950 text-white rounded-md">
            <img src="/logo.png" className="w-20"></img>
            <p className="w-[300px] text-xl">Prime Ta'lim oquv markazi Urgut viloyatida joylashgan bo'lib <b>Mahmud G'afforov</b> tomonidan asos solingan va 10 yillik tarixga ega hisoblanadi.</p>
            <div className="socials flex flex-row w-full justify-around pt-5">
                <a className="socials_inst" href="https://instagram.com"><img src="/instagram-logo.png" width={"40px"} className="bg-white rounded-md"></img></a>
                <a className="socials_inst" href="https://instagram.com"><img src="/instagram-logo.png" width={"40px"} className="bg-white rounded-md"></img></a>
                <a className="socials_inst" href="https://instagram.com"><img src="/instagram-logo.png" width={"40px"} className="bg-white rounded-md"></img></a>
                <a className="socials_inst" href="https://instagram.com"><img src="/instagram-logo.png" width={"40px"} className="bg-white rounded-md"></img></a>
            </div>
            </div>
			<nav className="w-[30%] flex flex-col gap-5 bg-gray-800 p-5 text-white items-center justify-between uppercase  rounded-md" >
                <Link className="border-2 border-gray-950 w-full text-center hover:scale-110 hover:bg-gray-600 p-2" to="/">Asosiy</Link>
				<Link className="border-2 border-gray-950 w-full text-center hover:scale-110 hover:bg-gray-600 p-2" to="/courses">Kurslar</Link>
				<Link className="border-2 border-gray-950 w-full text-center hover:scale-110 hover:bg-gray-600 p-2" to="/videos">Video darslar</Link>
				<Link className="border-2 border-gray-950 w-full text-center hover:scale-110 hover:bg-gray-600 p-2" to="/test">Sinov Testi</Link>
                <Button  className="w-full" variant="contained">login</Button>
                <Button  className="w-full" variant="contained">Contact</Button>
			</nav>
            <div className="w-[400px] h-[300px] flex flex-col items-center   justify-between bg-gray-800 text-white rounded-md">
                <h1 className="text-2xl text-center">Xarita ustiga bosing va kelajak sari qadam tashlang</h1>
                <a className="" href="https://maps.app.goo.gl/v5r2ZnUv1rNgsPv76">
                    <img className="w-40" src="/google-maps.png"></img>
                </a>
            <div className="w-full flex items-center justify-between">
            
            </div>

            </div>
            
    	</footer>
	);
}
