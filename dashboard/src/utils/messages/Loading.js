import React from 'react'
import { MainContainer } from '../../styles/messages/Loading.styled'
import { Text } from '../../styles/global/Text.styled'

const Loading = () => {
    return (
        <MainContainer>
            <Text $fontSize="18px">Loading...</Text>
        </MainContainer>
    )
}

export default Loading