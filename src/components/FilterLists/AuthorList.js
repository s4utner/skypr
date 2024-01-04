import * as S from './FIlterListsStyles.js'

export const AuthorList = ({ tracks }) => {
    let authors = tracks
        .map((track) => {
            return { id: track.id, author: track.author }
        })
        .filter((author) => {
            return author.author !== '-'
        })

    console.log(authors)

    return (
        <S.PopupList>
            {authors.map((author) => {
                return (
                    <S.PopupItem key={author.id}>{author.author}</S.PopupItem>
                )
            })}
        </S.PopupList>
    )
}
