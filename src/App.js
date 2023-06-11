import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let arr = [
  {
    title: "Dağ 1",
    par: "Açıklama 1",
  },
  {
    title: "Dağ 2",
    par: "Açıklama 2",
  },
  {
    title: "Dağ 3",
    par: "Açıklama 3",
  },
];

const App = () => {
  const [lesson, setLesson] = useState(11);
  return (
    <div>
      <h1>Başlık</h1>
      <h2>Ders {lesson}</h2>
      <button
        onClick={() => {
          setLesson(lesson - 1);
        }}
      >
        Azalt
      </button>
      <button
        onClick={() => {
          setLesson(lesson + 1);
        }}
      >
        Arttır
      </button>
      <button
        onClick={() => {
          setLesson(100);
        }}
      >
        100 Yap
      </button>
      <p> Başlangıç!</p>
      <div className="Cards">
        {arr.map(({ par, title }, i) => (
          <Card
            key={`index ${i}`}
            title={title}
            par={par}
            lesson={lesson}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
