import { Button } from '@mui/material'
import Card from '../components/Card'
import Item_Card from '../components/Item_Card'
import Class from '../components/Class'
import "./responsive.css"

export default function Home() {
  return (
    <section className='w-full'>
  <div className="main_main_img relative flex flex-col items-center justify-center w-full h-[800px] md:h-[600px] sm:h-[400px] gap-8 sm:gap-4 rounded-md border-4 p-20 sm:p-10 bg-cover bg-no-repeat bg-[url('/web.jpg')] hover:border-0 transition-all duration-500">
    
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 rounded-md"></div>

    {/* Content */}
    <h1 className="relative text-white text-6xl  text-center font-extrabold drop-shadow-lg">
      Prime Ta'lim o'quv markaziga xush kelibsiz!
    </h1>

    <p className="relative text-white text-2xl md:text-xl sm:text-lg w-[80%] md:w-[70%] sm:w-[90%] text-center drop-shadow-md">
      Prime Ta'lim o'quv markazi 2015 yildan buyon o'quvchilarga sifatli talim berib kelmoqda.
    </p>

    {/* Button */}
    <Button 
      variant="contained" 
      type="button" 
      color="warning"
      className="relative transition-transform transform hover:scale-110 hover:bg-orange-600 shadow-lg"
    >
      Aloqaga chiqish
    </Button>
  </div>


    {/* results part */}
    <section className='results_part w-full flex flex-col items-center justify-center py-20'>
        <h1 className='text-3xl uppercase text-orange-500 font-bold'>Bizning Natijalar</h1>
        <div className='flex items-center justify-between w-[80%] gap-5 mx-auto pt-20'>
                {/* <img src="/reading.svg" alt="" /> */}
                <Card source='/reading.svg' field='Students' number={700}/>
                <Card source='/reading.svg' field='IELTS' number={700}/>
                <Card source='/reading.svg' field="CEFR" number={700}/>
                <Card source='/reading.svg' field="Teachers" number={700}/>
                <Card source='/reading.svg' field="OTM" number={700}/>
        </div>
    </section>
    <section className='main_comforts w-full flex flex-col items-center justify-centet   gap-10'>
        <h1 className='w-full text-center font-bold text-orange-700 text-4xl uppercase'>Bizning Qulayliklarimiz</h1>
        <div className='w-[90%] flex flex-wrap items-center justify-between  bg-orange-200 p-10 mb-10 text-black'>
            <Item_Card heading='Joylashuv' data='Qulay joylashuv'></Item_Card>
            <Item_Card heading='Ustozlar' data="Yuqori malakali, xalqaro sertifikatga ega o'qituvchilar"></Item_Card>
            <Item_Card heading='Sifat' data='Yuqori sifat va natija ustuvorligi'></Item_Card>
            <Item_Card heading="O'quv tizimi" data='Cambride stardardlari asosida tashkillashtirilgan darslar'></Item_Card>
            <Item_Card heading='Sinov Imtihonlari' data='Har bir darajadan song Cambridge English Scale boyicha testlar olinadi'></Item_Card>
            <Item_Card heading='Narxlar' data='Hamyonbob narxlar'></Item_Card>
        </div>
    </section>
    <section className='main_courses w-full flex flex-col items-center justify-between gap-10'>
        <h1 className='w-full text-center font-bold text-orange-700 text-4xl '>Bizdagi kurslar</h1>
        <div className='w-[90%] flex flex-row flex-wrap items-center justify-between gap-10  bg-orange-500 p-10 mb-10 text-black rounded-md'>
            <Class classs='Ingliz tili'  type='language'/>
            <Class classs='Rus tili'  type='language'/>
            <Class classs='Koreys tili'  type='language'/>
            <Class classs='Arab tili'  type='language'/>
            <Class classs='Ona tili va Adabiyot'  type='language'/>
            <Class classs='Matematika'  type='math'/>
            <Class classs='Dasturlash'  type='code'/>
            </div>
    </section>
    <section className='main_contact w-[80%] mx-auto bg-cover rounded-[20px] bg-no-repeat min-h-[600px] bg-[url("contact_form_bg.png")] relative  mb-10'>
    <form className='w-[600px] text-white  ml-auto min-h-[550px] absolute right-0 bottom-0 rounded-md flex flex-col gap-5 items-start justify-center p-14 bg-gray-600'>
    <h1 className='text-white text-4xl'>Aloqaga chiqish</h1>
    <p className='text-xl'>Bepul kirish darsiga yoziling</p>      
    <div className='flex flex-col gap-5 p-0 items-start justify-start w-full'>
    <input className='w-[100%] p-2 border-2 border-white py-2 text-white bg-gray-700' type='text' placeholder='Ismingizni kiriting: '></input>
    <input className='w-[100%] p-2 border-2 border-white py-2 text-white bg-gray-700' type="text" placeholder='Familiyangizni kiriting' />  
    <input className='w-[100%] p-2 border-2 border-white py-2 text-white bg-gray-700' type="number" placeholder='Telefon raqamingizni kiriting' />  
    <select className='w-full border-2 border-white p-2' name="school" id="school">
        <option value={undefined} selected disabled>--Maktabingizni tanlang:</option>
        {[1,2,3,4,5,6,7,8,9,10,11,"Tugatganman"].map((item,index)=><option className='option bg-gray-900' value={item}>{item}</option>)}
    </select>
    <input className='w-[100%] p-2 border-2 border-white py-2 text-white bg-gray-700' type="number" placeholder='Maktabingizni raqamini kiriting: ' />  
    <input className='w-[100%] p-2 border-2 border-white py-2 text-white bg-gray-700' type="number" placeholder='telefon raqamingizni kiriting' />  
    </div>

    </form>
    </section>
    </section>
  )
}
