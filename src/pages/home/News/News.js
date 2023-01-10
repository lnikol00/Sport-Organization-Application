import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import "./news.css"

import medalja from "./img/medalje_desno.png"


function News() {

    const { id } = useParams()

    return (
        <div>
            <div class="desno">
                <aside>
                    <div class="maraton">
                        <p class="okvir">13. Kolovoz 2022. - 17:00</p>
                        <p class="godina">25. MARATON LAĐA</p>
                        <p>Metković - Opuzen - Ploče</p>
                    </div>
                    <div class="maraton">
                        <p class="okvir2">10. Kolovoz 2022.</p>
                        <p class="godina">BRZINSKE UTRKE</p>
                        <p class="infoo">Utrke za izbor startnih pozicija na Maratonu lađa</p>
                    </div>
                    <div class="maraton">
                        <p class="okvir2">11. Kolovoz 2022.</p>
                        <p class="godina2">9. MARATON LAĐARICA</p>
                        <p class="infor2">Metković - Opuzen (10km)</p>
                    </div>
                </aside>
                <aside class="calendar"></aside>
                <aside class="medalje">
                    <img src={medalja} alt="" />
                </aside>
            </div>

            {/* <div className='text'>
                {NewsInfo.map((news, index) => {
                    return (
                        <div key={news.id}>
                            <img src={news.image} alt='slika' />
                            <h2>{news.name}</h2>
                            <span>{news.date}</span>
                            <div className='paragraf'>
                                <p>{news.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )
}

export default News
