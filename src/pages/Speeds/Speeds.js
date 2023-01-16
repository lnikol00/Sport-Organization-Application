import React, { useState } from 'react'

import * as AiIcons from "react-icons/ai"

import slika from "./img/brzinske-opuzen-2022.jpg"
import video1 from "./img/VID-20220810-WA0048.mp4"
import video2 from "./img/VID-20220810-WA0049.mp4"
import video3 from "./img/VID-20221010-WA0002.mp4"

import "./speeds.css"

function Speeds() {
    const [hidden, setHidden] = useState(false)
    const [hidden1, setHidden1] = useState(false)
    const [hidden2, setHidden2] = useState(false)

    return (
        <div className='brzinske'>
            <div className='innearHeader'>
                <img src={slika} />
                <h1>Brzinske utrke u Opuzenu </h1>
            </div>
            <div className="brzinske22">
                <div className="naslovv">
                    <AiIcons.AiOutlineRight className="hidden" onClick={() => setHidden(!hidden)} />
                    <h2>Općenito</h2>
                </div>
                <div className="text" id="text" >
                    <p>Pred sami Maraton lađa, par dana unaprijed, u Opuzenu se određuju startne pozicije ekipa. Sve ekipe
                        veslaju u istoj lađi i moraju prijeći istu udaljenost. Prema ostvarenim vremenima biraju se startna
                        mjesta.</p>
                    <p>
                        Utrka kreće ispod mosta u Opuzenu, vesla se do bove gdje se radi okret i kreće se nazad prema Mostu.
                        Lađari odrađuju "brzince" prema rasporedu prošlogodišnjeg maratona (od zadnje ekipe prema prvoj).
                    </p>
                    <p>
                        Start igra veliku ulogu u rezultatu na Maratonu, pa je svakoj ekipi cilj ostvariti što bolje vrijeme
                        na brzinskim utrkama u Opuzenu.
                    </p>
                </div>


                <div className="naslovv">
                    <AiIcons.AiOutlineRight className='hidden' onClick={() => setHidden1(!hidden1)} />
                    <h2>Brzinske utrke 2022</h2>
                </div>

                <div className="video" id="video">
                    <p><b>Vrijeme: </b>1:33:077</p>
                    <p><b>Startna pozicija: </b>21. mjesto</p>

                    <video controls src={video1}></video>
                    <video controls src={video2}></video>
                </div>


                <div className="naslovv">
                    <AiIcons.AiOutlineRight className='hidden' onClick={() => setHidden2(!hidden2)} />
                    <h2>Brzinske utrke 2021</h2>
                </div>
                <div className="video" id="video">
                    <p><b>Vrijeme: </b>1:33:245</p>
                    <p><b>Startna pozicija: </b>26. mjesto</p>

                    <video controls src={video3}></video>
                </div>


            </div>
        </div>
    )
}

export default Speeds
