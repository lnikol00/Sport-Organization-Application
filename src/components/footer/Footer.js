import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import styles from "./footer.module.css"

import * as ImIcons from "react-icons/im"
import * as FiIcons from "react-icons/fi"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as CiIcons from "react-icons/ci"
import PopUp from './PopUp';

function Footer() {
    const form = useRef();

    const [userame, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disable, setDisable] = useState(true)

    const handleusername = (e) => {
        if (e.target.value === "") {
            setDisable(true)
        }
        else {
            setDisable(false)
        }
        const getUsername = e.target.value;
        setUsername(getUsername);
    }
    const handleemail = (e) => {
        if (e.target.value === "") {
            setDisable(true)
        }
        else {
            setDisable(false)
        }
        const getEmail = e.target.value;
        setEmail(getEmail);
    }
    const handlemessage = (e) => {
        if (e.target.value === "") {
            setDisable(true)
        }
        else {
            setDisable(false)
        }
        const getMessage = e.target.value;
        setMessage(getMessage);
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(`Get Username: ${userame}, Email: ${email} and Message: ${message}`)
    //     setShowPopUp(true)

    // }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0v2naub', 'template_yj8y0w4', form.current, 'e14dHShsfZvGSBG8B')
            .then((result) => {
                console.log(result.text);
                console.log("upit poslan");
                console.log(`Get Username: ${userame}, Email: ${email} and Message: ${message}`)

            }, (error) => {
                console.log(error.text);
                setShowPopUp(false)
            });

        setShowPopUp(true)
        form.current.reset();
    };

    const [showPopup, setShowPopUp] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(false);
        }, 3000)

        return () => { clearTimeout(timer) }
    }, [showPopup])

    let popup = null
    if (showPopup) {
        popup = <PopUp />
    }

    return (
        <div className={styles.container}>
            <div className={styles.footerContainer}>
                <div>
                    <div className={styles.linksContainer}>
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
                    <div className={styles.popUp}>
                        {popup}
                    </div>
                    <form className={styles.input} ref={form} onSubmit={sendEmail}>
                        <div>
                            <input type="ime" name='user_name' id='ime' placeholder='VAŠE IME' onChange={(e) => handleusername(e)}></input>
                        </div>
                        <div>
                            <input type="email" name='user_email' id='email' placeholder='VAŠA E-MAIL ADRESA' onChange={(e) => handleemail(e)}></input>
                        </div>
                        <div>
                            <textarea name='message' id='poruka' cols="10" rows="5" placeholder='VAŠA PORUKA' onChange={(e) => handlemessage(e)}></textarea>
                        </div>
                        <button disabled={disable}>Pošalji poruku</button>
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
