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

    //Fisher-Yates (aka Knuth) Shuffle algorithm
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    function changeRawQsToDisplayable(rawQs) {
        if (rawQs === undefined) {
            return
        }

        return (rawQs.map(
            (rawQuestion) => {
                return {
                    ...rawQuestion,
                    allAnswersShuffled : shuffle(rawQuestion.incorrect_answers.map((ans)=>turnAnswerToObjectHelper(ans)).concat([turnAnswerToObjectHelper(rawQuestion.correct_answer)])),
                    getSelectedAnswer() { return this.allAnswersShuffled.filter((a)=>a.isSelected)}
                    }
                }   
            )
        )
    }

    //Abort on first call if useEffect is called twice (i.e. strictMode) - avoid API throwing "Too many requests" error
    useEffect(
        () => {
            const abortController = new AbortController();

            const fetchQuestions = async () => {
                try {
                    const res = await fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple", {signal : abortController.signal})
                    res.json().then((data) => setQuestions(() => changeRawQsToDisplayable(data.results)))
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

    return (
        <>
            <BgImages/>
            {/* <StartQuiz/> */}
            <QuizQuestions quizQuestions={questions}/>
        </>
    )
}