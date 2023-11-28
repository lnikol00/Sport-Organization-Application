import React, { useEffect, useState } from 'react'
import {
    FormBox,
    LoginContainer,
    Form,
    Title,
    InputBox,
    Input,
    Label,
    Button
} from '../../styles/pages/Login.styled'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../Redux/Actions/UserAction"
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../../utils/messages/Loading'
import Error from '../../utils/messages/Error'
import * as AiIcons from "react-icons/ai"
import Toast from '../../utils/messages/Toast'

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
            <Toast />
            <FormBox>

                <Form onSubmit={handleLoginSubmit}>
                    <Title>Login</Title>
                    {
                        error && <Error>{error}</Error>
                    }
                    {
                        loading && <Loading />
                    }
                    <InputBox>
                        <AiIcons.AiOutlineMail />
                        <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <Label>Email</Label>
                    </InputBox>
                    <InputBox>
                        <AiIcons.AiOutlineLock />
                        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <Label>Password</Label>
                    </InputBox>
                    <Button>Prijavi se</Button>
                </Form>
            </FormBox>
        </LoginContainer >
    )
}

export default Login
