import React from 'react'
import "./responsive.css"

interface Props{
    source:string;
    number:Number;
    field:string
}
export default function Card({source,number,field}:Props) {
  return (
    <div className='card flex flex-col items-center justify-center w-52 h-52 bg-orange-400 text-white rounded-md hover:bg-green-500 shadow-2xl shadow-orange-800 hover:scale-110'>
        <img src={source}></img>
        <h1 className='text-3xl'>
            {field}
        </h1>
        <h1 className='text-3xl'>
            {`${number}+`}
        </h1>
    </div>
  )
}
