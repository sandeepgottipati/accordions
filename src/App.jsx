import data from "./data";
import Questions from "./components/Questions";
import { useState } from "react";
const App = () => {
  const [questionsData, setQuestionsData] = useState(data);
  console.log(questionsData);
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questionsData.map((item) => {
          return <Questions {...item} key={item.id} />;
        })}
      </section>
    </main>
  );
};
export default App;
