import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
import { listNews, deleteNews } from '../../Redux/Actions/NewsAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"
import moment from "moment"

function News() {

    const dispatch = useDispatch();

    const newsList = useSelector((state) => state.newsList);
    const { loading, error, news } = newsList;

    const newsDelete = useSelector((state) => state.newsDelete)
    const { error: errorDelete, success: successDelete } = newsDelete;


    useEffect(() => {
        dispatch(listNews());
    }, [dispatch, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this news?")) {
            dispatch(deleteNews(id))
        }
    }

    return (
        <MainContainer>
            <Wrapper>
                <Title
                    fontSize="1.7em"
                    $openNavbar="block"
                >
                    Novosti
                </Title>
                <Link to="create">
                    <Button
                        $width="220px"
                        $height="35px"
                        $fontSize="16px"
                    >Kreairaj novost</Button>
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
                {
                    errorDelete && (<Error>{errorDelete}</Error>)
                }
                {
                    loading ? (<Loading />) : error ? (<Error>{error}</Error>) : (
                        <Grid>
                            {
                                news.map((news) => (
                                    <GridBox key={news._id}>
                                        <Image
                                            $width="100%"
                                            $height="200px"
                                            src={news.image}
                                            alt={news.title}
                                        />
                                        <Title $fontSize="16px">
                                            {news.title}
                                        </Title>
                                        <Paragraph $fontSize="14px">
                                            {moment(news.createdAt).calendar()}
                                        </Paragraph>
                                        <ButtonContainer>
                                            <Button $width="100%" $height="40px"><FaIcons.FaPen /></Button>
                                            <Button onClick={() => deleteHandler(news._id)} $width="100%" $height="40px"><FaIcons.FaTrash /></Button>
                                        </ButtonContainer>
                                    </GridBox>
                                ))
                            }
                        </Grid>
                    )
                }
            </Container>
        </MainContainer>
    )
}

export default News
