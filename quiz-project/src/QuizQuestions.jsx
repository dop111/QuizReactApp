import { useState } from "react"
import "./QuizQuestions.css"
import QuizQuestion from "./QuizQuestion"

function QuizResult(props) {

    const [answersChecked,setAnswersChecked] = useState(false)

    function changeAnswersState() {
        setAnswersChecked((checked) => !checked)
    }

    return (
        <div id="resultsContainer">
            {!answersChecked&&<button type="button" id="checkAnswerBtn" onClick={changeAnswersState}>Check answers</button>}
            {answersChecked&&<h3 id="resultsText">You scored 3/{props.nbrOfQuestions} correct answers</h3>}
            {answersChecked&&<button id="resultsPlayAgainBtn" type="button" onClick={changeAnswersState}>Play again</button>}
        </div>
    )
}

export function QuizQuestions(props) {

    const [quizQuestionDisplayable, setQuizQuestionObjects] = useState(props.quizQuestions)
    
    function selectAnswer(questionParam, answer, setBtnStyleCallBack) {
        function selectAnswerOnQuestionHelper(question,answer) {
            return (
                {
                    ...question,
                    correct_answer: question.correct_answer.answer==answer.answer?selectAnswer(question.correct_answer):question.correct_answer,
                    incorrect_answers: selectAnswerFromArrayHelper(question.incorrect_answers,answer)
                }
            )
        }
        
        function selectAnswerFromArrayHelper(answers, selectedAnswer) {
            return (answers.map(
                (answer) => answer.answer==selectedAnswer.answer?selectAnswerHelper(answer):answer
            ))
        }

        function selectAnswerHelper(answer) {
            return {...answer, isSelected:!answer.isSelected}
        }

        setQuizQuestionObjects(
            (displayableQs) => {
                setBtnStyleCallBack()
                displayableQs.map((q)=> q.question == questionParam.question?selectAnswerOnQuestionHelper(questionParam,answer):q)
            }
        )
    }

    function makeQuestionComponents() {
        return props.quizQuestions.map(
            (question) => {
                return <QuizQuestion key={question.question} question={question} selectAnswer={selectAnswer} />
            }
        )
    }

    return (
        <div className="quizQuestions">
            {makeQuestionComponents()}
            <QuizResult nbrOfQuestions={props.quizQuestions.length}/>
        </div>
    )
}