import React, { useEffect, useState } from 'react'
import {
    LoginContainer,
} from '../../styles/pages/Login.styled'
import { Form, Input } from '../../styles/global/Form.styled'
import { Title } from "../../styles/global/Text.styled"
import { Button } from '../../styles/global/Button.styled'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../Redux/Actions/UserAction"
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../../utils/messages/Loading'
import Error from '../../utils/messages/Error'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        if (userInfo) {
            navigate(from, { replace: true });
        }
    })

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <LoginContainer>
            {
                error && <Error>Something went wrong</Error>
            }
            {
                loading && <Loading />
            }
            <Form $width="450px" $padding="30px" $boxShadow="1px 2px 5px black" onSubmit={handleLoginSubmit}>
                <Title $openNavbar="block" $fontSize="25px">Prijavi se</Title>
                <Input
                    $width="100%"
                    $height="40px"
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <Input
                    $width="100%"
                    $height="40px"
                    type='password'
                    placeholder='Lozinka'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    $width="100%"
                    $height="40px"
                    $fontSize="16px"
                    $boxShadow="1px 2px 5px black"
                >
                    Prijavi se
                </Button>
            </Form>
        </LoginContainer >
    )
}

export default Login
