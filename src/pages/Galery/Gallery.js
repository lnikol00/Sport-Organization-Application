import React, { useState } from 'react'
import { Data } from './GalleryData'
import * as AiIcons from "react-icons/ai"

import "./gallery.css"

function Gallery() {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState("");

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true)
    }

    return (
        <section id='galery'>
            <div className='naslov'>
                <h3>Galerija <span>Slika</span></h3>
            </div>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <AiIcons.AiOutlineClose onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                {Data.map((slika, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(slika.imgSrc)}>
                            <img src={slika.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Gallery
