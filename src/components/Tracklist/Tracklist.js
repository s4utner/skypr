import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TracklistStyles.js'
import { getAllTracks } from '../../Api.js'

const Tracklist = () => {
    const [tracks, setTracks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, [])

    useEffect(() => {
        getAllTracks().then((response) => {
            console.log(response)
            setTracks(response)
            console.log(tracks)
        })
    }, [])

    return (
        <S.ContentPlaylist>
            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                Nero
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Welcome Reality
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>4:44</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Elektro{' '}
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                Dynoro, Outwork, Mr. Gee
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Elektro
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>2:22</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    I’m Fire{' '}
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                Ali Bakgor
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                I’m Fire
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>2:22</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Non Stop
                                    <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                Стоункат, Psychopath
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Non Stop
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>4:12</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Run Run
                                    <S.TrackTitleSpan>
                                        (feat. AR/CO)
                                    </S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                Jaded, Will Clarke, AR/CO
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Run Run
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>2:54</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Eyes on Fire
                                    <S.TrackTitleSpan>
                                        (Zeds Dead Remix)
                                    </S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                Blue Foundation, Zeds Dead
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Eyes on Fire
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>5:20</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Mucho Bien
                                    <S.TrackTitleSpan>
                                        (Hi Profile Remix)
                                    </S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                HYBIT, Mr. Black, Offer Nissim, Hi Profile
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Mucho Bien
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>3:41</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Knives n Cherries
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                minthaze
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Captivating
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>1:48</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Knives n Cherries
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                minthaze
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Captivating
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>1:48</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Knives n Cherries
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                minthaze
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Captivating
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>1:48</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Knives n Cherries
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                minthaze
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Captivating
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>1:48</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Knives n Cherries
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                minthaze
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Captivating
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>1:48</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Knives n Cherries
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                minthaze
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Captivating
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>1:48</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>
            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Knives n Cherries
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                minthaze
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Captivating
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>1:48</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    How Deep Is Your Love
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                Calvin Harris, Disciples
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                How Deep Is Your Love
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>3:32</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Morena <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="http://">
                                Tom Boxer
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Soundz Made in Romania
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>3:36</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>

            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            {isLoading ? (
                                <Skeleton
                                    width={55}
                                    height={55}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            )}
                        </S.TrackTitleImage>
                        <div>
                            {isLoading ? (
                                <Skeleton
                                    width={270}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.TrackTitleLink href="http://">
                                    Lost
                                    <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                            )}
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        {isLoading ? (
                            <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAuthorLink href="https://">
                                Linkin Park
                            </S.TrackAuthorLink>
                        )}
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        {isLoading ? (
                            <Skeleton
                                width={200}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <S.TrackAlbumLink href="http://">
                                Meteora
                            </S.TrackAlbumLink>
                        )}
                    </S.TrackAlbum>
                    <div>
                        {isLoading ? (
                            <Skeleton
                                width={60}
                                baseColor="#202020"
                                highlightColor="#444"
                            />
                        ) : (
                            <>
                                <S.TrackTimeSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackTimeSvg>
                                <S.TrackTimeText>3:18</S.TrackTimeText>
                            </>
                        )}
                    </div>
                </S.PlaylistTrack>
            </S.PlaylistItem>
        </S.ContentPlaylist>
    )
}

export default Tracklist
