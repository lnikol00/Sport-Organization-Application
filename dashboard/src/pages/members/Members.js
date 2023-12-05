import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    MainContainer,
    Wrapper,
    Container,
    Grid,
    GridBox,
} from '../../styles/pages/User.styled'
import { Paragraph, Title } from '../../styles/global/Text.styled'
import { Button } from '../../styles/global/Button.styled'
import { Input, Select, Option } from '../../styles/global/Form.styled'
import { Image } from '../../styles/global/Image.styled'
import { useDispatch, useSelector } from "react-redux"
import { listMembers } from '../../Redux/Actions/MemberAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"

function Members() {

    const dispatch = useDispatch();
    const membersList = useSelector((state) => state.membersList);
    const { loading, error, members } = membersList;

    useEffect(() => {
        dispatch(listMembers())
    }, [dispatch])

    return (
        <MainContainer>
            <Wrapper>
                <Title
                    fontSize="1.7em"
                    $openNavbar="block"
                >
                    Članovi
                </Title>
                <Link to="create">
                    <Button
                        $width="220px"
                        $height="35px"
                        $fontSize="16px"
                    >Kreairaj novog člana</Button>
                </Link>
            </Wrapper>
            <Container>
                <Wrapper $flexDirection="column" $responsiveGap="20px">
                    <Input
                        $width="350px"
                        $height="35px"
                        type='text'
                        placeholder='Search...'
                    />
                    <Wrapper $gap="20px;">
                        <Select
                            $width="150px"
                            $height="35px"
                        >
                            <Option>Prikaži 20</Option>
                        </Select>
                        <Select
                            $width="150px"
                            $height="35px"
                        >
                            <Option>Status: SVI</Option>
                        </Select>
                    </Wrapper>
                </Wrapper>
                {
                    loading ? (<Loading />) : error ? (<Error>{error}</Error>) : (
                        <Grid>
                            {
                                members.map((member) => (
                                    <GridBox key={member._id}>
                                        <Image
                                            $width="90px"
                                            $height="90px"
                                            $borderRadius="50%"
                                            src={member.image} alt={member.name}
                                        />
                                        <Title $fontSize="18px">
                                            {member.name}
                                        </Title>
                                        <Paragraph $fontSize="16px">
                                            {member.role}
                                        </Paragraph>
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

export default Members
