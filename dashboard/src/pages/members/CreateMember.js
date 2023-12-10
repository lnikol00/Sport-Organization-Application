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
    Select,
    Option
} from '../../styles/global/Form.styled'
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import { MEMBERS_CREATE_RESET } from '../../Redux/Constants/MemberConstants'
import { createMember } from '../../Redux/Actions/MemberAction'
import Loading from "../../utils/messages/Loading"
import Error from "../../utils/messages/Error"
import Toast from '../../utils/messages/Toast'

function CreateMember() {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [role, setRole] = useState("Predsjednik");

    const dispatch = useDispatch();

    const memberCreate = useSelector((state) => (state.memberCreate));
    const { error, loading, member } = memberCreate;

    useEffect(() => {
        if (member) {
            toast.success("New Member Added!")
            dispatch({ type: MEMBERS_CREATE_RESET });
            setName("");
            setImage("");
            setRole("Predsjednik");
        }
    }, [member, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMember(name, image, role));
    }

    return (
        <MainContainer>
            <Toast />
            <Wrapper onSubmit={handleSubmit}>
                <Link to="/members">
                    <Button
                        $width="170px"
                        $height="35px"
                        $fontSize="16px">Pregledaj članove</Button>
                </Link>
                <Title $fontSize="1.7em">Dodaj novog člana</Title>
                <Button
                    $width="100px"
                    $height="35px"
                    $fontSize="16px"
                >Objavi</Button>
            </Wrapper>
            {error && <Error>{error}</Error>}
            {loading && <Loading />}
            <FormContainer>
                <Form >
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
                        <Label>Ime člana: </Label>
                        <Input
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Pišite ovdje'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Container>
                    <Container>
                        <Label>Role člana: </Label>
                        <Select
                            $width="100%"
                            $height="40px"
                            type='text'
                            placeholder='Uneiste URL slike'
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <Option value="Predsjednik">Predsjednik</Option>
                            <Option value="Potpredsjesnik">Potpredsjednik</Option>
                            <Option value="Veslač">Veslač</Option>
                            <Option value="Bubnjar">Bubnjar</Option>
                            <Option value="Parićar">Parićar</Option>
                        </Select>
                    </Container>
                </Form>
            </FormContainer>
        </MainContainer>
    )
}

export default CreateMember
