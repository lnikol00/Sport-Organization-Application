import React from 'react'
import { Link } from "react-router-dom"
import {
    MainContainer,
    Wrapper,
    FormContainer
} from '../../styles/pages/Create.styled'
import { Button } from '../../styles/global/Button.styled'
import { Title } from '../../styles/global/Text.styled'
import {
    Form,
    Input,
    Label,
    Textarea
} from '../../styles/global/Form.styled'

function CreateProduct() {

    const handleSubmit = () => {

    }

    return (
        <MainContainer>
            <Wrapper>
                <Link to="/products">
                    <Button
                        $width="170px"
                        $height="35px"
                        $fontSize="16px">Nazad na prodaju</Button>
                </Link>
                <Title $fontSize="1.7em">Dodaj novi proizvod</Title>
                <Button
                    $width="100px"
                    $height="35px"
                    $fontSize="16px"
                >Objavi</Button>
            </Wrapper>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Label>Ime proizvoda: </Label>
                    <Input
                        $width="100%"
                        $height="40px"
                    />
                    <Label>Cijena proizvoda: </Label>
                    <Input
                        $width="100%"
                        $height="40px"
                    />
                    <Label>Opis: </Label>
                    <Textarea
                        $width="100%"
                        $height="200px"
                    />
                    <Label>Slika: </Label>
                    <Input
                        $width="100%"
                        $height="40px"
                    />
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default CreateProduct
