import * as S from './RegisterStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { signUp } from '../../Api.js'
import { useState } from 'react'

export const Register = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.ContainerSignup>
                    <S.ModalBlock>
                        <S.ModalFormLogin action="#">
                            <S.ModalButtonLink to="/">
                                <S.ModalLogo>
                                    <img
                                        src="../img/logo_modal.png"
                                        alt="logo"
                                    />
                                </S.ModalLogo>
                            </S.ModalButtonLink>
                            <S.ModalInput
                                type="text"
                                name="login"
                                placeholder="Почта"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                            />
                            <S.ModalButtonSignin>
                                <S.ModalButtonLink to="/login">
                                    Войти
                                </S.ModalButtonLink>
                            </S.ModalButtonSignin>
                            <S.ModalButton
                                onClick={signUp({ email, password })}
                            >
                                <S.ModalButtonLink to="/">
                                    Зарегистрироваться
                                </S.ModalButtonLink>
                            </S.ModalButton>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.ContainerSignup>
            </S.Wrapper>
        </>
    )
}
