import React from 'react'
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
    Select,
    Option
} from '../../styles/global/Form.styled'

function CreateMember() {

    const handleSubmit = () => {

    }

    return (
        <MainContainer>
            <Wrapper>
                <Link to="/members">
                    <Button
                        $width="170px"
                        $height="35px"
                        $fontSize="16px">Pregledaj članove</Button>
                </Link>
                <Title $fontSize="1.7em">Dodaj novog člana</Title>
                <Button
                    $width="100px"
                    $height="35px"
                    $fontSize="16px"
                >Objavi</Button>
            </Wrapper>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Container>
                        <Label>Ime korisnika: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                        />
                    </Container>
                    <Container>
                        <Label>Email korisnika: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                        />
                    </Container>
                    <Container>
                        <Label>Role korisnika: </Label>
                        <Select
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Uneiste URL slike'
                        >
                            <Option>Predsjednik</Option>
                            <Option>Potpredsjednik</Option>
                            <Option>Veslač</Option>
                            <Option>Bubnjar</Option>
                            <Option>Kormilar</Option>
                        </Select>
                    </Container>
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default CreateMember
