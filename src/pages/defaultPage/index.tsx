import React, {useCallback} from 'react';
import {ButtonContainer, ButtonSignIn, ButtonSignUp, Container, Description, Title, Wrapper} from './index.styles';
import {navigate} from "@reach/router";
import {ROUTES} from '../../router'

export function DefaultPage() {

    const handleToGoSignIn = useCallback(() => {
        navigate(ROUTES.public.signIn)
    },[])

    const handleToGoSignUp = useCallback(() => {
        navigate(ROUTES.public.signUp)
    },[])


    return (
        <Wrapper>
            <Container>
                <Title size='h1'>ByIt</Title>
                <Description>
                    Небольшой помощник для управления списком покупок.
                </Description>
                <ButtonContainer>
                    <ButtonSignIn color='primary' onClick={handleToGoSignIn}>Вход</ButtonSignIn>
                    <ButtonSignUp color='secondary' onClick={handleToGoSignUp}>Регистрация</ButtonSignUp>
                </ButtonContainer>

            </Container>
        </Wrapper>
    );
}