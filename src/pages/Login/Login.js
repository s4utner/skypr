import * as S from './LoginStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useRef, useState } from 'react'
import { UserContext } from '../../Authorization.js'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken, login } from '../../Api.js'

export const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [, setUserData] = useContext(UserContext)

    const signInButtonRef = useRef(null)

    async function handleSignIn({ email, password }) {
        if (email === '') {
            setError('Укажите почту')
            return
        }
        if (password === '') {
            setError('Укажите пароль')
            return
        }

        signInButtonRef.current.disabled = true
        const response = await login({ email, password })

        if (response.status === 400) {
            setError('Произошла ошибка с данными. Неверные логин или пароль')
            signInButtonRef.current.disabled = false
            return
        } else if (response.status === 401) {
            setError('Пользователь с таким email или паролем не найден')
            signInButtonRef.current.disabled = false
            return
        } else if (response.status === 500) {
            setError('Сервер не отвечает, попробуй позже')
            signInButtonRef.current.disabled = false
            return
        }

        const data = await response.json()
        setUserData(data.username)
        localStorage.setItem('user', JSON.stringify(data.username))
        signInButtonRef.current.disabled = false
        navigate('/')

        const tokenResponse = await getToken({ email, password })
        const tokens = await tokenResponse.json()
        const accessToken = tokens.access
        const refreshToken = tokens.refresh

        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
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
                            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                            <S.ModalButtonEnter
                                ref={signInButtonRef}
                                onClick={() => {
                                    handleSignIn({ email, password })
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
