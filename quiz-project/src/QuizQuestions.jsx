import { useState } from "react"
import "./QuizQuestions.css"

function QuizQuestionResult(props) {

    const [answersChecked,setAnswersChecked] = useState(false)

    function changeAnswersState() {
        setAnswersChecked((checked) => !checked)
    }

    return (
        <div id="resultsContainer">
            {!answersChecked&&<button type="button" id="checkAnswerBtn" onClick={changeAnswersState}>Check answers</button>}
            {answersChecked&&<h3 id="resultsText">You scored 3/5 correct answers</h3>}
            {answersChecked&&<button id="resultsPlayAgainBtn" type="button" onClick={changeAnswersState}>Play again</button>}
        </div>
    )
}

export function QuizQuestions(props) {
    return (
        <div className="quizQuestions">
            {props.quizQuestions}
            <QuizQuestionResult/>
        </div>
    )
}