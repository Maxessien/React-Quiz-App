import { useState } from 'react';
import './quiz-intro.css'

function QuizIntro({fetchFunc}) {
    const [loadingState, setLoadingState] = useState("Start Quiz")

    const handleClick = ()=>{
        setLoadingState("Loading...")
        fetchFunc()
    }
  return (
    <>
      <section className="intro-content">
        <h1>CSC 112 LECTURE 1 QUIZ</h1>
        <div className="overview">
          <p>Time: 20 minutes</p>
          <p>Questions: 15</p>
        </div>

        <form className="registry">
          <label htmlFor="userName">Enter Username(Optional)</label>
          <input type="text" id="userName" placeholder="e.g Micheal" />
        </form>

        <article className="guidelines">
          <h2>Guidelines</h2>
          <ul className="guide-list">
            <li className="guide-list-items">
              <span>1.</span>
              <span>
                Each question is a multiple choice question with three options.
              </span>
            </li>
            <li className="guide-list-items">
              <span>2.</span>
              <span>
                Once the timer above the questions ends the quiz will
                auto-submit.
              </span>
            </li>
            <li className="guide-list-items">
              <span>3.</span>
              <span>
                Navigate through the quiz via the "Next" and "Prev" buttons or
                through the nav tab-below (for mobile) or beside (for desktop).
              </span>
            </li>
          </ul>
        </article>

        <button onClick={handleClick} className="start">{loadingState}</button>
      </section>
    </>
  );
}

export default QuizIntro