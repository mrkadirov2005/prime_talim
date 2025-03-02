import { FaPlus, FaCode, FaHistory } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

interface Props {
  classs: string;
  type: string;
}

export default function Class({ classs, type }: Props) {
  return (
    <div className="flex items-center justify-between hover:scale-105 transition-transform bg-gradient-to-br from-[#2C3E50] to-[#6CA6CD] px-6 sm:px-8 py-4 sm:py-5 rounded-lg text-white w-full sm:w-[350px] md:w-[450px] lg:w-[500px] gap-3 shadow-md">
      <h1 className="text-3xl sm:text-4xl text-orange-400 drop-shadow-md">
        {type === "language" ? <GiWorld /> : type === "math" ? <FaPlus /> : type === "code" ? <FaCode /> : type === "history" ? <FaHistory /> : " "}
      </h1>
      <h1 className="w-full text-xl sm:text-2xl md:text-3xl text-center font-semibold text-orange-300 drop-shadow-md">
        {classs}
      </h1>
    </div>
  );
}
