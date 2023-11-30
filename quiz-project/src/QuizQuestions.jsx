import { useState, useEffect } from "react"
import "./QuizQuestions.css"
import QuizQuestion from "./QuizQuestion"

function QuizResult(props) {

    function clickHandler() {
        props.scoreFunction((prevScored) => !prevScored)
    }

    function playAgainClickHandler() {
        //Re-render App.jsx (get new questions)
        props.setGameState((prevState) => {
            return prevState==="Started"?"StartedAgain":"Started"
        })
    }

    function countCorrect() {
        return props.questions.filter(
            (q)=>{
                return q.getSelectedAnswer().length>0?q.getSelectedAnswer()[0].answer === q.correct_answer:false
            }
        ).length
    }

    return (
        <div id="resultsContainer">
            {!props.scored&&<button type="button" id="checkAnswerBtn" onClick={clickHandler}>Check answers</button>}
            {props.scored&&<h3 id="resultsText">You scored {countCorrect()}/{props.questions.length} correct answers</h3>}
            {props.scored&&<button id="resultsPlayAgainBtn" type="button" onClick={playAgainClickHandler}>Play again</button>}
        </div>
    )
}

export function QuizQuestions(props) {

    const [quizQuestionsDisplayable, setQuizQuestionObjects] = useState(props.quizQuestions)
    const [isScored, setIsScored] = useState(false)

    //Update the state (useState will only initialize the first time around - this will make sure it's updated even if it's null first time)
    useEffect(() => {
        if (props.quizQuestions) {
            setQuizQuestionObjects(props.quizQuestions)
            setIsScored(false)
        }
      }, [props.quizQuestions])

    function selectAnswer(questionParam, answer) {

        if (isScored) {
            return;
        }

        function selectAnswerOnQuestionHelper(question,answer) {
            return (
                {
                    ...question,
                    allAnswersShuffled : selectAnswerFromArrayHelper(question.allAnswersShuffled,answer)
                }
            )
        }
        
        function selectAnswerFromArrayHelper(answers, selectedAnswer) {
            return (answers.map(
                (answer) => answer.answer==selectedAnswer.answer?selectAnswerHelper(answer):{...answer, isSelected:false}
            ))
        }

        function selectAnswerHelper(answer) {
            return {...answer, isSelected:!answer.isSelected}
        }

        setQuizQuestionObjects(
            (stateToUpdate) => {
                return stateToUpdate.map((q)=> q.question == questionParam.question?selectAnswerOnQuestionHelper(questionParam,answer):q)
            }
        )
    }

    function makeQuestionComponents() {
        return quizQuestionsDisplayable.map(
            (question) => {
                return <QuizQuestion key={question.question} question={question} selectAnswer={selectAnswer} isScored={isScored} />
            }
        )
    }

    return (
        <div className="quizQuestions">
            {makeQuestionComponents()}
            <QuizResult scoreFunction={setIsScored} scored={isScored} questions={quizQuestionsDisplayable} setGameState={props.setGameState}/>
        </div>
    )
}