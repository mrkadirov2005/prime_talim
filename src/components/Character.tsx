interface PROPS{
    heading:string,
    size:string,
}
export default function Character({heading,size}:PROPS) {
  return (
    <div className={`data_item flex flex-col text-white p-2 sm:h-[80px] md:h-fit   sm:m-2 md:5 items-center justify-around bg-gradient-to-bl from-orange-400 to-blue-500 ${size=="full"?"w-[80%]":"w-[300px]"}  hover:scale-110 rounded-md`}>
        <h1 className='w-full    p-2 '>
        {heading}
        </h1>
        
    </div>
  
  )
}
