import React, { useState, useEffect } from 'react'
import * as AiIcons from "react-icons/ai"
import { sliderData } from './SliderData'
import styles from "../../../styles/home/slider.module.css"

function Slider() {

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 15000;

    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLenght = sliderData.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide])


    return (
        <div className={styles.sliderContainer}>
            <AiIcons.AiOutlineArrowLeft className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide} />
            <AiIcons.AiOutlineArrowRight className={`${styles.arrow} ${styles.next}`} onClick={nextSlide} />

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? `${styles.slide} ${styles.current}` : `${styles.slide}`} key={index}>
                        {index === currentSlide && (
                            <div>
                                <img src={slide.image} alt='slide' />
                                <div className={styles.content}>
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button className={styles.primary}>Saznaj više</button>
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}

        </div>
    )
}

export default Slider
