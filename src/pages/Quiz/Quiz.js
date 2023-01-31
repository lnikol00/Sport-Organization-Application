import React, { useState } from 'react'


import { Questions } from './Questions'

import * as FaIcons from "react-icons/fa"

import styles from "./quiz.module.css"

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
        <div className={styles.mainContainer}>
            <div className={styles.quizContainer}>
                <div className={shown ? `${styles.startBtn}` : ` ${styles.startBtnDisabled}`}>
                    <button onClick={handleClick}>Započni kviz</button>
                </div>

                <div className={hidden ? `${styles.infoBox}` : ` ${styles.infoBoxActive}`}>
                    <div className={styles.infoTitle}>
                        <span>Pravila kviza</span>
                    </div>
                    <div className={styles.infoList}>
                        <div className={styles.information}>1. Imaš samo <span>15 sekundi</span> po pitanju.</div>
                        <div className={styles.information}>2. Jednom kada odabereš odgovor ne možeš odabrati drugi.</div>
                        <div className={styles.information}>3. Ne možeš odabrati nijedan odgovor nakon što ti iscuri vrijeme.</div>
                        <div className={styles.information}>4. Ne možeš izaći iz kviza dok traje</div>
                        <div className={styles.information}>5. Dobit ćeš onoliko bodova koliko bude točnih odgovora.</div>
                    </div>
                    <div class={styles.buttons}>
                        <button className={styles.quitBtn} onClick={handleClick}>Izađi</button>
                        <button className={styles.startBtn} onClick={clickChange}>Nastavi</button>
                    </div>
                </div>

                <div className={quiz ? `${styles.quizBox}` : ` ${styles.quizBoxActive}`}>
                    {showScore ? (
                        <div className={styles.endContainer}>
                            <div className={styles.crown}><FaIcons.FaCrown /></div>
                            <div className={styles.completed}>Završili ste kviz</div>
                            <div className={styles.scoreContainer}>
                                Imate {score} od {Questions.length} točnih odgovora!
                            </div>
                            <div className={styles.resetButtons}>
                                <button onClick={() => restartGame()}>Ponovi kviz</button>
                                <button onClick={exitChange}>Izađi</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.questionContainer}>
                                <div className={styles.questionCount}>
                                    Pitanja: {curentQuestion + 1} od {Questions.length}
                                </div>
                                <div className={styles.question}>
                                    {Questions[curentQuestion].nmb}.
                                    {Questions[curentQuestion].text}
                                </div>
                            </div>

                            <div className={styles.answerContainer}>
                                {Questions[curentQuestion].options.map((option) => (
                                    <li className={styles.answerList} key={option.id} >
                                        <button
                                            disabled={clicked}
                                            className={`${styles.answerButton} ${clicked && option.isCorrect ? `${styles.correct} ` : ""}`}
                                            onClick={() => handleCorrectAnswer(option.isCorrect)}
                                        >
                                            {option.text}
                                        </button>
                                    </li>
                                )
                                )}
                            </div>

                            <div className={styles.nextContainer}>
                                <button className={styles.nextBtn} onClick={handleNextQuestion} disabled={!clicked}>
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