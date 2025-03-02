import { Button } from "@mui/material";
import { FaHeading } from "react-icons/fa";

export default function Test() {
  return (
    <section className="w-full bg-gradient-to-tr from-blue-300 to-violet-400 min-h-screen py-10 flex flex-col  items-center justify-center">
      <ul className="flex flex-wrap gap-8 justify-center px-4 pb-10">
        <Card_Test key={1} levels="A1-C1" number="20" test="Ingliz tili" />
        <Card_Test key={2} levels="A1-C1" number="20" test="Arab tili" />
        <Card_Test key={3} levels="A1-C1" number="20" test="Rus tili" />
        <Card_Test key={8} levels="A1-C1" number="20" test="Koreys tili" />
        <Card_Test key={4} levels="A1-C1" number="20" test="Ona tili va Adabiyot" />
        <Card_Test key={5} levels="A1-C1" number="20" test="Tarix" />
        <Card_Test key={6} levels="A1-C1" number="20" test="Axborot texnologiyalari (IT)" />
        <Card_Test key={7} levels="A1-C1" number="20" test="IQ" />
      </ul>
      <a href="/seb"><Button color="primary" variant="contained">Testni boshlash</Button></a>
    </section>
  );
}

interface PROPS {
  test: string;
  number: string;
  levels: string;
}

function Card_Test({ test, number, levels }: PROPS) {
  return (
    <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] bg-gradient-to-bl from-violet-700 to-blue-900 text-white rounded-lg p-5 shadow-xl shadow-blue-900/40 flex flex-col gap-4 transition-transform hover:scale-105">
      <h1 className="flex text-lg sm:text-xl md:text-2xl items-center pb-2 gap-2 border-b-4 border-gray-400 font-semibold">
        <FaHeading /> {test}
      </h1>
      <h1 className="text-base sm:text-lg md:text-xl font-medium border-b-4 border-gray-400 pb-2">
        Testlar soni: {number}
      </h1>
      <span className="text-sm sm:text-base md:text-lg opacity-90">
        Darajalar: {levels}
      </span>
    </div>
  );
}
