import React, { useEffect } from 'react'
import styles from "../../../styles/home/news.module.css"
import AnimatedPage from "../../../components/context/AnimatedPage"
import { listNewsDetails } from '../../../Redux/Actions/NewsAction';
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import Loading from '../../../components/messages/Loading';
import Error from '../../../components/messages/Error';
import moment from 'moment';

function News() {

    const navigate = useNavigate();
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
                                <div className={styles.imageContainer}>
                                    <img src={news.image} alt={news.title} />
                                </div>
                                <div className={styles.dateContainer}>
                                    {moment(news.createdAt).calendar()}
                                </div>
                                <div className={styles.descriptionContainer}>
                                    {news.body}
                                </div>
                            </>
                        )
                }
            </div >
        </AnimatedPage>
    )
}

export default News
