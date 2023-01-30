import React, { useState } from 'react'


import { Questions } from './Questions'

import * as FaIcons from "react-icons/fa"

import "./quiz.css"

function Quiz() {

    const [shown, setShown] = useState(true)
    const [hidden, setHidden] = useState(true)
    const [quiz, setQuiz] = useState(true)

    const handleClick = () => {
        setHidden(!hidden)
        setShown(!shown)

    }

    const clickChange = () => {
        setHidden(!hidden)
        setShown(false)
        setQuiz(!quiz)
    }

    const exitChange = () => {
        setShown(true)
        setHidden(true)
        setQuiz(!quiz)
        restartGame();
    }

    const [curentQuestion, setCurentQuestion] = useState(0);
    const [score, setScore] = useState(0)

    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)

    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setClicked(true);

    }

    const handleNextQuestion = () => {

        setClicked(false);
        if (curentQuestion < Questions.length - 1) {
            setCurentQuestion(curentQuestion + 1)
        }
        else {
            setShowScore(true)
        }
    }

    const restartGame = () => {
        setScore(0);
        setCurentQuestion(0);
        setShowScore(false);
    };

    return (
        <div className='mainContainer'>
            <div className='quizContainer'>
                <div className={shown ? 'start-btn' : 'start-btn disabled'}>
                    <button onClick={handleClick}>Započni kviz</button>
                </div>

                <div className={hidden ? "info-box" : "info-box active"}>
                    <div className="info-title">
                        <span>Pravila kviza</span>
                    </div>
                    <div className="info-list">
                        <div className="informationn">1. Imaš samo <span>15 sekundi</span> po pitanju.</div>
                        <div className="informationn">2. Jednom kada odabereš odgovor ne možeš odabrati drugi.</div>
                        <div className="informationn">3. Ne možeš odabrati nijedan odgovor nakon što ti iscuri vrijeme.</div>
                        <div className="informationn">4. Ne možeš izaći iz kviza dok traje</div>
                        <div className="informationn">5. Dobit ćeš onoliko bodova koliko bude točnih odgovora.</div>
                    </div>
                    <div class="buttonss">
                        <button className="quit" onClick={handleClick}>Izađi</button>
                        <button className="restart" onClick={clickChange}>Nastavi</button>
                    </div>
                </div>

                <div className={quiz ? "quiz-box" : "quiz-box active"}>
                    {showScore ? (
                        <div className='end'>
                            <div className='crown'><FaIcons.FaCrown /></div>
                            <div className='completed'>Završili ste kviz</div>
                            <div className='score-section'>
                                Imate {score} od {Questions.length} točnih odgovora!
                            </div>
                            <div className='reset-buttons'>
                                <button onClick={() => restartGame()}>Ponovi kviz</button>
                                <button onClick={exitChange}>Izađi</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='question-section-wrapper'>
                                <div className='question-count'>
                                    Pitanja: {curentQuestion + 1} od {Questions.length}
                                </div>
                                <div className='question'>
                                    {Questions[curentQuestion].nmb}.
                                    {Questions[curentQuestion].text}
                                </div>
                            </div>

                            <div className='answer-section-wrapper'>
                                {Questions[curentQuestion].options.map((option) => (
                                    <li className='answer-list' key={option.id} >
                                        <button
                                            disabled={clicked}
                                            className={`answer-button ${clicked && option.isCorrect ? "correct" : ""}`}
                                            onClick={() => handleCorrectAnswer(option.isCorrect)}
                                        >
                                            {option.text}
                                        </button>
                                    </li>
                                )
                                )}
                            </div>

                            <div className='button'>
                                <button className='next' onClick={handleNextQuestion} disabled={!clicked}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </div>
    )
}

export default Quiz