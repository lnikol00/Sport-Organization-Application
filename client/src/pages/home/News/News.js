import React, { useEffect } from 'react'
import styles from "../../../styles/home/news.module.css"
import AnimatedPage from "../../../context/AnimatedPage"
import { listNewsDetails } from '../../../Redux/Actions/NewsAction';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import Loading from '../../../utils/messages/Loading';
import Error from '../../../utils/messages/Error';
import moment from 'moment';
import medalje from "../../../utils/images/news/medalje.png"

function News() {
    const params = useParams();
    const newsId = params.id;

    const dispatch = useDispatch();
    const newsDetails = useSelector((state) => state.newsDetails)
    const { loading, error, news } = newsDetails;

    useEffect(() => {
        dispatch(listNewsDetails(newsId))
    }, [dispatch, newsId])

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                {
                    loading ? (<Loading />) : error ? (<Error>Something went wrond</Error>)
                        : (
                            <>
                                <div className={styles.newsContainer}>
                                    <div className={styles.imageContainer}>
                                        <img src={news.image} alt={news.title} />
                                    </div>
                                    <div className={styles.titleContainer}>
                                        <h1>{news.title}</h1>
                                    </div>
                                    <div className={styles.dateContainer}>
                                        {moment(news.createdAt).calendar()}
                                    </div>
                                    <div className={styles.bodyContainer}>
                                        <p>{news.body}</p>
                                    </div>
                                </div>
                                <div className={styles.infoContainer}>
                                    <div className={styles.male}>
                                        <p>10.kolovoz 2024. 17:00</p>
                                        <h3>27. MARATON LAĐA</h3>
                                        <span>Metković - Opuzen - Ploče</span>
                                    </div>
                                    <div className={styles.female}>
                                        <p>08.kolovoz 2024. 17:00</p>
                                        <h3>11. MARATON LAĐARICA</h3>
                                        <span>Od Metkovića do Opuzena (10 km). Utrka ženskih lađarskih posada.</span>
                                    </div>
                                    <div className={styles.qualy}>
                                        <p>07.kolovoz 2024. 17:00</p>
                                        <h3>BRZINSKE UTRKE</h3>
                                        <span>Utrke za izbor startnih pozicija na Maratonu Lađa.</span>
                                    </div>
                                    <img alt='medalje' src={medalje} />
                                </div>
                            </>
                        )
                }
            </div >
        </AnimatedPage>
    )
}

export default News
