import * as S from './LoginStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../Api.js'
import { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigate = useNavigate()
    const onClick = () => {
        localStorage.setItem('user', 'token')
        navigate('/')
    }

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.ContainerEnter>
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
                            <S.ModalInputLogin
                                type="text"
                                name="login"
                                placeholder="Почта"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                    console.log(email)
                                }}
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                    console.log(password)
                                }}
                            />
                            <S.ModalButtonEnter
                                onClick={() => signIn({ email, password })}
                            >
                                Войти
                            </S.ModalButtonEnter>
                            <S.ModalButtonSignup>
                                <S.ModalButtonLink to="/register">
                                    Зарегистрироваться
                                </S.ModalButtonLink>
                            </S.ModalButtonSignup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.ContainerEnter>
            </S.Wrapper>
        </>
    )
}
