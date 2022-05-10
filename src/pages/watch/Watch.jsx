import { KeyboardBackspace } from "@mui/icons-material"
import "./watch.scss"
import strngr from "./strnger.mp4"
export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <KeyboardBackspace id="kbs"/>
            </div>
            <video className="video" autoPlay progress controls src={strngr}/>

        </div>
    )
}
