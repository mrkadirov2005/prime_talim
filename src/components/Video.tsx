interface PROPS {
  src: string | undefined;
  lesson: string;
  teacher: string;
}

export default function Video({ src, lesson, teacher }: PROPS) {
  
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-tr from-blue-700 to-violet-800 hover:scale-105 transition-transform p-4 rounded-xl text-white flex flex-col items-start justify-between gap-5 shadow-lg shadow-blue-900/50">
      <iframe className="w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-md" src={src} allowFullScreen></iframe>
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">{lesson}</h1>
      <h6 className="text-base sm:text-lg md:text-xl opacity-90">{teacher}</h6>
    </div>
  );
}
