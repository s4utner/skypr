import NavMenu from '../../components/NavMenu/NavMenu.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import Centerblock from '../../components/Centerblock/Centerblock.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import * as S from './MainPageStyles.js'

export const MainPage = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    isPlaying,
    handleStart,
    handleStop,
    togglePlay,
}) => {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        {NavMenu()}
                        {Centerblock({
                            isLoading,
                            setIsPlayerVisible,
                            loadingTracksError,
                            isPlaying,
                            handleStart,
                            handleStop,
                            togglePlay,
                        })}
                        {Sidebar({ isLoading })}
                    </S.Main>
                </S.Container>
            </S.Wrapper>
        </>
    )
}
