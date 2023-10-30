import React, { useState, useEffect } from 'react'
import ClockDown from './clock-down/ClockDown'
import Slider from './slider/Slider'
import { Link } from 'react-router-dom'
import styles from "../../styles/home/home.module.css"
import AnimatedPage from '../../components/context/AnimatedPage'
import { useDispatch, useSelector } from "react-redux"
import Loading from '../../components/messages/Loading'
import Error from '../../components/messages/Error'
import { listNews } from '../../Redux/Actions/NewsAction'
import moment from "moment"

function Home() {

    const dispatch = useDispatch()

    const newsList = useSelector((state) => state.newsList);
    const { loading, error, news } = newsList;

    useEffect(() => {
        dispatch(listNews());
    }, [dispatch])

    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("August 12, 2024 17:00:00").getTime();

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
        <AnimatedPage>
            <div className={styles.mainContainer}>
                {/* <Slider /> */}
                <ClockDown
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                />
                <h2>Novosti</h2>
                <div className={styles.newsContainer}>
                    {
                        loading ? (<Loading />) : error ? (<Error>Something went wrong</Error>)
                            :
                            (
                                <>
                                    {news.map((item) => {
                                        return (
                                            <div key={item._id} className={styles.articles}>
                                                <Link to={`news/${item._id}`}>
                                                    <img src={item.image} />
                                                    <h5>
                                                        {item.title}
                                                    </h5>
                                                    <span>
                                                        {moment(item.createdAt).calendar()}
                                                    </span>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </>
                            )
                    }

                </div >

            </div >
        </AnimatedPage>
    )
}


export default Home
