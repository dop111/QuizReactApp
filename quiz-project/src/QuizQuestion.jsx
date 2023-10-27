import { useState } from "react"
import "./QuizQuestion.css"

function AnswerOption(props) {

    const heldStyle = {
        backgroundColor: props.isHeld?"#D6DBF5":"#F5F7FB",
        borderStyle: props.isHeld?"0.794px solid #D6DBF5":"0.794px solid #F5F7FB"
    }

    return (
        <button className="answer-option" onClick={props.holdAnswer} style={heldStyle}>{props.answer}</button>
    )
}

export default function QuizQuestion(props) {

    const [possibleAnswers, setPossibleAnswers] = useState(props.possibleAnswers)

    function holdSelectedAnswer(id) {
        setPossibleAnswers(
            () => {
                return (
                    possibleAnswers.map((prevAnswer)=>prevAnswer.answer == id?{...prevAnswer,isHeld:!prevAnswer.isHeld}:prevAnswer)
                )
            }
        )
    }

    const answerOptions = possibleAnswers.map((possibleAnswer) => <AnswerOption key={props.answer} answer={possibleAnswer.answer} isHeld={possibleAnswer.isHeld}
    holdAnswer={()=>holdSelectedAnswer(possibleAnswer.answer)}/>)

    return (
        <>
        <div className="quiz">
            <h2>{props.question}</h2>
            <div className="answer-options">
                {answerOptions}
            </div>
            <hr></hr>
        </div>
        </>    
    )
}