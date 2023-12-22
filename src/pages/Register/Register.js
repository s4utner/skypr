import * as S from './RegisterStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useState, useRef } from 'react'
import { UserContext } from '../../Authorization.js'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { register, getToken } from '../../Api.js'

export const Register = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState('')
    const [, setUserData] = useContext(UserContext)

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

        signUpButtonRef.current.disabled = true
        const response = await register({ email, password })

        if (response.status === 400) {
            setError(
                'Произошла ошибка с данными. Попробуйте изменить почту или пароль',
            )
            signUpButtonRef.current.disabled = false
            return
        } else if (response.status === 500) {
            setError('Сервер не отвечает, попробуй позже')
            signUpButtonRef.current.disabled = false
            return
        }

        const data = await response.json()
        setUserData(data.username)
        localStorage.setItem('user', JSON.stringify(data.username))
        signUpButtonRef.current.disabled = false
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
