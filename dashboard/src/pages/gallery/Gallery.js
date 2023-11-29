import React, { useEffect } from 'react'
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
import { listPhotos } from '../../Redux/Actions/PhotosAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"


function Gallery() {

    const dispatch = useDispatch();

    const photosList = useSelector((state) => state.photosList);
    const { loading, error, photos } = photosList;

    useEffect(() => {
        dispatch(listPhotos());
    }, [dispatch])

    return (
        <GalleryContainer>
            <Wrapper>
                <Title
                    fontSize="1.7em"
                    $openNavbar="block"
                >
                    Galerija
                </Title>
                <Button
                    $width="220px"
                    $height="35px"
                    $fontSize="16px"
                >Dodaj novu sliku</Button>
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
                        loading ? (<Loading />) : error ? (<Error>{error}</Error>) :
                            (
                                photos.map((photos) => (
                                    <GridBox key={photos._id}>
                                        <Image
                                            $width="100%"
                                            $height="200px"
                                            src={photos.image}
                                            alt="images"
                                        />
                                        <ButtonContainer>
                                            <Button $width="100%" $height="40px"><FaIcons.FaTrash /></Button>
                                        </ButtonContainer>
                                    </GridBox>
                                ))
                            )
                    }
                </Grid>
            </Container>
        </GalleryContainer>
    )
}

export default Gallery
