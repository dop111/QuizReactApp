import bgGraphics1 from "./assets/backgroundGraphics1.svg"
import bgGraphics2 from "./assets/backgroundGraphics2.svg"

export function BgImages() {
    return (
        <>
            <img id="bg1" style = {{position: "fixed", top: 0, right: 0,zIndex:-5}} src = {bgGraphics1} />
            <img id="bg2" style = {{position: "fixed", bottom: 0, left: 0,zIndex:-5}} src = {bgGraphics2} />
        </>
    )
}