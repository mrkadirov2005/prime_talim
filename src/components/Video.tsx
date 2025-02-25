interface PROPS{
    src:string,
    lesson:string,
    teacher:string,
}
export default function Video({src,lesson,teacher}:PROPS) {
  return (
    <div className="w-[500px] bg-gradient-to-tr from-gray-900 to-orange-800 p-2 rounded-md text-white flex flex-col items-start justify-between gap-5">
    <iframe width="480" height="315" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <h1 className="text-2xl">{lesson}</h1>
    <h6 className="text-xl">{teacher}</h6>
  </div>
  )
}
