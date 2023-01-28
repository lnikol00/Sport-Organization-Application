import React, { Fragment } from 'react'

import "./clockdown.css"

function ClockDown({ timerMonths, timerDays, timerHours, timerMinutes, timerSeconds }) {
    return (
        <Fragment>
            <div className='middle'>
                <div className='title'>
                    <h1>26. Maraton lađa </h1>
                    <p>Metković - Opuzen - Ploče</p>
                </div>
                <section className='timer-container'>
                    <section className='timer'>
                        <div className='clock'>
                            <div>
                                <section>
                                    <p>{timerDays}</p>
                                    <small>Dana</small>
                                </section>
                                <section className='block'>
                                    <p>{timerHours}</p>
                                    <small>Sati</small>
                                </section>
                            </div>
                            <div>
                                <section className='block'>
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
