import { FaPlus,FaCode,FaHistory } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import "./responsive.css"
interface PROPs{
    classs:string;
    type:string
}
export default function Class({classs,type}:PROPs) {
  return (
    <div className=' main_class_item flex items-center justify-between hover:scale-105 bg-blue-950 px-10 py-5 rounded-md text-white w-[500px] gap-3'>
        <h1 className='w-ful text-4xl'>{type=="language"?<GiWorld ></GiWorld>:type=="math"?<FaPlus/>:type=="code"?<FaCode/>:type=="history"?<FaHistory/>:" "}</h1>
        <h1 className='w-full text-4xl'>{classs}</h1>
    </div>
  )
}
