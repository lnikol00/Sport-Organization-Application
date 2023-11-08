import React, { useState, useEffect, useRef } from 'react'
import styles from "../../styles/login/login.module.css"
import { motion } from "framer-motion"
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import logoImage from "../../images/header/grb2.png"
import AnimatedPage from '../../components/context/AnimatedPage'
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login, register } from "../../Redux/Actions/UserAction"
import Loading from '../../components/messages/Loading'
import Error from '../../components/messages/Error'

function Login() {

    const [change, setChange] = useState(true);

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
        setChange(!change);
        setName("");
        setEmail("");
        setPassword("");
        registerForm.current.reset();
    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.wrapperContainer}>
                    <div className={styles.top}>
                        <h4>ULŠS</h4>
                        <img alt='logo' src={logoImage} />
                    </div>
                    <div className={styles.center}>
                        <motion.div className={styles.forms}
                            animate={{ x: change ? 0 : 360 }}
                            transition={{ type: "tween", duration: 1 }}
                        >
                            {change ?
                                (
                                    <div
                                        className={styles.formContainer}>
                                        <h3>Prijavi se</h3>
                                        {
                                            error && <Error>{error}</Error>
                                        }
                                        {
                                            loading && <Loading />
                                        }
                                        <form onSubmit={handleLoginSubmit}>
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
                                                    placeholder='Password'
                                                    type='password'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </label>
                                            <Link to>Forgot your password?</Link>
                                            <button>PRIJAVI SE</button>
                                        </form>
                                    </div>
                                ) : (
                                    <div
                                        className={styles.formContainer}>
                                        <h3>Kreiraj račun</h3>
                                        {
                                            error && <Error>{error}</Error>
                                        }
                                        {
                                            loading && <Loading />
                                        }
                                        <form onSubmit={handleRegisterSubmit}>
                                            <label>
                                                <BiIcons.BiUser />
                                                <input
                                                    placeholder='Name'
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
                                                    placeholder='Password'
                                                    type='password'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </label>
                                            <button>REGISTRIRAJ SE</button>
                                        </form>
                                    </div>
                                )
                            }
                        </motion.div>
                        <motion.div
                            className={change ? `${styles.background} ${styles.right}` : `${styles.background} ${styles.left}`}
                            animate={{ x: change ? 0 : -540 }}
                            transition={{ type: "tween", duration: 1 }}
                        >
                            {
                                change ?
                                    (
                                        <div className={styles.messages}>
                                            <h3>Pozdrav, Prijatelju!</h3>
                                            <p>Unesi par osobnih podataka i postani član!</p>
                                            <button onClick={() => setChange(!change)}>Registriraj se</button>
                                        </div>
                                    ) : (
                                        <div className={styles.messages}>
                                            <h3>Dobrodošli nazad!</h3>
                                            <p>Da ostanete povezani sa nama, molimo Vas da se prijavite na vaš račun</p>
                                            <button onClick={() => setChange(!change)}>Prijavi se</button>
                                        </div>
                                    )
                            }
                        </motion.div>
                    </div>
                </div>

                <div className={styles.responsiveContainer}>
                    <div className={styles.container}>
                        <div className={styles.modes}>
                            <div
                                onClick={() => setChange(true)}
                                className={change ? `${styles.clicked}` : `${styles.notClicked}`}>
                                <button>Login</button>
                            </div>
                            <div
                                onClick={() => setChange(false)}
                                className={change ? `${styles.notClicked}` : `${styles.clicked}`}>
                                <button>Register</button>
                            </div>
                        </div>
                        <div className={styles.center}>
                            <div className={styles.forms}
                            >
                                {change ?
                                    (
                                        <div
                                            className={styles.formContainer}>
                                            <h3>Prijavi se</h3>
                                            {
                                                error && <Error>{error}</Error>
                                            }
                                            {
                                                loading && <Loading />
                                            }
                                            <form onSubmit={handleLoginSubmit}>
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
                                                <Link to>Forgot your password?</Link>
                                                <button>PRIJAVI SE</button>
                                            </form>
                                        </div>
                                    ) : (
                                        <div
                                            className={styles.formContainer}>
                                            <h3>Kreiraj račun</h3>
                                            {
                                                error && <Error>{error}</Error>
                                            }
                                            {
                                                loading && <Loading />
                                            }
                                            <form onSubmit={handleRegisterSubmit}>
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
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage >
    )
}

export default Login
