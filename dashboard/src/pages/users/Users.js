import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    UserContainer,
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
import { listUser } from '../../Redux/Actions/UserAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"

function Users() {

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    useEffect(() => {
        dispatch(listUser())
    }, [dispatch])

    return (
        <UserContainer>
            <Wrapper>
                <Title
                    fontSize="1.7em"
                    $openNavbar="block"
                >
                    Korisnici
                </Title>
                <Button
                    $width="220px"
                    $height="35px"
                    $fontSize="16px"
                >Kreairaj novog korisnika</Button>
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
                <Grid>
                    {
                        loading ? (<Loading />) : error ? (<Error>{error}</Error>) :
                            (
                                users.map((user) => (
                                    <GridBox key={user._id}>
                                        <Image
                                            $width="90px"
                                            $height="90px"
                                            $borderRadius="50%"
                                            src={user.image} alt={user.name}
                                        />
                                        <Title $fontSize="18px">
                                            {user.name}
                                        </Title>
                                        {
                                            user.isAdmin === true ? (
                                                <Paragraph $fontSize="16px">
                                                    Admin
                                                </Paragraph>
                                            ) : (
                                                <Paragraph $fontSize="16px">
                                                    Customer
                                                </Paragraph>
                                            )
                                        }
                                        <Link>{user.email}</Link>
                                    </GridBox>
                                ))
                            )
                    }
                </Grid>
            </Container>

        </UserContainer>
    )
}

export default Users
