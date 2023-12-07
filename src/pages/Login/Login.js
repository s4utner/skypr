import * as S from './LoginStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../Api.js'
import { useRef, useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const signInButtonRef = useRef(null)

    const navigate = useNavigate()

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
                            <S.ModalButtonEnter
                                ref={signInButtonRef}
                                onClick={() => {
                                    signInButtonRef.current.disabled = true
                                    signIn({ email, password }).then(() => {
                                        localStorage.setItem('user', 'token')
                                        navigate('/')
                                    })
                                }}
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
