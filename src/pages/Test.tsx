import { FaHeading } from "react-icons/fa";

export default function Test() {
  return (
    <section className="w-full bg-gradient-to-tr from-gray-600 to-gray-950  min-h-screen ">
      
      <ul className=" flex flex-wrap gap-10 pt-20 w-full items-center justify-center">
      
          <Card_Test levels="A1-C1" number="20" test="Ingliz tili"/>
          <Card_Test levels="A1-C1" number="20" test="Ingliz tili"/>
          <Card_Test levels="A1-C1" number="20" test="Ingliz tili"/>
          <Card_Test levels="A1-C1" number="20" test="Ingliz tili"/>
          <Card_Test levels="A1-C1" number="20" test="Ingliz tili"/>
          <Card_Test levels="A1-C1" number="20" test="Ingliz tili"/>
          <Card_Test levels="A1-C1" number="20" test="Ingliz tili"/>
      </ul>
    </section>
  )
}
interface PROPS{
  test:string,
  number:string,
  levels:string,
}
function Card_Test({test,number,levels}:PROPS){
  return(
    <div className="w-[400px] rounded-md p-5 flex flex-col gap-2 bg-gradient-to-bl text-white  from-gray-600 to-gray-950 shadow-2 shadow-gray-200 ">
    <h1 className="flex text-2xl items-center w-full  pb-2 gap-2 border-b-4 border-gray-800"><FaHeading/>{test}</h1>
    <h1 className="flex text-2xl items-center w-full  pb-2 gap-2 border-b-4 border-gray-800">Testlar soni: {number}</h1>
    <span className="flex text-lg">Darajalar: {levels}</span>
  </div>
  )
}
