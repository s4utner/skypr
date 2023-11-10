import { useState } from 'react'
import * as S from './NavMenuStyles.js'

const NavMenu = () => {
    const [visible, setVisible] = useState(false)
    const clickOnBurger = () => setVisible(!visible)
    const clearLocalStorage = () => {
        localStorage.removeItem('user')
    }

    return (
        <S.MainNav>
            <S.NavLogo>
                <S.LogoImage src="img/logo.png" alt="logo" />
            </S.NavLogo>
            <S.NavBurger onClick={clickOnBurger}>
                <S.BurgerLine></S.BurgerLine>
                <S.BurgerLine></S.BurgerLine>
                <S.BurgerLine></S.BurgerLine>
            </S.NavBurger>
            {visible && (
                <S.NavMenu>
                    <S.MenuList>
                        <S.MenuItem>
                            <S.MenuLink to="/">Главное</S.MenuLink>
                        </S.MenuItem>
                        <S.MenuItem>
                            <S.MenuLink to="/favorites">
                                Мой плейлист
                            </S.MenuLink>
                        </S.MenuItem>
                        <S.MenuItem>
                            <S.MenuLink to="/login">
                                {localStorage.getItem('user')
                                    ? 'Выйти'
                                    : 'Войти'}
                            </S.MenuLink>
                        </S.MenuItem>
                    </S.MenuList>
                </S.NavMenu>
            )}
        </S.MainNav>
    )
}

export default NavMenu
