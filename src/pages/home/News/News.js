import React from 'react'
import { NewsData } from './NewsData';

import styles from "./news.module.css"

import medalja from "./img/medalje_desno.png"
import { useNavigate, useParams } from 'react-router-dom';


function News() {

    const { id } = useParams()
    const { news } = NewsData;
    const navigate = useNavigate()

    const handleNext = () => {
        navigate(`/news/${Number(id) + 1}`)

    }

    const handlePrev = () => {
        navigate(`/news/${Number(id) - 1}`)
    }

    const item = news.find((item) => item.id === id)

    const { image, name, text, text2, text3, date } = item

    return (
        <div className={styles.container}>
            <div class={styles.asideContainer}>
                <aside>
                    <div class={styles.dateContainer}>
                        <p class={styles.border}>13. Kolovoz 2022. - 17:00</p>
                        <p class={styles.name}>25. MARATON LAĐA</p>
                        <p className={styles.info}>Metković - Opuzen - Ploče</p>
                    </div>
                    <div class={styles.dateContainer}>
                        <p class={styles.border2}>10. Kolovoz 2022.</p>
                        <p class={styles.name2}>BRZINSKE UTRKE</p>
                        <p class={styles.info}>Utrke za izbor startnih pozicija na Maratonu lađa</p>
                    </div>
                    <div class={styles.dateContainer}>
                        <p class={styles.border2}>11. Kolovoz 2022.</p>
                        <p class={styles.name}>9. MARATON LAĐARICA</p>
                        <p class={styles.info}>Metković - Opuzen (10km)</p>
                    </div>
                </aside>
                <aside class={styles.imageContainer}>
                    <img src={medalja} alt="slika" />
                </aside>

            </div>

            <div className={styles.description}>
                <img src={image} alt='slika' />
                <h2>{name}</h2>
                <span>{date}</span>
                <div className={styles.paragraph}>
                    <p>{text}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.prevButton} onClick={handlePrev}>Prev</button>
                <button className={styles.nextButton} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default News
