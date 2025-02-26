import Character from "../components/Character";
import "./responsive.css"
export default function AboutUs() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 text-center bg-gradient-to-br from-gray-600 to-gray-900 h-full min-h-[100vh]">
      <div className="w-full bg-gray-600 p-5 text-white  ">
        <h1 className=" text-2xl ">Biz haqimizda nimalarni bilasiz?</h1>
      </div>
      <div className="w-full flex gap-5 items-center justify-around flex-wrap">
      <div className="CEO_responsive btn flex flex-wrap items-center justify-center bg-gradient-to-br from-gray-800 to-gray-300 p-5 rounded-md m-5">
       <img src="/director.jpg" className="w-[400px]"  alt="" />
       <div className="">
        <Character size={"no"} heading="Asoschi"/>
        <Character size={"no"} heading="slave_mg86@mail.ru"/>
        <Character size={"no"} heading="+998(97)-395-23-78"/>
        <Character size={"no"} heading="Samarqand viloyati, Urgut tumani"/>
       </div>
      </div>
      {/* data responsive */}
      <div className="data_responsive w-[800px] p-5 m-5 text-2xl bg-gradient-to-bl from-gray-800 to-gray-300 text-white ">
      <p>
      Prime Ta'lim o'quv markazi 2015-yildan buyon sifatli ta'lim berib kelmoqda va o'zining 10 yillik tajribasi bilan minglab o'quvchilarni ilm bilan ta'minlashda davom etmoqda.
      </p>
      <div className="aboutus_results">
        <h1  className="w-full text-center border-t-4 pt-2 mt-2">Bizning natijalar</h1>
        <Character size="full" heading="📌 700+ o'quvchi IELTS, CEFR sertifikatlarini qo'lga kiritgan"/>
        <Character size="full" heading="📌 700+ o'quvchi OTMga muvaffaqiyatli kirgan"/>
        <Character size="full" heading="📌 700+ yuqori malakali o'qituvchilar ta'lim bermoqda"/>
      </div>
      </div>
      {/* <PrimeTalimInfo/> */}

      </div>
    </section>
  )
}
