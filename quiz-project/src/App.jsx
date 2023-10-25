import {StartQuiz} from "./StartQuiz"
import {BgImages} from "./BgImages"
import QuizQuestion from "./QuizQuestion"
import "./App.css"

export function App() {
    return (
        <>
            <BgImages/>
            {/* <StartQuiz/> */}
            
            <div id="QuizQuestions-Section">
                <QuizQuestion question="How would one say goodbye in Spanish?" possibleAnswers={["Adios","Hola","Au Revoir","Salir"]} />
                <QuizQuestion question="Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?" possibleAnswers={["Cabbage Patch Kids","Transformers","Care Bears","Rubik’s Cube"]} />
                <QuizQuestion question="What is the hottest planet in our Solar System?" possibleAnswers={["Adios","Hola","Au Revoir","Salir"]} />
                <QuizQuestion question="In which country was the caesar salad invented?" possibleAnswers={["Adios","Hola","Au Revoir","Salir"]} />
                <QuizQuestion question="How Many Hearts Does An Octopus Have?" possibleAnswers={["Adios","Hola","Au Revoir","Salir"]} />
            </div>
            

        </>
    )
}