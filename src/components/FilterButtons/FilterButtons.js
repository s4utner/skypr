import { useState } from 'react'
import * as S from './FilterButtonsStyles.js'

export const FilterButtons = ({
    tracks,
    selectedAuthors,
    setSelectedAuthors,
    isSelectedAuthor,
    setIsSelectedAuthor,
}) => {
    const [isActiveAuthorButton, setIsActiveAuthorButton] = useState(false)
    const [isActiveYearButton, setIsActiveYearButton] = useState(false)
    const [isActiveGenreButton, setIsActiveGenreButton] = useState(false)

    const [activeAuthor, setActiveAuthor] = useState(false)
    const [activeYear, setActiveYear] = useState(false)
    const [activeGenre, setActiveGenre] = useState(false)

    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)

    const clickOnAuthorFilter = () => {
        setIsActiveAuthorButton(!isActiveAuthorButton)
        setIsActiveYearButton(false)
        setIsActiveGenreButton(false)
        setActiveAuthor(!activeAuthor)
        setActiveYear(false)
        setActiveGenre(false)
        setVisibleAuthor(!visibleAuthor)
        setVisibleYear(false)
        setVisibleGenre(false)
    }
    const clickOnYearFilter = () => {
        setIsActiveAuthorButton(false)
        setIsActiveYearButton(!isActiveYearButton)
        setIsActiveGenreButton(false)
        setActiveAuthor(false)
        setActiveYear(!activeYear)
        setActiveGenre(false)
        setVisibleYear(!visibleYear)
        setVisibleAuthor(false)
        setVisibleGenre(false)
    }
    const clickOnGenreFilter = () => {
        setIsActiveAuthorButton(false)
        setIsActiveYearButton(false)
        setIsActiveGenreButton(!isActiveGenreButton)
        setActiveAuthor(false)
        setActiveYear(false)
        setActiveGenre(!activeGenre)
        setVisibleGenre(!visibleGenre)
        setVisibleAuthor(false)
        setVisibleYear(false)
    }

    return (
        <S.CenterblockFilter>
            <S.LeftFilters>
                <S.FilterTitle>Искать по:</S.FilterTitle>
                <S.FilterContent>
                    <S.FilterButton
                        $isActive={isActiveAuthorButton}
                        onClick={clickOnAuthorFilter}
                    >
                        исполнителю
                    </S.FilterButton>
                    {visibleAuthor &&
                        AuthorList({
                            tracks,
                            selectedAuthors,
                            setSelectedAuthors,
                            isSelectedAuthor,
                            setIsSelectedAuthor,
                        })}
                </S.FilterContent>
                <S.FilterContent>
                    <S.FilterButton
                        $isActive={isActiveGenreButton}
                        onClick={clickOnGenreFilter}
                    >
                        жанру
                    </S.FilterButton>
                    {visibleGenre && GenreList({ tracks })}
                </S.FilterContent>
            </S.LeftFilters>
            <S.RightFilter>
                <S.FilterTitle>Сортировка:</S.FilterTitle>
                <S.FilterContent>
                    <S.FilterButton
                        $isActive={isActiveYearButton}
                        onClick={clickOnYearFilter}
                    >
                        году выпуска
                    </S.FilterButton>
                    {visibleYear && YearList()}
                </S.FilterContent>
            </S.RightFilter>
        </S.CenterblockFilter>
    )
}

const AuthorList = ({
    tracks,
    selectedAuthors,
    setSelectedAuthors,
    isSelectedAuthor,
    setIsSelectedAuthor,
}) => {
    let authors = tracks
        .map((track) => {
            return { id: track.id, author: track.author }
        })
        .filter((author) => {
            return author.author !== '-'
        })

    const clickOnAuthor = (author) => {
        console.log(selectedAuthors.includes(author))

        if (selectedAuthors.includes(author)) {
            setSelectedAuthors(null)
        }

        setSelectedAuthors([...selectedAuthors, author])
    }

    console.log(selectedAuthors)

    return (
        <S.PopupList>
            {authors.map((author) => {
                return (
                    <S.PopupItem
                        key={author.id}
                        onClick={() => {
                            clickOnAuthor(author.author)
                            setIsSelectedAuthor(!isSelectedAuthor)
                        }}
                        $isActive={isSelectedAuthor}
                    >
                        {author.author}
                    </S.PopupItem>
                )
            })}
        </S.PopupList>
    )
}

const GenreList = ({ tracks }) => {
    let genres = tracks.map((track) => {
        return { id: track.id, genre: track.genre }
    })

    console.log(genres)
    return (
        <S.PopupList>
            <S.PopupItem>Рок</S.PopupItem>
            <S.PopupItem>Хип-хоп</S.PopupItem>
            <S.PopupItem>Поп-музыка</S.PopupItem>
            <S.PopupItem>Техно</S.PopupItem>
            <S.PopupItem>Инди</S.PopupItem>
        </S.PopupList>
    )
}

const YearList = () => {
    return (
        <S.PopupList>
            <S.PopupItem>1991</S.PopupItem>
            <S.PopupItem>1992</S.PopupItem>
            <S.PopupItem>1993</S.PopupItem>
            <S.PopupItem>1994</S.PopupItem>
            <S.PopupItem>1995</S.PopupItem>
            <S.PopupItem>1996</S.PopupItem>
        </S.PopupList>
    )
}
