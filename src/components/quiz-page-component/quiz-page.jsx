import { useRef, useState } from "react";
import QuizHeader from "./quiz-header";
import QuizQuestions from "./quiz-questions";
import QuizIntro from "./quiz-intro";
import Results from "../Results/result-page";

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const userAnswers = useRef([]);

  async function fetchQuestions() {
    try {
      const fetched = await fetch(
        "https://raw.githubusercontent.com/Maxessien/Test-API-Fetch-/main/test.json"
      );
      // const fetched = await fetch("/questions.json");
      const data = await fetched.json();
      setQuestions(data);
      for (let i = 0; i < data.length; i++) {
        userAnswers.current[i] = "No Answer";
      }
      console.log(userAnswers);
    } catch (error) {
      console.error(error);
    }
  }

  async function submitQuiz() {
    try {
      const fetchedAns = await fetch("/answers.json");
      const answersData = await fetchedAns.json();
      setCorrectAnswers(answersData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {submitted ? (
        <Results answersData={correctAnswers} userAnswers={userAnswers} />
      ) : (
        <>
          {!questions || questions.length === 0 ? (
            <QuizIntro fetchFunc={fetchQuestions} />
          ) : (
            <div>
              <QuizHeader submitFunction={submitQuiz} />
              <QuizQuestions
                data={questions}
                submitFunction={submitQuiz}
                userAns={userAnswers}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default QuizPage;
