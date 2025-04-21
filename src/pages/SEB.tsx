import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import TextField from "@mui/material/TextField";

const TestComponent = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    ismingiz: "",
    familiyangiz: "",
    maktab: "",
    sinf: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = () => {
    if (
      formData.ismingiz &&
      formData.familiyangiz &&
      formData.maktab &&
      formData.sinf
    ) {
      setIsRegistered(true);
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
    }
  };

  return (
    <div
      className={`bg-gradient-to-br ${
        !isRegistered ? "absolute w-full min-h-screen" : "w-full h-fit absolute"
      } from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center px-4 py-10`}
    >
      {!isRegistered ? (
        <Card className="w-full max-w-xl p-8 rounded-2xl shadow-2xl text-white bg-white/20 backdrop-blur-xl border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Ro'yxatdan o'tish
          </h2>
          <div className="flex flex-col gap-4">
            <TextField
              required
              name="ismingiz"
              label="Ismingiz"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />
            <TextField
              required
              name="familiyangiz"
              label="Familiyangiz"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />
            <TextField
              required
              name="maktab"
              label="Maktab raqami"
              type="number"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />
            <TextField
              required
              name="sinf"
              label="Sinf"
              type="number"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />
            <button
              onClick={handleRegister}
              className="mt-4 py-3 px-6 bg-white text-purple-700 font-semibold rounded-xl shadow-md hover:bg-purple-100 transition"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </Card>
      ) : (
        <div className="text-white text-center p-10 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Xush kelibsiz, {formData.ismingiz}!</h2>
          <p className="text-lg">Test boshlanishi uchun tayyormisiz?</p>
          {/* You can add the test section here */}
        </div>
      )}
    </div>
  );
};

export default TestComponent;
