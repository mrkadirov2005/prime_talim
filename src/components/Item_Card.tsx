import React from 'react'
import "./responsive.css"
interface Props{
    heading:string,
    data:string
}
export default function Item_Card({heading,data}:Props) {
  return (
    <div className='comfort_item flex flex-col p-10 h-[200px] m-10 items-center justify-around bg-orange-500 w-[500px]  hover:scale-110 rounded-md'>
        <h1 className='w-full text-3xl bg-orange-600 p-2 '>
        {heading}
        </h1>
        <h6 className='w-full text-xl'>
            {data}
        </h6>
    </div>
  )
}
