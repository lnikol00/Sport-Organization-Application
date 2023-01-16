import React, { useState } from 'react'
import { NewsData } from './NewsData';

import "./news.css"

import medalja from "./img/medalje_desno.png"
import { useParams } from 'react-router-dom';




function News() {


    const { news } = NewsData;

    const { id } = useParams()

    const item = news.find((item) => item.id === id)

    const { image, name, text, text2, text3, date, img, txt } = item

    return (
        <div className='novosti'>
            <div class="desno">
                <aside>
                    <div class="maraton">
                        <p class="okvir">13. Kolovoz 2022. - 17:00</p>
                        <p class="godina">25. MARATON LAĐA</p>
                        <p className='infoo'>Metković - Opuzen - Ploče</p>
                    </div>
                    <div class="maraton">
                        <p class="okvir2">10. Kolovoz 2022.</p>
                        <p class="godinaa">BRZINSKE UTRKE</p>
                        <p class="infoo">Utrke za izbor startnih pozicija na Maratonu lađa</p>
                    </div>
                    <div class="maraton">
                        <p class="okvir2">11. Kolovoz 2022.</p>
                        <p class="godina2">9. MARATON LAĐARICA</p>
                        <p class="infoo">Metković - Opuzen (10km)</p>
                    </div>
                </aside>
                <aside class="medalje">
                    <img src={medalja} alt="" />
                </aside>

            </div>

            <div className='textt'>
                <img src={image} alt='slika' />
                <h2>{name}</h2>
                <span>{date}</span>
                <div className='paragraf'>
                    <p>{text}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                </div>
            </div>
        </div>
    )
}

export default News
