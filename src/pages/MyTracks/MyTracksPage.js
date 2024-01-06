import * as S from './MyTracksPageStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import NavMenu from '../../components/NavMenu/NavMenu.js'
import Tracklist from '../../components/Tracklist/Tracklist.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getFavTracks, refreshToken } from '../../Api.js'
import { setTracks } from '../../store/slices.js'

export const MyTracksPage = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
    playlist,
    setPlaylist,
}) => {
    const dispatch = useDispatch()
    const tracks = useSelector((state) => state.tracks.tracks)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        setPlaylist('fav')
        async function getTracks() {
            let tracksResponse = await getFavTracks()

            if (tracksResponse.status === 401) {
                const tokensResponse = await refreshToken()
                const tokens = await tokensResponse.json()
                localStorage.setItem('accessToken', tokens.access)
                tracksResponse = await getFavTracks()
            }

            const tracks = await tracksResponse.json()
            dispatch(setTracks({ tracks }))
            setLoadingTracksError('')
            setIsLoading(false)
        }
        getTracks()
    }, [setLoadingTracksError, dispatch, setIsLoading, setPlaylist])

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        {NavMenu({ setIsPlayerVisible })}
                        <S.MainCenterblock>
                            <S.CenterblockSearch>
                                <S.SearchSvg>
                                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                                </S.SearchSvg>
                                <S.SearchText
                                    type="search"
                                    placeholder="Поиск"
                                    name="search"
                                    onChange={(event) => {
                                        setSearchText(event.target.value)
                                    }}
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
                                    playlist,
                                    searchText,
                                    tracks,
                                })}
                            </S.CenterblockContent>
                        </S.MainCenterblock>
                        {Sidebar({ isLoading, setIsPlayerVisible })}
                    </S.Main>
                </S.Container>
            </S.Wrapper>
        </>
    )
}
