import Tracklist from '../Tracklist/Tracklist.js'
import { FilterButtons } from '../FilterButtons/FilterButtons.js'
import * as S from './CenterblockStyles.js'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Centerblock = (
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    isPlaying,
    handleStart,
    handleStop,
    togglePlay,
) => {
    const [title, setTitle] = useState('')
    const params = useParams()

    switch (params) {
        case 'favorites':
            setTitle('Мои треки')
            break
        case 'category/1':
            setTitle('Плейлист')
            break
        default:
            setTitle('Треки')
    }
    return (
        <S.MainCenterblock>
            <S.CenterblockSearch>
                <S.SearchSvg>
                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </S.SearchSvg>
                <S.SearchText type="search" placeholder="Поиск" name="search" />
            </S.CenterblockSearch>
            <S.CenterblockHeading>{title}</S.CenterblockHeading>
            {FilterButtons()}
            <S.CenterblockContent>
                <S.ContentTitle>
                    <S.PlaylistTitleTrack>Трек</S.PlaylistTitleTrack>
                    <S.PlaylistTitleAuthor>ИСПОЛНИТЕЛЬ</S.PlaylistTitleAuthor>
                    <S.PlaylistTitleAlbum>АЛЬБОМ</S.PlaylistTitleAlbum>
                    <S.PlaylistTitleImage>
                        <S.PlaylistTitleSvg alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                        </S.PlaylistTitleSvg>
                    </S.PlaylistTitleImage>
                </S.ContentTitle>
                {Tracklist(
                    isLoading,
                    setIsPlayerVisible,
                    loadingTracksError,
                    isPlaying,
                    handleStart,
                    handleStop,
                    togglePlay,
                )}
            </S.CenterblockContent>
        </S.MainCenterblock>
    )
}

export default Centerblock
