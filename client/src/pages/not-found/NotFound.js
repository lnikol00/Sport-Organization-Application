import React from 'react'
import styles from "../../styles/not-found/notfound.module.css"
import * as HiIcons from "react-icons/hi"
import { Link } from 'react-router-dom'


function NotFound() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <HiIcons.HiOutlineEmojiSad />
                <h2>404</h2>
                <p className={styles.notFound}>Page not found</p>
                <span>The page that you are looking for doesnt exist or some other error occured.</span>
                <p><Link to="/">Return back to the home page...</Link></p>
            </div>
        </div>
    )
}

export default NotFound