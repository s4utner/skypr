import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './SidebarStyles.js'
import { Categories } from '../../constants.js'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Authorization.js'

const Sidebar = ({ isLoading }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    const [userData] = useContext(UserContext)

    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>
                    {userData ?? 'Не авторизован'}
                </S.SidebarPersonalName>
                <S.SidebarIcon onClick={handleLogout}>
                    <svg alt="logout">
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
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
