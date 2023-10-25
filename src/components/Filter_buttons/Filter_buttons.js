import './Filter_buttons.css'
import { useState } from 'react'
import { AuthorList } from '../Filter_lists/Author_list.js'
import { YearList } from '../Filter_lists/Year_list.js'
import { GenreList } from '../Filter_lists/Genre_list.js'

export const Filter_buttons = () => {
    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)

    const clickOnAuthorFilter = () => {
        setVisibleAuthor(!visibleAuthor)
        setVisibleYear(false)
        setVisibleGenre(false)
    }
    const clickOnYearFilter = () => {
        setVisibleYear(!visibleYear)
        setVisibleAuthor(false)
        setVisibleGenre(false)
    }
    const clickOnGenreFilter = () => {
        setVisibleGenre(!visibleGenre)
        setVisibleAuthor(false)
        setVisibleYear(false)
    }

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div
                className="filter__button button-author _btn-text"
                onClick={clickOnAuthorFilter}
            >
                исполнителю
            </div>
            {visibleAuthor && AuthorList()}
            <div
                className="filter__button button-year _btn-text"
                onClick={clickOnYearFilter}
            >
                году выпуска
            </div>
            {visibleYear && YearList()}
            <div
                className="filter__button button-genre _btn-text"
                onClick={clickOnGenreFilter}
            >
                жанру
            </div>
            {visibleGenre && GenreList()}
        </div>
    )
}
