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
import { PHOTOS_CREATE_RESET } from '../../Redux/Constants/PhotosConstants'
import { createPhotos } from '../../Redux/Actions/PhotosAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"
import Toast from '../../utils/messages/Toast'

function CreatePhoto() {

    const [image, setImage] = useState("");

    const dispatch = useDispatch();

    const photosCreate = useSelector((state) => (state.photosCreate));
    const { error, loading, photo } = photosCreate;

    useEffect(() => {
        if (photo) {
            toast.success("Photo Added!")
            dispatch({ type: PHOTOS_CREATE_RESET });
            setImage("");
        }
    }, [photo, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPhotos(image));
    }

    return (
        <MainContainer>
            <Toast />
            <Wrapper onSubmit={handleSubmit}>
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
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default CreatePhoto
