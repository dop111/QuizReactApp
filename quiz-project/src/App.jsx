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
    
    //Race condition? useEffect is run after rendering so

    useEffect(
        () => {
            const abortController = new AbortController();

            const fetchQuestions = async () => {
                try {
                    const res = await fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple", {signal : abortController.signal})
                    console.log(res)
                    setQuestions(() => changeRawQsToDisplayable(res.results))
                } catch (error) {
                    // ℹ️: The error name is "CanceledError" for Axios.
                    if (error.name !== "AbortError") {
                        /* Logic for non-aborted error handling goes here. */
                    }
                }
            }

            fetchQuestions()

            return () => abortController.abort();
        }
    ,[])

    console.log("App Rendered, qustions fetched: " + !!questions)

    return (
        <>
            <BgImages/>
            {/* <StartQuiz/> */}
            <QuizQuestions quizQuestions={questions}/>
        </>
    )
}