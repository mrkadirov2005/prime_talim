interface PROPS{
    src:string,
    lesson:string,
    teacher:string,
}
export default function Video({src,lesson,teacher}:PROPS) {
  return (
    <div className="w-[500px] bg-gradient-to-tr from-gray-900 to-orange-800 p-2 rounded-md text-white flex flex-col items-start justify-between gap-5">
    <iframe className="w-full h-80"  src={src} ></iframe>
    <h1 className="text-2xl">{lesson}</h1>
    <h6 className="text-xl">{teacher}</h6>
  </div>
  )
}
