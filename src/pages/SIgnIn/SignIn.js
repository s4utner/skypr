import * as S from './SignInStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'

export const SignIn = () => {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.ContainerEnter>
                    <S.ModalBlock>
                        <S.ModalFormLogin action="#">
                            <a href="../">
                                <S.ModalLogo>
                                    <img
                                        src="../img/logo_modal.png"
                                        alt="logo"
                                    />
                                </S.ModalLogo>
                            </a>
                            <S.ModalInputLogin
                                type="text"
                                name="login"
                                placeholder="Почта"
                            />
                            <S.ModalInput
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <S.ModalButtonEnter>
                                <a href="../index.html">Войти</a>
                            </S.ModalButtonEnter>
                            <S.ModalButtonSignup>
                                <a href="signup.html">Зарегистрироваться</a>
                            </S.ModalButtonSignup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.ContainerEnter>
            </S.Wrapper>
        </>
    )
}

