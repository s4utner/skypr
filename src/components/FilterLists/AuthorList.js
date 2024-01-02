import * as S from './FIlterListsStyles.js'

export const AuthorList = ({ tracks }) => {
    const authors = tracks.map((track) => {
        return { id: track.id, author: track.author }
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
