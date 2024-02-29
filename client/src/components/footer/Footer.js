import React, { useRef, useState } from 'react'

import styles from "../../styles/footer/footer.module.css"

import * as ImIcons from "react-icons/im"
import * as FiIcons from "react-icons/fi"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as CiIcons from "react-icons/ci"

function Footer() {
    const form = useRef();

    const [userame, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        form.current.reset();
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.footerContainer}>
                <div className={styles.aboutContainer}>
                    <div className={styles.linksContainer}>
                        <h2>Potražite nas na društvenim mrežama</h2>
                        <ul>
                            <li>
                                <a href='https://hr-hr.facebook.com/'>
                                    <ImIcons.ImFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <AiIcons.AiOutlineInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <FiIcons.FiTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/">
                                    <CiIcons.CiYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.contactsContainer}>
                        <h2>Kontaktirajte nas</h2>
                        <div className={styles.info}>
                            <div>
                                <i><FaIcons.FaMapMarkerAlt /></i>
                                <span>Adresa - Šarić Struga 50</span>
                            </div>
                            <div>
                                <i><AiIcons.AiFillPhone /></i>
                                <span>020 689 100</span>
                            </div>
                            <div>
                                <i><BsIcons.BsEnvelope /></i>
                                <span>info@saricstruga.hr</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.queryContainer}>
                    <h1>Pošaljite upit</h1>
                    <form className={styles.input} ref={form} onSubmit={sendEmail}>
                        <div>
                            <input
                                type="text"
                                placeholder='VAŠE IME'
                                onChange={(e) => setUsername(e.target.value)}></input>
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder='VAŠA E-MAIL ADRESA'
                                onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <textarea
                                type="text"
                                cols="10"
                                rows="5"
                                placeholder='VAŠA PORUKA'
                                onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <button>Pošalji poruku</button>
                    </form>
                </div>
            </div>
            <div className={styles.namContainer}>
                <h5>Udruga lađara Šarić Struga</h5>
            </div>
        </div>
    )
}

export default Footer
