import "./StartQuiz.css"


export function StartQuiz(props) {

    function clickHandler() {
        props.setGameState("Started")
    }

    return (
        <>
            <div id="StartQuizContainer">
                <h1>Quizzical</h1>
                <h3>Some description if needed</h3>
                <button tye="Button" onClick={clickHandler}>Start Quiz</button>
            </div>  
        </>
         
    )
}