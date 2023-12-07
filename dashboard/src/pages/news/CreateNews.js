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
    Textarea
} from '../../styles/global/Form.styled'
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import { NEWS_CREATE_RESET } from '../../Redux/Constants/NewsConstants'
import { createNews } from '../../Redux/Actions/NewsAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"
import Toast from '../../utils/messages/Toast'

function CreateNews() {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");

    const dispatch = useDispatch();

    const newsCreate = useSelector((state) => (state.newsCreate));
    const { error, loading, news } = newsCreate;

    useEffect(() => {
        if (news) {
            toast.success("News Added!")
            dispatch({ type: NEWS_CREATE_RESET });
            setTitle("");
            setImage("");
            setDescription("");
            setBody("");
        }
    }, [news, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createNews(title, image, description, body));
    }


    return (
        <MainContainer>
            <Toast />
            <Wrapper onSubmit={handleSubmit}>
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
            {error && <Error>{error}</Error>}
            {loading && <Loading />}
            <FormContainer>
                <Form>
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
                    <Container>
                        <Label>Naslov: </Label>
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
                        <Label>Kratki opis: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Container>
                    <Container>
                        <Label>Opis: </Label>
                        <Textarea
                            $width="100%"
                            $height="200px"
                            placeholder='Pišite ovdje'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
                    </Container>
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default CreateNews
