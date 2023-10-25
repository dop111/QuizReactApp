import bgGraphics1 from "./assets/backgroundGraphics1.svg"
import bgGraphics2 from "./assets/backgroundGraphics2.svg"

export function BgImages() {
    return (
        <>
            <img id="bg1" style = {{position: "absolute", top: 0, right: 0}} src = {bgGraphics1} />
            <img id="bg2" style = {{position: "absolute", bottom: 0, left: 0}} src = {bgGraphics2} />
        </>
    )
}