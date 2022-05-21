import {Add, ExpandMore, PlayArrow, ThumbUpOffAlt} from "@mui/icons-material"
import "./listItem.scss"
import ST from "./StrangerThings_Header_940x470.jpg"
import strngr from "./strnger.mp4"
import { useState } from "react";
import {Link} from "react-router-dom";

export default function Listitem({index}) {
        const [isHovered, setIsHovered] = useState(false);
        const trailer = strngr;
    return (
        <div className="listItem" style={{left: isHovered && (index*225) - 30 + (index*2.5)}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <img src={ST} alt="" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop/>
                    <div className="itemInfo">
                        <div className="icons">
                            <div className="leftIcon">
                                <Link to="/watch" className="link">
                                    <PlayArrow id="play"  />
                                </Link>    
                                <Add id="plus"/>
                                <ThumbUpOffAlt fontSize="small" id="recommend"/>
                            </div>
                            <div className="rightIcon">
                                <ExpandMore id="expand"/>
                            </div>
                        </div>
                        <div className="itemInfoTop">
                            <span id="match">95% Match</span>
                            <span className="limit">U/A 13+</span>
                            <span id="time">1h 37m</span>
                            <span id="res">HD</span>
                        </div>
                        <div className="genre">Exciting</div>
                    </div>
                </>
            )}
        </div>
    )
}
