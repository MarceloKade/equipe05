import * as C from "./Containers"
import * as E from "./Elements"

export default function Comunidade() {
    return (
        <C.ContainerSection>
        <C.Container>
            <C.DiscordContainer>
                <C.ShapeColorContainer>
                    <C.InnerContainer>
                        <E.LogoDiscord />
                        <C.TextContainer>
                            <E.Title />
                            <E.Description />
                        </C.TextContainer>
                        <E.Button />
                    </C.InnerContainer>
                    <C.ShapeContainer>
                        <E.StarLeft />
                        <E.StarRight />
                    </C.ShapeContainer>
                    <E.Circle1 />
                    <E.Circle2 />
                    <E.Circle3 />
                </C.ShapeColorContainer>
            </C.DiscordContainer>
        </C.Container>
        </C.ContainerSection>
    )
}