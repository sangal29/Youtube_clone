import React  from "react";
import "./navbar.css"; // import css file
import MenuIcon from "@mui/icons-material/Menu"; // import menu icon
import YouTubeIcon from "@mui/icons-material/YouTube"; // import youtube icon
import SearchIcon from "@mui/icons-material/Search";  // import seach icon
import MicIcon from "@mui/icons-material/Mic";        // import mic icon 
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";

const Navbar = () => {

    // when user come the the profile img login here
    const[userPick,setUserPick] = useState("https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg");
     
    // handle login logout 
    const[navbarmodel,setNavbarModel] = useState(false);

    const handleClickModel =()=>{
        setNavbarModel(prev=>!prev); 
    }
  return (
    <>
      {/* The main navbar class */}
      <div className="navbar">
        {/* Left side of the navbar  */}
        <div className="navbar_left">
          {/* Menu icon  class */}
          <div className="navbar_hamberger">
            <MenuIcon sx={{ color: "white" }} />
          </div>

          {/* youtube left icon class */}
          <div className="navbar_youtubeimg">
            <YouTubeIcon sx={{ fontSize: "34px" }} className="navbar_youtubeImage" />
            <div className="youtube_title">YouTube</div>
          </div>
        </div>

        {/* Middle part of the navbar */}
        <div className="navbar_middle">
          <div className="navbar_searchbox">
            <input type="text" placeholder="Search" className="navbar_searchbox_input" />
            <div className="navbar_search_icon">
              <SearchIcon sx={{ color: 'white' }} />
            </div>
          </div>
           
           {/* mic icon section  */}
           <div className="navbar_mic"><MicIcon sx={{color:"white"}}/></div>
        </div>

           {/*  middle part is end  */}
         

           {/* Right part  */}

        <div className="navbar_right">
             <VideoCallIcon  sx={{fontSize:"30px" , cursor:"pointer" , color:"white"}}/>
              <NotificationsIcon sx={{fontSize:"30px" , cursor:"pointer" , color:"white"}}/>
              <img  onClick ={handleClickModel}src={userPick} className = "navbar_right_logo" alt="logo" />
    
              {/* when the navbarmodel value is true then it show */}
             { navbarmodel &&
              <div className="navbar_modle">
                <div className="navbar_modle_option">Profile</div>
                <div className="navbar_modle_option">Logout</div>
                <div className="navbar_modle_option">Login</div>
              </div>
              } 
        </div>

      </div>
    </>
  );
};

export default Navbar;
