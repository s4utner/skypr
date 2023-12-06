import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './SidebarStyles.js'
import { Categories } from '../../constants.js'

const Sidebar = ({ isLoading }) => {
    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>Denis Sautner</S.SidebarPersonalName>
                <S.SidebarIcon>
                    <svg alt="logout">
                        <use xlinkHref="../../../public/img/icon/logout.svg"></use>
                    </svg>
                </S.SidebarIcon>
            </S.SidebarPersonal>
            <S.SidebarBlock>
                <S.SidebarList>
                    {Categories.map((category) => {
                        return (
                            <S.SidebarItem key={category.id}>
                                <S.SidebarLink
                                    id={category.id}
                                    to={`/category/${category.id}`}
                                >
                                    {isLoading ? (
                                        <Skeleton
                                            width={250}
                                            height={150}
                                            baseColor="#202020"
                                            highlightColor="#444"
                                        />
                                    ) : (
                                        <S.SidebarImg
                                            src={category.img}
                                            alt={category.alt}
                                        />
                                    )}
                                </S.SidebarLink>
                            </S.SidebarItem>
                        )
                    })}
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
    )
}

export default Sidebar
