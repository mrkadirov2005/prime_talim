import { useState, useEffect } from "react";
import "./responsive.css";
import english_test from "./tests/english.json";
import russian_test from "./tests/Russian.json";
import arabic_test from "./tests/arabic.json";
import uzbek_test from "./tests/uzbek.json";
import IQ_test from "./tests/IQ.json";
import IT_test from "./tests/IT.json";
import Math_test from "./tests/Math.json";
import biology from "./tests/biology.json";
import chemistry from "./tests/chemistry.json";
import {
  Button,
  Select,
  MenuItem,
  TextField,
  Card,
  CardContent,
} from "@mui/material";

// Interface for quiz items
interface ITEM {
  level: string;
  question: string;
  options: string[];
  answer: string;
}

const testOptions: Record<string, ITEM[]> = {
  english: english_test,
  russian: russian_test,
  arabic: arabic_test,
  uzbek: uzbek_test,
  it: IT_test,
  iq: IQ_test,
  math: Math_test,
  biology: biology,
  chemistry: chemistry,
};

export default function SEB() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [option, setOption] = useState("");
  const [tests, setTests] = useState<ITEM[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string | null;
  }>({});
  const [corrects, setCorrects] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);

  const [userData, setUserData] = useState({
    ismingiz: "",
    familiyangiz: "",
    maktab: "",
    sinf: "",
    telefon: "",
    fan: "",
    corrects: 0,
  });

  useEffect(() => {
    if (option in testOptions) {
      setTests(testOptions[option]);
      setSelectedAnswers({});
      setCorrects(0);
      setShowResults(false);
    }

    setUserData((prev) => ({ ...prev, fan: option }));
  }, [option]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleStartTest = async () => {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwSSuEwVP-GVO-Xl56C-EcsCMJm6NOqkfOyTCXTojiR02X7-N27KGKu86lKu6j4aOhuUQ/exec",
      {
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        method: "POST",
      }
    );
    setIsRegistered(true);
  };

  function RenderTests({ tests }: { tests: ITEM[] }) {
    const handleClick = (
      index: number,
      chosenOption: string,
      correctAnswer: string
    ) => {
      if (selectedAnswers[index] !== undefined) return;
      setSelectedAnswers((prev) => ({ ...prev, [index]: chosenOption }));
      if (chosenOption === correctAnswer) {
        setCorrects((prev) => prev + 1);
      }
    };

    const handleFinishTest = async () => {
      userData.corrects = corrects;
      await fetch(
        "https://script.google.com/macros/s/AKfycbzJPIJNTpphfbdzvo2nUMF3ZEkF4t_U-EwNsF6BWM8n1A9_-NjT86BfnIas4Z6vqbPXKA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
          mode: "no-cors",
        }
      );
      setShowResults(true);
    };

    return (
      <section className="w-full max-w-2xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-white uppercase bg-gradient-to-r from-blue-500 to-purple-600 shadow-md rounded-lg p-4 mb-6">
          {option}
        </h1>

        {tests.map((item, index) => {
          const selected = selectedAnswers[index];
          return (
            <Card key={index} className="mb-6 shadow-lg">
              <CardContent>
                <h1 className="text-xl font-semibold text-blue-700">
                  {item.level}
                </h1>
                <p className="mt-2 text-gray-700">{item.question}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.options.map((opt, i) => {
                    const isCorrect = opt === item.answer;
                    const isSelected = selected === opt;
                    return (
                      <button
                        key={i}
                        onClick={() => handleClick(index, opt, item.answer)}
                        disabled={selected !== undefined}
                        className={`p-2 m-2 rounded-md text-white ${
                          isSelected
                            ? isCorrect
                              ? "bg-green-600"
                              : "bg-red-600"
                            : "bg-blue-700"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {!showResults && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleFinishTest}
            className="mt-4 !rounded-md"
          >
            Testni yakunlash
          </Button>
        )}

        {showResults && (
          <div className="fixed inset-0 z-50 bg-white flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-gradient-to-tr from-green-400 to-green-600 text-white rounded-xl shadow-xl p-6 text-center space-y-4">
              <div className="bg-orange-500 py-2 px-4 rounded-md text-lg font-semibold">
                {corrects > tests.length / 2 ? "Wow," : "Hmm,"}{" "}
                {userData.ismingiz} {userData.familiyangiz}
              </div>

              <h1 className="text-xl md:text-2xl font-bold bg-orange-600 p-3 rounded-lg">
                Sizning balingiz: {corrects} / {tests.length}
              </h1>

              <div className="space-y-2">
                <Button
                  color="secondary"
                  title={
                    corrects > tests.length / 2
                      ? "Good"
                      : "You have to work hard!"
                  }
                  variant="contained"
                >
                  Sizning darajangiz —
                  <Button variant="contained" color="primary" className="ml-2">
                    {option === "english"
                      ? corrects < 5
                        ? "A1"
                        : corrects < 14
                        ? "A2"
                        : corrects < 24
                        ? "B1"
                        : corrects < 30
                        ? "B2"
                        : "C1"
                      : corrects < tests.length / 4
                      ? "A1"
                      : corrects < (tests.length / 4) * 2
                      ? "A2"
                      : corrects < (tests.length / 4) * 3
                      ? "B1"
                      : "B2"}
                  </Button>
                </Button>
              </div>

              <div className="flex flex-col md:flex-row gap-3 justify-center mt-4">
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={() => setIsRegistered(false)}
                  className="!rounded-md"
                >
                  Qayta topshirish
                </Button>
                <a
                  href="/"
                  className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md"
                >
                  Asosiyga qaytish
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <div
      className={`bg-gradient-to-bl seb_browser ${
        !isRegistered
          ? "absolute min-w-screen min-h-screen overflow-hidden"
          : "w-screen h-fit absolute"
      } from-indigo-500 to-purple-700 min-h-screen flex items-center justify-center px-4`}
    >
      {!isRegistered ? (
        <Card className="w-full max-w-md p-6 rounded-xl shadow-2xl text-white bg-white/10 backdrop-blur-lg">
          <h2 className="text-2xl font-bold text-center text-white">
            Ro'yxatdan o'tish
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            <TextField
              required
              name="ismingiz"
              label="Ismingizni kiriting"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />
            <TextField
              required
              name="familiyangiz"
              label="Familiyangizni kiriting"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />
            <TextField
              required
              name="maktab"
              label="Maktabingizni kiriting"
              type="number"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />
            <TextField
              required
              name="sinf"
              label="Sinfingizni kiriting"
              type="number"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />
            <TextField
              required
              name="telefon"
              label="Telefon raqamingizni kiriting"
              type="number"
              variant="outlined"
              fullWidth
              className="bg-white rounded-md"
              onChange={handleInputChange}
            />

            <Button className="mr-auto">Fanni tanlang</Button>
            <Select
              required
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="bg-white rounded-md"
              fullWidth
            >
              {Object.keys(testOptions).map((key) => (
                <MenuItem key={key} value={key}>
                  {key.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleStartTest}
              className="!rounded-md"
            >
              Boshlash
            </Button>
          </div>
        </Card>
      ) : (
        <div className="w-full flex">
          <RenderTests tests={tests} />
        </div>
      )}
    </div>
  );
}
