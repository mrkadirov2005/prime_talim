import { Button } from "@mui/material"
import "./responsive.css"
interface PROPS{
    name:string,
    description:string,
    price:string,
    teacher:string,
    levels:string[],
    index:number
}
export default function Course_card({name,description,price,teacher,levels,index}:PROPS) {
  return (
    <div id={`${index}`} className="w-[350px] card_item_course  hover:scale-115 text-gray-950 shadow-2xl shadow-gray-950 h-fit gap-5 px-5 flex flex-col items-start justify-start min-h-[300px] bg-gradient-to-tr from-orange-400 to-gray-600 rounded-md p-2">
        <h1 className="w-full text-left text-2xl border-b-4 border-gray-900 p-2 ">
            {index+1 } {name}
        </h1>
        <span className="text-xl border-b-4 border-gray-950">Narx: {price}</span>
        <p className="w-[300px] course_card_description border-b-4 border-gray-950 pb-2 h-fit text-xl text-wrap flex flex-wrap">
          Tavsifi: {description}  
        </p>
        <h1 className="w-full border-b-4 border-gray-950">
            Teacher: {teacher}
        </h1>
        <div className="w-full flex flex-wrap gap-3 ">
            {levels.map(item=><button className="bg-gray-700 py-1 text-white px-2 rounded-md" >{item}</button>)}
        </div>
        <Button variant="contained" color="error"> Aloqaga chiqish</Button>
    </div>
  )
}
