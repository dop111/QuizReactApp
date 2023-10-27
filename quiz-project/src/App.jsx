import {StartQuiz} from "./StartQuiz"
import {BgImages} from "./BgImages"
import QuizQuestion from "./QuizQuestion"
import "./App.css"
import { QuizQuestions } from "./QuizQuestions"

export function App() {

    const quizQuestionsColl = [
        <QuizQuestion question="How would one say goodbye in Spanish?" possibleAnswers={[{answer:"Adios",isHeld:false},{answer:"Hola",isHeld:false},{answer:"Au Revoir",isHeld:false},{answer:"Salir",isHeld:false}]} />,
        <QuizQuestion question="Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?" possibleAnswers={[{answer:"Cabbage Patch Kids",isHeld:false},{answer:"Transformers",isHeld:false},{answer:"Care Bears",isHeld:false},{answer:"Rubik’s Cube",isHeld:false}]} />,
        <QuizQuestion question="What is the hottest planet in our Solar System?" possibleAnswers={[{answer:"Adios",isHeld:false},{answer:"Hola",isHeld:false},{answer:"Au Revoir",isHeld:false},{answer:"Salir",isHeld:false}]} />,
        <QuizQuestion question="In which country was the caesar salad invented?" possibleAnswers={[{answer:"Adios",isHeld:false},{answer:"Hola",isHeld:false},{answer:"Au Revoir",isHeld:false},{answer:"Salir",isHeld:false}]} />,
        <QuizQuestion question="How Many Hearts Does An Octopus Have?" possibleAnswers={[{answer:"Adios",isHeld:false},{answer:"Hola",isHeld:false},{answer:"Au Revoir",isHeld:false},{answer:"Salir",isHeld:false}]} />
    ]

    return (
        <>
            <BgImages/>
            {/* <StartQuiz/> */}
            <QuizQuestions quizQuestions={quizQuestionsColl}/>
        </>
    )
}