import {StartQuiz} from "./StartQuiz"
import {BgImages} from "./BgImages"
import "./App.css"
import { QuizQuestions } from "./QuizQuestions"
import {useEffect, useState } from "react"

export function App() {
    
    const [questions, setQuestions] = useState([])

    function turnAnswerToObjectHelper(s) {
        return {answer:s,isSelected:false}
    }

    function changeRawQsToDisplayable(rawQs) {
        return (rawQs.map(
            (rawQuestion) => {
                return {
                    ...rawQuestion,
                    correct_answer: turnAnswerToObjectHelper(rawQuestion.correct_answer),
                    incorrect_answers: rawQuestion.incorrect_answers.map((ans)=>turnAnswerToObjectHelper(ans))
                    }
                }   
            )
        )
    }

    useEffect(
        () => {
            fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple")
            .then((res)=>res.json())
            .then((data) => console.log(setQuestions(changeRawQsToDisplayable(data.results))))
        }
    ,[])

    return (
        <>
            <BgImages/>
            {/* <StartQuiz/> */}
            <QuizQuestions quizQuestions={questions}/>
        </>
    )
}