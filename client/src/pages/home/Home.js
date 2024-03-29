import React, { useState, useEffect } from 'react'
import ClockDown from './clock-down/ClockDown'
import { Link } from 'react-router-dom'
import styles from "../../styles/home/home.module.css"
import AnimatedPage from '../../context/AnimatedPage'
import { useDispatch, useSelector } from "react-redux"
import Loading from '../../utils/messages/Loading'
import Error from '../../utils/messages/Error'
import { listNews } from '../../Redux/Actions/NewsAction'
import moment from "moment"
import Pagination from '../../hooks/Pagination'

function Home() {

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(6);

    const lastNewsIndex = currentPage * newsPerPage;
    const firstNewsIndex = lastNewsIndex - newsPerPage;

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
        const countDownDate = new Date("August 10, 2024 17:00:00").getTime();

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
    })

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
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
                                    {news.slice(firstNewsIndex, lastNewsIndex).map((item) => {
                                        return (
                                            <div key={item._id} className={styles.articles}>
                                                <Link to={`news/${item._id}`}>
                                                    <img src={item.image} alt={item.title} />
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
                <Pagination
                    totalItems={news.length}
                    itemsPerPage={newsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div >
        </AnimatedPage>
    )
}


export default Home
