import * as S from './MyTracksPageStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import NavMenu from '../../components/NavMenu/NavMenu.js'
import Tracklist from '../../components/Tracklist/Tracklist.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import { useDispatch } from 'react-redux'
import { useGetFavTracksQuery } from '../../services/musicApi.js'
import { useEffect, useState } from 'react'
import { getFavTracks, refreshToken } from '../../Api.js'
import { setTracks } from '../../store/slices.js'

export const MyTracksPage = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
}) => {
    const dispatch = useDispatch()

    const { data = [], error, isError, loading } = useGetFavTracksQuery()

    const [tracksData, setTracksData] = useState([])

    useEffect(() => {
        //setTracksData(data)

        if (error && error.status === 401) {
            refreshToken()
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    localStorage.setItem('accessToken', response.access)
                })
                .then(async () => {
                    const tracksResponse = await getFavTracks()
                    const tracks = await tracksResponse.json()
                    //setTracksData(tracks)
                })
        } else if (error && error.status !== 401) {
            setLoadingTracksError(`При загрузке треков произошла ошибка`)
        }

        dispatch(setTracks({ data }))
        setLoadingTracksError('')
        setIsLoading(false)
    }, [isError, error, setLoadingTracksError, data, dispatch, setIsLoading])

    const playlist = 'fav'

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
                                    data,
                                    error,
                                    loading,
                                    playlist,
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
