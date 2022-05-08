import { InfoOutlined, PlayArrowRounded } from "@mui/icons-material"
import "./featured.scss"

export default function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movie"? "Movies" : "TV Shows"}</span>
                    <select name="genre" id="genre">
                        <option>Genres</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://blog.frame.io/wp-content/uploads/2021/06/B0328-featured-image.jpg" alt="" />
            <div className="info">
                {/* <img src="https://cdn10.bigcommerce.com/s-yhxhf/products/19444/images/71233/STMOV002_5x25__51142.1526951763.1080.1080.jpg?c=2" alt="" /> */}
                <div className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reprehenderit odit architecto rerum odio sequi assumenda 
                    repellat nihil blanditiis exercitationem commodi saepe 
                    minus ex nisi fugiat tenetur voluptas quod, nemo ipsa?
                </div>

                <div className="butt">
                    <button className="play">
                        <PlayArrowRounded id="playarrow"/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined id="infoOut"/>
                        <span>More Info</span>
                    </button>
                </div>
                
            </div>

        </div>
    )
}
