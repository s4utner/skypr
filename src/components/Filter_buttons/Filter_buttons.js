import './Filter_buttons.css'

export const Filter_buttons = () => {
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__button button-author _btn-text">
                <div>исполнителю</div>
            </div>
            <div className="filter__button button-year _btn-text">
                году выпуска
            </div>
            <div className="filter__button button-genre _btn-text">жанру</div>
        </div>
    )
}
