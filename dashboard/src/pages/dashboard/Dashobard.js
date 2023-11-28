import React from 'react'
import * as FaIcons from "react-icons/fa"
import {
    DashboardContainer,
    Stats,
    Container,
    Wrapper,
    Charts,
    Orders
} from '../../styles/pages/Dashobard.styled'
import {
    Icon,
    Quantity,
    Title
} from '../../styles/global/Text.styled'

function Dashobard() {
    return (
        <DashboardContainer>
            <Title
                fontSize="1.7em"
            >
                Dashboard
            </Title>
            <Stats>
                <Container $width="33%" $alignItems="center">
                    <Icon $fontSize="20px">
                        <FaIcons.FaEuroSign />
                    </Icon>
                    <Wrapper>
                        <Title
                            $fontSize="15px"
                        >
                            Ukupna zarada
                        </Title>
                        <Quantity
                            $fontSize="15px"
                        >
                            132543
                        </Quantity>
                    </Wrapper>
                </Container>

                <Container $width="33%" $alignItems="center">
                    <Icon $fontSize="20px">
                        <FaIcons.FaShoppingBag />
                    </Icon>
                    <Wrapper>
                        <Title
                            $fontSize="15px"
                        >
                            Ukupno narudžbi
                        </Title>
                        <Quantity
                            $fontSize="15px"
                        >
                            12
                        </Quantity>
                    </Wrapper>
                </Container>

                <Container $width="33%" $alignItems="center">
                    <Icon $fontSize="20px">
                        <FaIcons.FaShoppingCart />
                    </Icon>
                    <Wrapper>
                        <Title
                            $fontSize="15px"
                        >
                            Ukupno proizvoda
                        </Title>
                        <Quantity
                            $fontSize="15px"
                        >
                            10
                        </Quantity>
                    </Wrapper>
                </Container>
            </Stats>

            <Charts>
                <Container $width="50%" $flexDirection="column" $alignItems="flex-start">
                    <Title
                        $fontSize="20px"
                    >
                        Sale statistics
                    </Title>
                </Container>
                <Container $width="50%" $flexDirection="column" $alignItems="flex-start">
                    <Title
                        $fontSize="20px"
                    >
                        Product statistic
                    </Title>
                </Container>
            </Charts>

            <Orders>
                <Title
                    $fontSize="20px"
                >
                    Latest Orders
                </Title>
            </Orders>

        </DashboardContainer>
    )
}

export default Dashobard
