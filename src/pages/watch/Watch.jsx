import { KeyboardBackspace } from "@mui/icons-material"
import "./watch.scss"
import strngr from "./strnger.mp4"
import {Link} from "react-router-dom";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <Link to="/" className="link">
                    <KeyboardBackspace id="kbs"/>
                </Link>
            </div>
            <video className="video" autoPlay progress controls src={strngr}/>

        </div>
    )
}
