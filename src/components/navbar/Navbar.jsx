import { ArrowDropDown, Notifications, SearchRounded } from "@mui/icons-material"
import {useState} from "react";
import "./navbar.scss"
import {Link} from "react-router-dom";




const Navbar = () => {
    const [isScrolled, setIsScrolled]=useState(false);
    
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () =>(window.onscroll=null);
    };
    //console.log(isScrolled);
    return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <Link to="/" className="link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-netflix_2015-logo.svg.png" alt=""/>
                </Link>    
                <Link to="/" className="link">
                    <span>Home</span>
                </Link>
                
                <Link to="/series" className="link">
                    <span>TV Shows</span>
                </Link>
                <Link to="/movie" className="link">
                    <span>Movies</span>
                </Link>
                <span>New & Popular</span>
                <span>My List</span>
                

            </div>


            <div className="right">
                <SearchRounded className="icon" id="srch"/>
                <span>Kids</span>
                {/*<span className="note">*/}

                    <Notifications className="icon" id="notif"/>
                        {/* <div className="n_options">
                            <span>
                                <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" alt="" />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti inventore unde voluptas, in dolorum fugiat? Nulla libero, minima ab saepe adipisci esse beatae sit sint, facilis illum enim ullam!</p>
                            </span>
                            <span>
                                <img src="https://love-shayari.co/wp-content/uploads/2021/10/sun-rise.jpg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sunt, quidem voluptate pariatur amet distinctio ducimus modi. Vero dignissimos, repellat qui quia rerum iusto optio nemo animi necessitatibus corrupti dolorum.</p>
                            </span>
                        </div> 
                </span>*/}

                
                <div className="profile">
                    <img src="https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755" alt="" />
                    <ArrowDropDown  className="icon" id="ADD"  />
                    <div className="options" id="opt">
                        <span>Settings</span>
                        <span>LogOut</span>
                    

                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
export default Navbar