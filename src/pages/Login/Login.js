import * as S from './LoginStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useRef, useState } from 'react'
import { useAuthorization } from '../../Authorization.js'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()

    const { user } = useAuthorization()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

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

        try {
            const response = await fetch(
                'https://skypro-music-api.skyeng.tech/user/login/',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                    headers: {
                        'content-type': 'application/json',
                    },
                },
            )

            if (response.status === 400) {
                setError(
                    'Произошла ошибка с данными. Неверные логин или пароль',
                )
                return
            } else if (response.status === 401) {
                setError('Пользователь с таким email или паролем не найден')
                return
            } else if (response.status === 500) {
                setError('Сервер не отвечает, попробуй позже')
                return
            }

            const data = await response.json()
            user(data)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
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
                                    signInButtonRef.current.disabled = true
                                    handleSignIn({ email, password }).then(
                                        () => {},
                                    )
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
