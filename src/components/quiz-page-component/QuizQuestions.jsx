import { useState, useEffect, useRef } from "react";
import "./scss/quiz-questions.scss";

function QuizQuestions({ data, submitFunction, userAns }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitText, setSubmitText] = useState("Submit")
  const selectedOptions = useRef([]);

  function handleSelection(index, e) {
    selectedOptions.current[currentQuestion] = index;
    userAns.current[currentQuestion] = e.target.value;
    setSelected(index);
  }

  function navBg(i) {
    if (currentQuestion === i) {
      return "rgb(0, 85, 134)";
    } else if (
      currentQuestion !== i &&
      selectedOptions.current[i] !== undefined
    ) {
      return "rgb(0, 145, 7)";
    } else {
      return "rgb(216, 216, 216)";
    }
  }

  useEffect(() => {
    setSelected(null);
  }, [currentQuestion]);

  function prevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  function nextQuestion() {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }
  return (
    <div className="quiz-main-content">
      <main className="quiz-content">
        <h2 className="question">{data[currentQuestion].question}</h2>

        <ul className="options">
          {data[currentQuestion].options.map((item, index) => {
            return (
              <li key={`${item}-${index}`}>
                <label
                  style={{
                    background:
                      selected === index ||
                      selectedOptions.current[currentQuestion] === index
                        ? "rgb(0, 105, 0)"
                        : "rgb(0, 0, 37)",
                  }}
                  htmlFor={`opt${index}`}
                >
                  {item}
                  <input
                    onChange={(e) => handleSelection(index, e)}
                    type="radio"
                    value={item}
                    name={`optionsAt${currentQuestion}`}
                    id={`opt${index}`}
                  />
                </label>
              </li>
            );
          })}
        </ul>

        <nav className="question-nav">
          {currentQuestion !== 0 && (
            <button onClick={prevQuestion}>Prev</button>
          )}
          {currentQuestion < data.length - 1 ? (
            <button onClick={nextQuestion}>Next</button>
          ) : (
            <button onClick={()=>{
              setSubmitText("Submiting...")
              submitFunction()
            }}>{submitText}</button>
          )}
        </nav>
      </main>

      <aside>
        <nav className="jump-to-question">
          {data.map((item, index) => {
            return (
              <button
                style={{
                  background: navBg(index),
                }}
                onClick={() => setCurrentQuestion(index)}
                key={`${Math.random() * index} navigNum`}
                className="nav-nums"
              >
                {index + 1}
              </button>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}

export default QuizQuestions;
