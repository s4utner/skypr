import { GlobalStyle } from './GlobalStyle.js'
import * as S from './AppStyles.js'
import { AppRoutes } from './routes.js'

function App() {
    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <AppRoutes />
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default App
