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
    Textarea
} from '../../styles/global/Form.styled'

function CreateNews() {

    const handleSubmit = () => {

    }


    return (
        <MainContainer>
            <Wrapper>
                <Link to="/news">
                    <Button
                        $width="170px"
                        $height="35px"
                        $fontSize="16px">Nazad na novosti</Button>
                </Link>
                <Title $fontSize="1.7em">Dodaj novost</Title>
                <Button
                    $width="100px"
                    $height="35px"
                    $fontSize="16px"
                >Objavi</Button>
            </Wrapper>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Container>
                        <Label>Slika: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Uneiste URL slike'
                        />
                        <Input
                            $width="100%"
                            $height="40px"
                            type='file'
                        />
                    </Container>
                    <Container>
                        <Label>Naslov: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                        />
                    </Container>
                    <Container>
                        <Label>Kratki opis: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                        />
                    </Container>
                    <Container>
                        <Label>Opis: </Label>
                        <Textarea
                            $width="100%"
                            $height="200px"
                            placeholder='Pišite ovdje'
                        />
                    </Container>
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default CreateNews
