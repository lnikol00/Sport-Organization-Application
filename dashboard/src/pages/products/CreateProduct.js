import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import { PRODUCT_CREATE_RESET } from '../../Redux/Constants/ProductConstants'
import { createProduct } from '../../Redux/Actions/ProductActions'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"
import Toast from '../../utils/messages/Toast'

function CreateProduct() {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();

    const productCreate = useSelector((state) => (state.productCreate));
    const { error, loading, product } = productCreate;

    useEffect(() => {
        if (product) {
            toast.success("Product Added!")
            dispatch({ type: PRODUCT_CREATE_RESET });
            setTitle("");
            setImage("");
            setDescription("");
            setPrice(0);
        }
    }, [product, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(title, image, description, price));
    }

    return (
        <MainContainer>
            <Toast />
            <Wrapper onSubmit={handleSubmit}>
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
            {error && <Error>{error}</Error>}
            {loading && <Loading />}
            <FormContainer>
                <Form>
                    <Container>
                        <Label>Ime proizvoda: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Container>
                    <Container>
                        <Label>Cijena proizvoda: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </Container>
                    <Container>
                        <Label>Opis: </Label>
                        <Textarea
                            $width="100%"
                            $height="200px"
                            placeholder='Pišite ovdje'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Container>
                    <Container>
                        <Label>Slika: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Uneiste URL slike'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
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

export default CreateProduct
