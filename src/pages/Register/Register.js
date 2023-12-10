import * as S from './RegisterStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useState, useRef } from 'react'
import { UserContext } from '../../Authorization.js'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState('')
    const [userData, setUserData] = useContext(UserContext)

    const signUpButtonRef = useRef(null)

    async function handleSignUp({ email, password }) {
        if (email === '') {
            setError('Укажите почту')
            return
        }
        if (password === '') {
            setError('Укажите пароль')
            return
        }
        if (password !== repeatPassword) {
            setError('Пароли не совпадают')
            return
        }

        try {
            const response = await fetch(
                'https://skypro-music-api.skyeng.tech/user/signup/',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        username: email,
                    }),
                    headers: {
                        'content-type': 'application/json',
                    },
                },
            )

            if (response.status === 400) {
                setError(
                    'Произошла ошибка с данными. Попробуйте изменить почту или пароль',
                )
                return
            } else if (response.status === 500) {
                setError('Сервер не отвечает, попробуй позже')
                return
            }

            const data = await response.json()
            setUserData(data)
            localStorage.setItem('user', JSON.stringify(userData.username))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

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
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Повторите пароль"
                                value={repeatPassword}
                                onChange={(event) => {
                                    setRepeatPassword(event.target.value)
                                }}
                            />
                            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                            <S.ModalButtonSignin>
                                <S.ModalButtonLink to="/login">
                                    Войти
                                </S.ModalButtonLink>
                            </S.ModalButtonSignin>
                            <S.ModalButton
                                ref={signUpButtonRef}
                                onClick={() => {
                                    signUpButtonRef.current.disabled = true
                                    handleSignUp({ email, password })
                                }}
                            >
                                <S.ModalButtonLink>
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
