import React from "react";

export default function Header(props) {
    return (
       <div className="header--container">
            <img src={props.img} alt="" />
            {/* <img src={`../src/images/${props.img}`} alt="" /> */}
       </div>
    )
}