import NavMenu from '../../components/NavMenu/NavMenu.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import { FilterButtons } from '../../components/FilterButtons/FilterButtons.js'
import Tracklist from '../../components/Tracklist/Tracklist.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import * as S from './MainPageStyles.js'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setTracks } from '../../store/slices.js'
import { useGetAllTracksQuery } from '../../services/musicApi.js'

export const MainPage = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
}) => {
    const dispatch = useDispatch()

    const { data = [], error, loading } = useGetAllTracksQuery()

    useEffect(() => {
        dispatch(setTracks({ data }))
        setLoadingTracksError('')
        setIsLoading(false)
    }, [data, dispatch, setLoadingTracksError, setIsLoading])
    console.log(data)

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
                            <S.CenterblockHeading>Треки</S.CenterblockHeading>
                            {FilterButtons()}
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
                                    data,
                                    error,
                                    loading,
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
