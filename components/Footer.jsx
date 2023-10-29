import React from "react";  
import Twitter from "../src/images/Twitter Icon.png";
import Facebook from "../src/images/Facebook Icon.png";
import Instagram from "../src/images/Instagram Icon.png";
import Github from "../src/images/GitHub Icon.png"

export default function Footer() {
    return (
       <div className="footer--container">
        <div className="footer--items">
            <a href="https://twitter.com/Mor4rR"><img src={Twitter}  className="footer--image" /></a>
            <a href="https://www.facebook.com/profile.php?id=100087330438343"><img src={Facebook}  className="footer--image" /></a>
            <a href="#"><img src={Instagram}  className="footer--image" /></a>
            <a href="https://github.com/Jon-AH777"><img src={Github}  className="footer--image" /></a>
            
        </div>
       </div>
    )
}