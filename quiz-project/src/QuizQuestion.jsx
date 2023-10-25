import "./QuizQuestion.css"

function AnswerOption(props) {
    return (
        <button className="answer-option">{props.answer}</button>
    )
}

export default function QuizQuestion(props) {

    const answerOptions = props.possibleAnswers.map((possibleAnswer) => <AnswerOption answer={possibleAnswer} />)

    return (
        <>
        <div className="quiz">
            <h2>{props.question}</h2>
            <div className="answer-options">
                {answerOptions}
            </div>
        </div>
        <hr className="quiz-line"></hr>
        </>    
    )
}