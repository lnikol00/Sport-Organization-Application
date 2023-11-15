import React from 'react'
import {
    LoginContainer,

} from '../../styles/pages/Login.styled'
import { Form, Input } from '../../styles/global/Form.styled'
import { Title } from "../../styles/global/Text.styled"
import { Button } from '../../styles/global/Button.styled'

function Login() {
    return (
        <LoginContainer>
            <Form $width="450px" $padding="30px" $boxShadow="1px 2px 5px black">
                <Title $openNavbar="block" $fontSize="25px">Prijavi se</Title>
                <Input
                    $width="100%"
                    $height="40px"
                    type='email'
                    placeholder='Email'

                />
                <Input
                    $width="100%"
                    $height="40px"
                    type='password'
                    placeholder='Lozinka'
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
