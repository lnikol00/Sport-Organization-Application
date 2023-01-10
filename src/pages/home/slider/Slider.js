import React, { useState, useEffect } from 'react'
import * as AiIcons from "react-icons/ai"
import { sliderData } from './SliderData'
import "./Slider.scss"

const Slider = () => {

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
        <div className='slider'>
            <AiIcons.AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
            <AiIcons.AiOutlineArrowRight className='arrow next' onClick={nextSlide} />

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <div>
                                <img src={slide.image} alt='slide' />
                                <div className='content'>
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button className='--btn --btn primary'>Saznaj više</button>
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
