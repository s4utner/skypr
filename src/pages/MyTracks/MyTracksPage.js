import * as S from './MyTracksPageStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import NavMenu from '../../components/NavMenu/NavMenu.js'
import Tracklist from '../../components/Tracklist/Tracklist.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'

export const MyTracksPage = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
}) => {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        {NavMenu()}
                        <S.MainCenterblock>
                            <S.CenterblockSearch>
                                <S.SearchSvg>
                                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                                </S.SearchSvg>
                                <S.SearchText
                                    type="search"
                                    placeholder="Поиск"
                                    name="search"
                                />
                            </S.CenterblockSearch>
                            <S.CenterblockHeading>
                                Мои треки
                            </S.CenterblockHeading>
                            <S.CenterblockContent>
                                <S.ContentTitle>
                                    <S.PlaylistTitleTrack>
                                        Трек
                                    </S.PlaylistTitleTrack>
                                    <S.PlaylistTitleAuthor>
                                        ИСПОЛНИТЕЛЬ
                                    </S.PlaylistTitleAuthor>
                                    <S.PlaylistTitleAlbum>
                                        АЛЬБОМ
                                    </S.PlaylistTitleAlbum>
                                    <S.PlaylistTitleImage>
                                        <S.PlaylistTitleSvg alt="time">
                                            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                                        </S.PlaylistTitleSvg>
                                    </S.PlaylistTitleImage>
                                </S.ContentTitle>
                                {Tracklist({
                                    isLoading,
                                    setIsPlayerVisible,
                                    loadingTracksError,
                                    setIsLoading,
                                    setLoadingTracksError,
                                })}
                            </S.CenterblockContent>
                        </S.MainCenterblock>
                        {Sidebar({ isLoading })}
                    </S.Main>
                </S.Container>
            </S.Wrapper>
        </>
    )
}
