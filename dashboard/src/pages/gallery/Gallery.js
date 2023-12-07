import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    GalleryContainer,
    Wrapper,
    Container,
    Grid,
    GridBox,
    ButtonContainer
} from '../../styles/pages/Gallery.styled'
import { Title } from '../../styles/global/Text.styled'
import { Button } from '../../styles/global/Button.styled'
import { Input, Select, Option } from '../../styles/global/Form.styled'
import { Image } from '../../styles/global/Image.styled'
import * as FaIcons from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { listPhotos, deletePhoto } from '../../Redux/Actions/PhotosAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"


function Gallery() {

    const dispatch = useDispatch();

    const photosList = useSelector((state) => state.photosList);
    const { loading, error, photos } = photosList;


    const photosDelete = useSelector((state) => state.photosDelete)
    const { error: errorDelete, success: successDelete } = photosDelete;

    useEffect(() => {
        dispatch(listPhotos());
    }, [dispatch, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this photo?")) {
            dispatch(deletePhoto(id))
        }
    }

    return (
        <GalleryContainer>
            <Wrapper>
                <Title
                    fontSize="1.7em"
                    $openNavbar="block"
                >
                    Galerija
                </Title>
                <Link to="create">
                    <Button
                        $width="220px"
                        $height="35px"
                        $fontSize="16px"
                    >Dodaj novu sliku</Button>
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
                                photos.map((photos) => (
                                    <GridBox key={photos._id}>
                                        <Image
                                            $width="100%"
                                            $height="200px"
                                            src={photos.image}
                                            alt="images"
                                        />
                                        <ButtonContainer>
                                            <Button onClick={() => deleteHandler(photos._id)} $color="red" $width="100%" $height="40px"><FaIcons.FaTrash /></Button>
                                        </ButtonContainer>
                                    </GridBox>
                                ))
                            }
                        </Grid>
                    )
                }
            </Container>
        </GalleryContainer>
    )
}

export default Gallery
