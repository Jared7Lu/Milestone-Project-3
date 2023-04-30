import { useState } from "react";
import { NavLink } from "react-router-dom";
//icons
import { TfiUser } from "react-icons/tfi";
import { AiFillHome, AiOutlinePlusSquare } from "react-icons/ai";
import { TfiAlignJustify } from "react-icons/tfi";

const SideBar = () => {
    const [opened, closed] = useState(false);
    const toggle = () => closed (!opened);
    
    const navbarList= [
    {
        path:"/main-page",
        name:"Home",
        icon:<AiFillHome/>
    },
    {
        path:"/account",
        name:"Account",
        icon:<TfiUser/>
    },
    {
        path:"/create-post",
        name:"Create",
        icon:<AiOutlinePlusSquare/>
    }
    ]
    return (
        <div className="sidebar_container">
            <div style={{width: opened ? "200px" : "50px"}} className="sidebar">
                <h1>ORYG</h1>
                <div style={{marginLeft: opened ? "50px" : "0px"}} className="bars">
                       <TfiAlignJustify onClick={toggle}/>
                </div>
            </div>
            {
                   navbarList.map((item, index)=>(
                       <NavLink to={item.path} key={index} >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: opened ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
        </div>
    )
}

export default SideBar;