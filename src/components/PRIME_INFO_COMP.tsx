import { Card, Typography, Button } from "@mui/material";

export default function PrimeTalimInfo() {
  return (
    <Card className="w-80 p-6 shadow-lg rounded-lg  flex flex-col gap-4 bg-gray-700">
      
      <Typography variant="body1" className="text-gray-600 ">
        Prime Ta'lim o'quv markazi 2015-yildan buyon sifatli ta'lim berib kelmoqda va o'zining
        10 yillik tajribasi bilan minglab o'quvchilarni ilm bilan ta'minlashda davom etmoqda.
      </Typography>
      <Typography variant="h6" className="font-bold">Bizning Natijalar</Typography>
      <ul className="list-disc pl-4 text-gray-600">
        <li>📌 700+ o'quvchi IELTS, CEFR sertifikatlarini qo'lga kiritgan</li>
        <li>📌 700+ o'quvchi OTMga muvaffaqiyatli kirgan</li>
        <li>📌 700+ yuqori malakali o'qituvchilar ta'lim bermoqda</li>
      </ul>
      <Typography variant="h6" className="font-bold">Bizning Qulayliklarimiz</Typography>
      <ul className="list-disc pl-4 text-gray-600">
        <li>✅ Qulay joylashuv</li>
        <li>✅ Tajribali ustozlar</li>
        <li>✅ Sifatli ta’lim</li>
        <li>✅ Muntazam sinov imtihonlari</li>
        <li>✅ Hamyonbop narxlar</li>
      </ul>
      <Typography variant="h6" className="font-bold">Bizdagi kurslar</Typography>
      <ul className="list-disc pl-4 text-gray-600">
        <li>📚 Ingliz tili</li>
        <li>📚 Rus tili</li>
        <li>📚 Koreys tili</li>
        <li>📚 Arab tili</li>
        <li>📚 Ona tili va adabiyot</li>
        <li>📚 Matematika</li>
        <li>📚 Dasturlash</li>
      </ul>
      <Button variant="contained" color="primary" className="w-full">
        Bepul kirish darsiga yoziling
      </Button>
      <Typography variant="body2" className="text-gray-500 text-center">
        📍 Manzil: Urgut viloyati
      </Typography>
      <Typography variant="body2" className="text-gray-500 text-center">
        📞 Aloqa uchun: Telefon raqamingizni qoldiring
      </Typography>
    </Card>
  );
}
