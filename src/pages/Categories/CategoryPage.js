import * as S from './CategoryPageStyles.js'
import { GlobalStyle } from '../../GlobalStyle.js'
import { useParams } from 'react-router-dom'
import { Categories } from '../../constants.js'
import NavMenu from '../../components/NavMenu/NavMenu.js'
import Tracklist from '../../components/Tracklist/Tracklist.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPlaylist } from '../../Api.js'
import { setCategoryId, setTracks } from '../../store/slices.js'

export const CategoryPage = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
    playlist,
    setPlaylist,
}) => {
    const params = useParams()
    const category = Categories.find(
        (category) => category.id === Number(params.id),
    )
    const categoryId = category.id

    const title = `${category.title}`
    const dispatch = useDispatch()
    const tracks = useSelector((state) => state.tracks.tracks)

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        setPlaylist('category')
        dispatch(setCategoryId({ categoryId }))
        getPlaylist(categoryId)
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
    }, [setLoadingTracksError, dispatch, setIsLoading, categoryId, setPlaylist])

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
                                    <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
                                </S.SearchSvg>
                                <S.SearchText
                                    type="search"
                                    placeholder="Поиск"
                                    name="search"
                                    onChange={(event) =>
                                        setSearchText(event.target.value)
                                    }
                                />
                            </S.CenterblockSearch>
                            <S.CenterblockHeading>{title}</S.CenterblockHeading>
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
                                            <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
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
                                    categoryId,
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
