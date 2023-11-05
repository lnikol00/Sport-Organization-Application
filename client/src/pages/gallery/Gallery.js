import React, { useState, useEffect } from 'react'
import * as AiIcons from "react-icons/ai"
import AnimatedPage from "../../components/context/AnimatedPage"
import { useDispatch, useSelector } from "react-redux"
import Loading from '../../components/messages/Loading'
import Error from '../../components/messages/Error'
import { listPhotos } from '../../Redux/Actions/PhotosAction'

import styles from "../../styles/gallery/gallery.module.css"

function Gallery() {

    const dispatch = useDispatch()

    const photosList = useSelector((state) => state.photosList);
    const { loading, error, photos } = photosList;

    useEffect(() => {
        dispatch(listPhotos());
    }, [dispatch])

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState("");

    const getImg = (image) => {
        setTempImgSrc(image);
        setModel(true)
    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.heading}>
                    <h3>Galerija <span>Slika</span></h3>
                </div>
                <div className={model ? `${styles.model} ${styles.modelOpen}` : `${styles.model}`}>
                    <img src={tempimgSrc} alt='close-up' />
                    <AiIcons.AiOutlineClose onClick={() => setModel(false)} />
                </div>
                <div className={styles.gallery}>
                    {
                        loading ? (<Loading />) : error ? (<Error>Something went wrong</Error>)
                            :
                            (
                                <>
                                    {
                                        photos.map((item, index) => {
                                            return (
                                                <div className={styles.pics} key={index} onClick={() => getImg(item.image)}>
                                                    <img src={item.image} alt="gallery-images" style={{ width: '100%' }} />
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                    }
                </div>
            </div >
        </AnimatedPage>
    )
}

export default Gallery
