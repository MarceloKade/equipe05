import * as C from '@/components/TopBar/Container';
import * as E from '@/components/TopBar/Elements';

export function TopBar() {
    return (
        <C.TopBarContainer>
            <C.NavBarContainer>
                <E.Logo />
                <C.MenuContainer>
                    <C.OlContainer>
                        <C.LiContainer>
                            <E.Sobre />
                        </C.LiContainer>
                        <C.LiContainer>
                        <E.Beneficios />
                        </C.LiContainer>
                        <C.LiContainer>
                            <E.Oportunidades />
                        </C.LiContainer>
                        <C.LiContainer>
                            <E.Comunidade />
                        </C.LiContainer>
                    </C.OlContainer>
                </C.MenuContainer>
                <C.ButtonContainer>
                    <E.ButtonTopBar />
                </C.ButtonContainer>
            </C.NavBarContainer>
        </C.TopBarContainer>
    )
}