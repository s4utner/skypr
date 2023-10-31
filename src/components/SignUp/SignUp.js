import * as S from './SignUpStyles.js'

const signUp = () => {
    return (
        <S.Wrapper>
            <S.ContainerSignup>
                <S.ModalBlock>
                    <S.ModalFormLogin action="#">
                        <a href="../">
                            <S.ModalLogo>
                                <img src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </a>
                        <S.ModalInput
                            type="text"
                            name="login"
                            placeholder="Почта"
                        />
                        <S.ModalInput
                            type="password"
                            name="password"
                            placeholder="Пароль"
                        />
                        <S.ModalButton>
                            <a href="../index.html">Войти</a>
                        </S.ModalButton>
                        <S.ModalButton>
                            <a href="signup.html">Зарегистрироваться</a>
                        </S.ModalButton>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerSignup>
        </S.Wrapper>
    )
}

export default signUp
