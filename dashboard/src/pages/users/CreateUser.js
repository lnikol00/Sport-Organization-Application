import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import {
    MainContainer,
    Wrapper,
    FormContainer,
    Container
} from '../../styles/pages/Create.styled'
import { Button } from '../../styles/global/Button.styled'
import { Title } from '../../styles/global/Text.styled'
import {
    Form,
    Input,
    Label,
} from '../../styles/global/Form.styled'
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import { USER_CREATE_RESET } from '../../Redux/Constants/UserConstants'
import { createUser } from '../../Redux/Actions/UserAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"
import Toast from '../../utils/messages/Toast'

function CreateUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userCreate = useSelector((state) => (state.userCreate));
    const { error, loading, user } = userCreate;

    useEffect(() => {
        if (user) {
            toast.success("New User Added!")
            dispatch({ type: USER_CREATE_RESET });
            setName("");
            setEmail("");
            setIsAdmin(false);
            setPassword("");
        }
    }, [user, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(name, email, isAdmin, password));
    }

    return (
        <MainContainer>
            <Toast />
            <Wrapper onSubmit={handleSubmit}>
                <Link to="/users">
                    <Button
                        $width="170px"
                        $height="35px"
                        $fontSize="16px">Pregledaj korisnike</Button>
                </Link>
                <Title $fontSize="1.7em">Dodaj novog korisnika</Title>
                <Button
                    $width="100px"
                    $height="35px"
                    $fontSize="16px"
                >Objavi</Button>
            </Wrapper>
            {error && <Error>{error}</Error>}
            {loading && <Loading />}
            <FormContainer>
                <Form>
                    <Container>
                        <Label>Ime korisnika: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Container>
                    <Container>
                        <Label>Email korisnika: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='email'
                            placeholder='Pišite ovdje'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Container>
                    <Container>
                        <Label>Zakvačite kvačicu ako želite da stvoreni korisnik bude admin:  </Label>
                        <Input
                            $width="20px"
                            $height="20px"
                            type='checkbox'
                            // checked={isAdmin}
                            onChange={() => setIsAdmin(true)}
                        />
                    </Container>
                    <Container>
                        <Label>Lozinka: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Container>
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default CreateUser
