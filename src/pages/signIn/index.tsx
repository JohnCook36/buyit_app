import {
    Container,
    Description,
    Title,
    TitleComponent,
    Wrapper,
    GoggleButton,
    ButtonTitle,
    InputComponents, Input, InputComponentEmail, HelpPassword, InputComponentPassword, ButtonLog
} from "./index.styles";
import React from "react";
import {GlobalSuspense} from "../../components";


export function SignIn() {
    return (
        <Wrapper>
            <Container>
                <TitleComponent>
                    <Title size="h2"> Вход в BuyIt</Title>
                </TitleComponent>
                <GoggleButton color='secondary'>
                    <ButtonTitle>Войти через Google</ButtonTitle>
                </GoggleButton>
                <Description>или</Description>

                <InputComponents>
                    <InputComponentEmail>
                        <Input
                            title="Почта"
                            placeholder="Введите почту"
                            type="email"
                            name="email"
                        />
                    </InputComponentEmail>

                    <InputComponentPassword>
                    <Input title={
                            <>
                                Пароль
                                <HelpPassword>
                                    Забыли пароль?
                                </HelpPassword>
                            </>
                        }
                        placeholder="Введите пароль"
                        type="password"
                        name="password"
                    />
                </InputComponentPassword>
                </InputComponents>
                <ButtonLog
                    color="primary"
                >
                    Войти
                </ButtonLog>
            </Container>
        </Wrapper>
    )
}

export default function SignInPage() {
    return (
        <GlobalSuspense>
            <SignIn />
        </GlobalSuspense>
    )
}