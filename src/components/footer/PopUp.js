import React from 'react'

import styles from "./footer.module.css"

import * as AiIcons from "react-icons/ai"

function PopUp(setShowPopUp) {
    return (
        <div className={styles.containerPopUp}>
            <AiIcons.AiFillCheckCircle className={styles.check} />
            <p>Hvala na upitu</p>
        </div >
    )
}

export default PopUp
