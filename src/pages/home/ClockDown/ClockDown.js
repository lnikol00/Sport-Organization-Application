import React, { Fragment } from 'react'

import styles from "./clockdown.module.css"

function ClockDown(props) {

    const { timerDays, timerHours, timerMinutes, timerSeconds } = props;
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>26. Maraton lađa </h1>
                    <p>Metković - Opuzen - Ploče</p>
                </div>
                <section className={styles.timerContainer}>
                    <section className={styles.timer}>
                        <div className={styles.clock}>
                            <div>
                                <section>
                                    <p>{timerDays}</p>
                                    <small>Dana</small>
                                </section>
                                <section className={styles.block}>
                                    <p>{timerHours}</p>
                                    <small>Sati</small>
                                </section>
                            </div>
                            <div>
                                <section className={styles.block}>
                                    <p>{timerMinutes}</p>
                                    <small>Minuta</small>
                                </section>
                                <section>
                                    <p>{timerSeconds}</p>
                                    <small>Sekundi</small>
                                </section>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </Fragment>
    )
}

export default ClockDown
