import "./QuizQuestion.css"
import ReactHtmlParser from 'html-react-parser';
import { useEffect, useState } from "react"

function AnswerOption(props) {

    //default style
    let style = props.isSelected?{
        backgroundColor: "#D6DBF5",
        borderStyle: "0.794px solid #D6DBF5"
    }:{
        backgroundColor: "#F5F7FB",
    }

    function getStyle() {
        if (props.isCorrect && props.isScored) {
            style = 
            {
                borderStyle : "none",
                backgroundColor: "#94D7A2"
            }
        } else if (props.isScored && props.isSelected) {
            style = {
                borderStyle : "none",
                backgroundColor: "#F8BCBC"
            }
        }

        return style;
    }

    function handleClick() {
        props.holdAnswer(props.question,props.answer)
    }

    return (
        <button className="answer-option" onClick={(event) => handleClick()} style={getStyle()}>{ReactHtmlParser(props.answer.answer)}</button>
    )
}

export default function QuizQuestion(props) {

    const answerComponents = props.question.allAnswersShuffled.map((possibleAnswer) => <AnswerOption key={ReactHtmlParser(possibleAnswer.answer)} answer={possibleAnswer} isSelected={possibleAnswer.isSelected}
    holdAnswer={props.selectAnswer} question={props.question} isCorrect={props.question.correct_answer === possibleAnswer.answer} isScored={props.isScored}/>)
    
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