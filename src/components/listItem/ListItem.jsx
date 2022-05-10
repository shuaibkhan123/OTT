import {AddCircleOutlineOutlined, CheckCircleOutlined, ExpandCircleDownOutlined, PlayCircleFilledWhite, RecommendOutlined} from "@mui/icons-material"
import "./listItem.scss"
import ST from "./StrangerThings_Header_940x470.jpg"

export default function Listitem() {
    return (
        <div className="listItem">
            <img src={ST} alt="" />

            <div className="itemInfo">
                <div className="icons">
                    <div className="leftIcon">
                        <PlayCircleFilledWhite id="play"  />
                        <AddCircleOutlineOutlined id="plus"/>
                        <RecommendOutlined id="recommend"/>
                    </div>
                    <div className="rightIcon">
                        <ExpandCircleDownOutlined id="expand"/>
                    </div>
                </div>
                <div className="itemInfoTop">
                    <span id="match">95% Match</span>
                    <span className="limit">U/A 13+</span>
                    <span>1h 37m</span>
                    <span>HD</span>
                </div>
                <div className="genre">Exciting</div>
            </div>


        </div>
    )
}
