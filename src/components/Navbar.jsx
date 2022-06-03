import React from "react";
import "./Navbar.scss";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Hamburger from "./Hamburger";




function Navbar(){
    return(
        <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <a href="#introo" className="logo">Some Fancy Logo</a>
                <div className="item-container">
                <EmailRoundedIcon/>
                <span>email address</span>
                </div>
            </div>
            <div className="right"><Hamburger/></div>
        </div>

        </div>
    )

}

export default Navbar;