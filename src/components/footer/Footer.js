import React from 'react'

import styles from "./footer.module.css"

import * as ImIcons from "react-icons/im"
import * as FiIcons from "react-icons/fi"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as CiIcons from "react-icons/ci"

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footerContainer}>
                <div>
                    <div className={styles.links}>
                        <h2>Potražite nas na društvenim mrežama</h2>
                        <ul>
                            <li>
                                <a href='https://hr-hr.facebook.com/'>
                                    <ImIcons.ImFacebook />
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <AiIcons.AiOutlineInstagram />
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://twitter.com/">
                                    <FiIcons.FiTwitter />
                                </a>
                            </li>
                        </ul>
                        <ul>
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
                    <form className={styles.input}>
                        <div>
                            <input type="ime" name='ime' id='ime' placeholder='VAŠE IME'></input>
                        </div>
                        <div>
                            <input type="email" name='mail' id='email' placeholder='VAŠA E-MAIL ADRESA'></input>
                        </div>
                        <div>
                            <textarea name='poruka' id='poruka' cols="10" rows="5" placeholder='VAŠA PORUKA'></textarea>
                        </div>
                        <button>Pošalji poruku</button>
                    </form>
                </div>
            </div>
            <div className={styles.name}>
                <h5>Udruga lađara Šarić Struga</h5>
            </div>
        </div>
    )
}

export default Footer
