import { useState } from 'react'
import * as S from './FilterButtonsStyles.js'

export const FilterButtons = ({
    tracks,
    selectedAuthors,
    setSelectedAuthors,
    isSelectedAuthor,
    setIsSelectedAuthor,
    selectedGenres,
    setSelectedGenres,
    isSelectedGenre,
    setIsSelectedGenre,
}) => {
    const [isActiveAuthorButton, setIsActiveAuthorButton] = useState(false)
    const [isActiveDateButton, setIsActiveDateButton] = useState(false)
    const [isActiveGenreButton, setIsActiveGenreButton] = useState(false)

    const [activeAuthor, setActiveAuthor] = useState(false)
    const [activeDate, setActiveDate] = useState(false)
    const [activeGenre, setActiveGenre] = useState(false)

    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleDate, setVisibleDate] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)

    const [activeDateFilter, setActiveDateFilter] = useState('По умолчанию')

    const clickOnAuthorFilter = () => {
        setIsActiveAuthorButton(!isActiveAuthorButton)
        setIsActiveDateButton(false)
        setIsActiveGenreButton(false)
        setActiveAuthor(!activeAuthor)
        setActiveDate(false)
        setActiveGenre(false)
        setVisibleAuthor(!visibleAuthor)
        setVisibleDate(false)
        setVisibleGenre(false)
    }
    const clickOnDateFilter = () => {
        setIsActiveAuthorButton(false)
        setIsActiveDateButton(!isActiveDateButton)
        setIsActiveGenreButton(false)
        setActiveAuthor(false)
        setActiveDate(!activeDate)
        setActiveGenre(false)
        setVisibleDate(!visibleDate)
        setVisibleAuthor(false)
        setVisibleGenre(false)
    }
    const clickOnGenreFilter = () => {
        setIsActiveAuthorButton(false)
        setIsActiveDateButton(false)
        setIsActiveGenreButton(!isActiveGenreButton)
        setActiveAuthor(false)
        setActiveDate(false)
        setActiveGenre(!activeGenre)
        setVisibleGenre(!visibleGenre)
        setVisibleAuthor(false)
        setVisibleDate(false)
    }

    return (
        <S.CenterblockFilter>
            <S.LeftFilters>
                <S.FilterTitle>Искать по:</S.FilterTitle>
                <S.FilterContent>
                    {selectedAuthors.length > 0 && (
                        <S.FilterCounter>
                            {selectedAuthors.length}
                        </S.FilterCounter>
                    )}
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
                    {selectedGenres.length > 0 && (
                        <S.FilterCounter>
                            {selectedGenres.length}
                        </S.FilterCounter>
                    )}
                    <S.FilterButton
                        $isActive={isActiveGenreButton}
                        onClick={clickOnGenreFilter}
                    >
                        жанру
                    </S.FilterButton>
                    {visibleGenre &&
                        GenreList({
                            tracks,
                            selectedGenres,
                            setSelectedGenres,
                            isSelectedGenre,
                            setIsSelectedGenre,
                        })}
                </S.FilterContent>
            </S.LeftFilters>
            <S.RightFilter>
                <S.FilterTitle>Сортировка:</S.FilterTitle>
                <S.FilterContent>
                    <S.FilterButton
                        $isActive={isActiveDateButton}
                        onClick={clickOnDateFilter}
                    >
                        {activeDateFilter}
                    </S.FilterButton>
                    {visibleDate && DateList({ setActiveDateFilter })}
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
        .filter(
            (value, index, self) =>
                self.findIndex((item) => item.author === value.author) ===
                index,
        )

    const clickOnAuthor = (author) => {
        if (selectedAuthors.includes(author)) {
            const authors = selectedAuthors.filter((selectedAuthor) => {
                return selectedAuthor !== author
            })

            setSelectedAuthors(authors)
        } else {
            setSelectedAuthors([...selectedAuthors, author])
        }
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

const GenreList = ({
    tracks,
    selectedGenres,
    setSelectedGenres,
    isSelectedGenre,
    setIsSelectedGenre,
}) => {
    let genres = tracks
        .map((track) => {
            return { id: track.id, genre: track.genre }
        })
        .filter(
            (value, index, self) =>
                self.findIndex((item) => item.genre === value.genre) === index,
        )

    const clickOnGenre = (genre) => {
        if (selectedGenres.includes(genre)) {
            const genres = selectedGenres.filter((selectedGenre) => {
                return selectedGenre !== genre
            })
            setSelectedGenres(genres)
        } else {
            setSelectedGenres([...selectedGenres, genre])
        }
    }

    return (
        <S.PopupList>
            {genres.map((genre) => {
                return (
                    <S.PopupItem
                        key={genre.id}
                        $isActive={isSelectedGenre}
                        onClick={() => {
                            clickOnGenre(genre.genre)
                            setIsSelectedGenre(!isSelectedGenre)
                        }}
                    >
                        {genre.genre}
                    </S.PopupItem>
                )
            })}
        </S.PopupList>
    )
}

const DateList = ({ setActiveDateFilter }) => {
    return (
        <S.PopupList>
            <S.PopupItem
                onClick={() => {
                    setActiveDateFilter('По умолчанию')
                }}
            >
                По умолчанию
            </S.PopupItem>
            <S.PopupItem
                onClick={() => {
                    setActiveDateFilter('Сначала старые')
                }}
            >
                Сначала старые
            </S.PopupItem>
            <S.PopupItem
                onClick={() => {
                    setActiveDateFilter('Сначала новые')
                }}
            >
                Сначала новые
            </S.PopupItem>
        </S.PopupList>
    )
}
