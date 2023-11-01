import NavMenu from './components/NavMenu/NavMenu.js'
import Sidebar from './components/Sidebar/Sidebar.js'
import AudioPlayer from './components/AudioPlayer/AudioPlayer.js'
import Centerblock from './components/Centerblock/Centerblock.js'
import { GlobalStyle } from './GlobalStyle.js'
import * as S from './AppStyles.js'

function App() {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        {NavMenu()}
                        {Centerblock()}
                        {Sidebar()}
                    </S.Main>
                    {AudioPlayer()}
                    <footer></footer>
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default App
