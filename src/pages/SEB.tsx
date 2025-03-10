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
import { Button, Select, MenuItem, TextField, Card, CardContent } from "@mui/material";

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
  biology:biology,
  chemistry:chemistry
};

export default function SEB() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [option, setOption] = useState("");
  const [tests, setTests] = useState<ITEM[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string | null }>({});
  const [corrects, setCorrects] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (option in testOptions) {
      setTests(testOptions[option]);
      setSelectedAnswers({}); // Reset answers on test change
      setCorrects(0);
      setShowResults(false);
    }
  }, [option]);


  const handleStartTest=()=>{
    setIsRegistered(true)
    useEffect(() => {
      const header=document.getElementById("header") as HTMLElement;
      const footer=document.getElementById("footer") as HTMLElement;
      const main=document.getElementById("main") as HTMLElement;
      console.log(header,footer,main)
      header.style.display="none !important";
      footer.style.display="none";
      main.style.display="none";
    }, [])
  }

  function RenderTests({ tests }: { tests: ITEM[] }) {
    const handleClick = (index: number, chosenOption: string, correctAnswer: string) => {
      setSelectedAnswers((prev) => ({ ...prev, [index]: chosenOption }));
      if (chosenOption === correctAnswer) {
        setCorrects((prev) => prev + 1);
      }
    };

    return (
      <section className="w-full max-w-2xl mx-auto p-4">
        <h1 className="w-full text-4xl p-4 m-2 font-bold text-center text-white uppercase bg-gradient-to-r from-blue-500 to-purple-600 shadow-md rounded-lg">
          {option}
        </h1>
        {tests.map((item, index) => {
          const selected = selectedAnswers[index];
          return (
            <Card key={index} className="mb-6 shadow-lg">
              <CardContent>
                <h1 className="text-xl font-semibold text-blue-700">{item.level}</h1>
                <p className="mt-2 text-gray-700">{item.question}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.options.map((option, i) => {
                    const isCorrect = option === item.answer;
                    const isSelected = selected === option;
                    return (
                      <Button
                        key={i}
                        onClick={() => handleClick(index, option, item.answer)}
                        variant="contained"
                        style={{
                          backgroundColor:
                            selected && isSelected
                              ? isCorrect
                                ? "green"
                                : "red"
                              : "",
                          color: selected && isSelected ? "white" : "",
                        }}
                        className="!rounded-md"
                      >
                        {option}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() =>{
             setShowResults(true)

          }}
          className="mt-4 !rounded-md"
        >
          Finish Test
        </Button>
        {showResults && (
          <div className="mt-6 text-center text-white text-xl font-bold">
            Your Score: {corrects} / {tests.length}
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => setIsRegistered(false)}
              className="mt-4 !rounded-md"
            >
              Retake Test
            </Button>
            <a href="/"
              className="mt-4 !rounded-md bg-blue-500 p-2"
            >
            Asosiyga qaytish
            </a>
          </div>
        )
        }
      </section>
    );
  }

  return (
    <div className={`bg-gradient-to-bl seb_browser ${!isRegistered?"fixed w-screen h-screen  overflow-hidden":" w-screen h-fit absolute"} from-indigo-500 to-purple-700 min-h-screen flex items-center justify-center px-4`}>
      {!isRegistered ? (
        <Card className="w-full  max-w-md p-6 rounded-xl shadow-2xl text-white bg-white/10 backdrop-blur-lg">
          <h2 className="text-2xl font-bold text-center text-white">Ro'yxatdan o'tish</h2>
          <div className="mt-4 flex flex-col gap-4">
            <TextField label="Ismingizni kiriting" variant="outlined" fullWidth className="bg-white rounded-md" />
            <TextField label="Familiyangizni kiriting" variant="outlined" fullWidth className="bg-white rounded-md" />
            <TextField label="Maktabingizni kiriting" type="number" variant="outlined" fullWidth className="bg-white rounded-md" />
            <TextField label="Sinfingizni kiriting" type="number" variant="outlined" fullWidth className="bg-white rounded-md" />
            <TextField label="Telefon raqamingizni kiriting" type="number" variant="outlined" fullWidth className="bg-white rounded-md" />

            <Select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              displayEmpty
              className="bg-white rounded-md"
              fullWidth
            >
              <MenuItem disabled value="">-- Fan tanlang --</MenuItem>
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
              onClick={() => handleStartTest()}
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
