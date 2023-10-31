import "./QuizQuestion.css"
import ReactHtmlParser from 'html-react-parser';
import { useState } from "react"

function AnswerOption(props) {

    const [selected, setSelected] = useState(props.isSelected)

    function changeSelected() {
        setSelected(
            (prevSelected) => !prevSelected
        )
    }

    const heldStyle = {
        backgroundColor: selected?"#D6DBF5":"#F5F7FB",
        borderStyle: selected?"0.794px solid #D6DBF5":"0.794px solid #F5F7FB"
    }

    return (
        <button className="answer-option" onClick={()=>props.holdAnswer(props.question,props.answer,changeSelected)} style={heldStyle}>{ReactHtmlParser(props.answer.answer)}</button>
    )
}

export default function QuizQuestion(props) {

    const answers = props.question.incorrect_answers.concat([props.question.correct_answer])
    const answerComponents = answers.map((possibleAnswer) => <AnswerOption key={ReactHtmlParser(possibleAnswer.answer)} answer={possibleAnswer} isSelected={possibleAnswer.isSelected}
    holdAnswer={props.selectAnswer} question={props.question}/>)

    return (
        <>
        <div className="quiz">
            <h2>{ReactHtmlParser(props.question.question)}</h2>
            <div className="answer-options">
                {answerComponents}
            </div>
            <hr></hr>
        </div>
        </>    
    )
}