import * as S from './SignInStyles.js'

const signIn = () => {
    return (
        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <S.ModalFormLogin action="#">
                        <S.Link href="../">
                            <S.ModalLogo>
                                <img src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </S.Link>
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
                            <S.Link href="../index.html">Войти</S.Link>
                        </S.ModalButtonEnter>
                        <S.ModalButtonSignup>
                            <S.Link href="signup.html">
                                Зарегистрироваться
                            </S.Link>
                        </S.ModalButtonSignup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    )
}

export default signIn
