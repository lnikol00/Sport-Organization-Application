import React from 'react'
import { MainContainer } from '../../styles/messages/Error.styled'

const Error = ({ children }) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}

export default Error
