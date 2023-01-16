import React, { useState, useEffect, useNavigate, generatePath } from 'react'
import { NewsData } from './News/NewsData'
import { Link } from 'react-router-dom'


import ClockDown from './ClockDown/ClockDown'
import Slider from './slider/Slider'

import "./News/news.css"

function Home() {

    const { news } = NewsData

    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("August 12, 2023 17:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / (1000));

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    }

    useEffect(() => {
        startTimer();
    }, [])

    return (
        <div className='main-container'>
            <Slider />
            <ClockDown
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
            />
            <section className='news'>
                <h2>Novosti</h2>
                <div className='articles'>
                    {news.map((item) => {
                        return (
                            <article key={item.id}>
                                <Link to={`news/${item.id}`} className="links">
                                    <img src={item.image} />
                                    <h5>
                                        {item.name}
                                    </h5>
                                    <span>
                                        {item.date}
                                    </span>
                                    <p>
                                        {item.desc}
                                    </p>
                                </Link>
                            </article>
                        )
                    })}
                </div>
            </section >

        </div >
    )
}


export default Home
