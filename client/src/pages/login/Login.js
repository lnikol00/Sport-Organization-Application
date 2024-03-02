import React, { useState, useEffect, useRef } from 'react'
import styles from "../../styles/login/login.module.css"
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import AnimatedPage from '../../context/AnimatedPage'
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom'
import { login, register } from "../../Redux/Actions/UserAction"
import Loading from '../../utils/messages/Loading'
import Error from '../../utils/messages/Error'

function Login() {

    const [change, setChange] = useState(true);

    const handleChange = () => {
        setChange(!change)
    }

    //Login
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerForm = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(from, { replace: true });
        }
    }, [userInfo, from, navigate])

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
        setChange(true);
        setName("");
        setEmail("");
        setPassword("");
        registerForm.current.reset();
    }

    return (
        <AnimatedPage>
            <div className={styles.bodyContainer}>
                <div className={styles.mainContainer}>
                    <div className={change ? `${styles.formContainer} ${styles.singUp}` : `${styles.formContainer} ${styles.singUp} ${styles.activeSignUp}`}>
                        <form onSubmit={handleRegisterSubmit}>
                            <h1>Kreiraj Račun</h1>
                            {
                                error && <Error>{error}</Error>
                            }
                            {
                                loading && <Loading />
                            }
                            <label>
                                <BiIcons.BiUser />
                                <input
                                    placeholder='Ime'
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                <AiIcons.AiOutlineMail />
                                <input
                                    placeholder='Email'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                <AiIcons.AiOutlineLock />
                                <input
                                    placeholder='Lozinka'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>
                            <button>REGISTRIRAJ SE</button>
                        </form>
                    </div>
                    <div className={change ? `${styles.formContainer} ${styles.singIn}` : `${styles.formContainer} ${styles.singIn} ${styles.activeSignIn}`}>
                        <form onSubmit={handleLoginSubmit}>
                            <h1>Prijavi se</h1>
                            {
                                error && <Error>{error}</Error>
                            }
                            {
                                loading && <Loading />
                            }
                            <label>
                                <AiIcons.AiOutlineMail />
                                <input
                                    placeholder='Email'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                <AiIcons.AiOutlineLock />
                                <input
                                    placeholder='Lozinka'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>
                            <button>Prijavi se</button>
                        </form>
                    </div>
                    <div className={change ? `${styles.toggleContainer}` : `${styles.toggleContainer} ${styles.activeToggleContainer}`}>
                        <div className={change ? `${styles.toggle}` : `${styles.toggle} ${styles.activeToggle}`}>
                            <div className={change ? `${styles.togglePanel} ${styles.toggleRight}` : `${styles.togglePanel} ${styles.toggleRight} ${styles.activeToggleRight}`}>
                                <h3>Pozdrav, Prijatelju!</h3>
                                <p>Unesi par podataka i postani član!</p>
                                <button onClick={handleChange} className={styles.hidden}>Registriraj se</button>
                            </div>
                            <div className={change ? `${styles.togglePanel} ${styles.toggleLeft}` : `${styles.togglePanel} ${styles.toggleLeft} ${styles.activeToggleLeft}`}>
                                <h3>Dobrodošli nazad!</h3>
                                <p>Da ostanete povezani sa nama, molimo Vas da se prijavite na vaš račun</p>
                                <button onClick={handleChange} className={styles.hidden}>Prijavi se</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage >
    )
}

export default Login
