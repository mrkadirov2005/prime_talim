interface PROPS{
    heading:string,
    size:string,
}
export default function Character({heading,size}:PROPS) {
  return (
    <div className={`data_item flex flex-col text-white p-5 h-[100px] m-10 items-center justify-around bg-gray-800 ${size=="full"?"w-[80%]":"w-[300px]"}  hover:scale-110 rounded-md`}>
        <h1 className='w-full text-xl   p-2 '>
        {heading}
        </h1>
        
    </div>
  
  )
}
