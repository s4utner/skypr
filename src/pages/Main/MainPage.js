import NavMenu from '../../components/NavMenu/NavMenu.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import { FilterButtons } from '../../components/FilterButtons/FilterButtons.js'
import Tracklist from '../../components/Tracklist/Tracklist.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import * as S from './MainPageStyles.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setTracks } from '../../store/slices.js'
import { getAllTracks } from '../../Api.js'

export const MainPage = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
    playlist,
    setPlaylist,
}) => {
    const tracks = useSelector((state) => state.tracks.tracks)
    const [searchText, setSearchText] = useState('')
    const [selectedAuthors, setSelectedAuthors] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const [selectedSort, setSelectedSort] = useState('По умолчанию')
    const dispatch = useDispatch()

    useEffect(() => {
        setPlaylist('main')
        getAllTracks()
            .then((tracks) => {
                dispatch(setTracks({ tracks }))
            })
            .then(() => {
                setLoadingTracksError('')
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [dispatch, setLoadingTracksError, setIsLoading, setPlaylist])

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
                                    onChange={(event) => {
                                        setSearchText(event.target.value)
                                    }}
                                />
                            </S.CenterblockSearch>
                            <S.CenterblockHeading>Треки</S.CenterblockHeading>
                            {FilterButtons({
                                tracks,
                                selectedAuthors,
                                setSelectedAuthors,
                                selectedGenres,
                                setSelectedGenres,
                                selectedSort,
                                setSelectedSort,
                            })}
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
                                    selectedAuthors,
                                    selectedGenres,
                                    selectedSort,
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
