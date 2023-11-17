import NavMenu from '../../components/NavMenu/NavMenu.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer.js'
import Centerblock from '../../components/Centerblock/Centerblock.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import * as S from './MainPageStyles.js'

export const MainPage = ({
    isPlayerVisible,
    tracks,
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
}) => {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        {NavMenu()}
                        {Centerblock({
                            tracks,
                            isLoading,
                            setIsPlayerVisible,
                            loadingTracksError,
                        })}
                        {Sidebar()}
                    </S.Main>
                    {AudioPlayer({ isPlayerVisible })}
                </S.Container>
            </S.Wrapper>
        </>
    )
}
