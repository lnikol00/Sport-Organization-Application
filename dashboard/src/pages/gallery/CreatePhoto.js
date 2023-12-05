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
} from '../../styles/global/Form.styled'

function CreatePhoto() {

    const handleSubmit = () => {

    }

    return (
        <MainContainer>
            <Wrapper>
                <Link to="/gallery">
                    <Button
                        $width="170px"
                        $height="35px"
                        $fontSize="16px">Nazad u galeriju</Button>
                </Link>
                <Title $fontSize="1.7em">Dodaj novu sliku</Title>
                <Button
                    $width="100px"
                    $height="35px"
                    $fontSize="16px"
                >Objavi</Button>
            </Wrapper>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Container>
                        <Label>Slika 1: </Label>
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
                        <Label>Slika 2: </Label>
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
                        <Label>Slika 3: </Label>
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
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default CreatePhoto
