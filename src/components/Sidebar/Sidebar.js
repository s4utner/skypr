import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './SidebarStyles.js'

const Sidebar = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, [])

    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>Denis Sautner</S.SidebarPersonalName>
                <S.SidebarIcon>
                    <svg alt="logout">
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                </S.SidebarIcon>
            </S.SidebarPersonal>
            <S.SidebarBlock>
                <S.SidebarList>
                    <S.SidebarItem>
                        <S.SidebarLink href="#123">
                            {isLoading ? (
                                <Skeleton
                                    width={250}
                                    height={150}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.SidebarImg
                                    src="img/playlist01.png"
                                    alt="day's playlist"
                                />
                            )}
                        </S.SidebarLink>
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.SidebarLink href="#123">
                            {isLoading ? (
                                <Skeleton
                                    width={250}
                                    height={150}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.SidebarImg
                                    src="img/playlist02.png"
                                    alt="day's playlist"
                                />
                            )}
                        </S.SidebarLink>
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.SidebarLink href="#123">
                            {isLoading ? (
                                <Skeleton
                                    width={250}
                                    height={150}
                                    baseColor="#202020"
                                    highlightColor="#444"
                                />
                            ) : (
                                <S.SidebarImg
                                    src="img/playlist03.png"
                                    alt="day's playlist"
                                />
                            )}
                        </S.SidebarLink>
                    </S.SidebarItem>
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
    )
}

export default Sidebar
