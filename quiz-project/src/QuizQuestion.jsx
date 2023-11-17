import "./QuizQuestion.css"
import ReactHtmlParser from 'html-react-parser';
import { useState } from "react"

function AnswerOption(props) {

    console.log("AnswerOption Rendered")

    const style = props.isSelected?{
        backgroundColor: "#D6DBF5",
        borderStyle: "0.794px solid #D6DBF5"
    }:{
        backgroundColor: "#F5F7FB",
        borderStyle: "0.794px solid #F5F7FB"
    }

    function handleClick(e) {
        props.holdAnswer(props.question,props.answer)
    }

    return (
        <button className="answer-option" onClick={(error) => handleClick(error)} style={style}>{ReactHtmlParser(props.answer.answer)}</button>
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