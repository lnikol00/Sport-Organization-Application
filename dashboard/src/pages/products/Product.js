import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import {
    MainContainer,
    Wrapper,
    Container,
    Grid,
    GridBox,
    ButtonContainer
} from '../../styles/pages/Product.styled'
import { Paragraph, Title } from '../../styles/global/Text.styled'
import { Button } from '../../styles/global/Button.styled'
import { Input, Select, Option } from '../../styles/global/Form.styled'
import { Image } from '../../styles/global/Image.styled'
import * as FaIcons from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { listProducts, deleteProduct } from '../../Redux/Actions/ProductActions'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"

function Product() {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const productDelete = useSelector((state) => state.productDelete)
    const { error: errorDelete, success: successDelete } = productDelete;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(deleteProduct(id))
        }
    }

    return (
        <MainContainer>
            <Wrapper>
                <Title
                    fontSize="1.7em"
                    $openNavbar="block"
                >
                    Proizvodi
                </Title>
                <Link to="create">
                    <Button
                        $width="220px"
                        $height="35px"
                        $fontSize="16px"
                    >Kreairaj novi proizvod</Button>
                </Link>
            </Wrapper>
            <Container>
                <Wrapper $flexDirection="column" $responsiveGap="20px">
                    <Input
                        id='search'
                        $width="350px"
                        $height="35px"
                        type='text'
                        placeholder='Search...'
                    />
                    <Wrapper $gap="20px;">
                        <Select
                            id='select-20'
                            $width="150px"
                            $height="35px"
                        >
                            <Option>Prikaži 20</Option>
                        </Select>
                        <Select
                            id='select-all'
                            $width="150px"
                            $height="35px"
                        >
                            <Option>Status: SVI</Option>
                        </Select>
                    </Wrapper>
                </Wrapper>
                <Grid>
                    {
                        errorDelete && (<Error>{errorDelete}</Error>)
                    }
                    {
                        loading ? (<Loading />) : error ? (<Error>{error}</Error>) :
                            (
                                products.map((product) => (
                                    <GridBox key={product._id} $paddingTop="10px">
                                        <Image
                                            $width="100%"
                                            $height="100%"
                                            src={product.image}
                                            alt={product.title}
                                        />
                                        <Title $fontSize="16px">
                                            {product.title}
                                        </Title>
                                        <Paragraph $fontSize="14px">
                                            {product.price}€
                                        </Paragraph>
                                        <ButtonContainer>
                                            <Button $width="100%" $height="40px"><FaIcons.FaPen /></Button>
                                            <Button onClick={() => deleteHandler(product._id)} $width="100%" $height="40px"><FaIcons.FaTrash /></Button>
                                        </ButtonContainer>
                                    </GridBox>
                                ))
                            )
                    }
                </Grid>
            </Container>
        </MainContainer>
    )
}

export default Product
