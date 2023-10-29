import React from "react";
import emailLogo from "../src/images/Mail.png"
import linkedLogo from "../src/images/linkedin.png"

export default function Main() {
    return (
        <div className="main-container">
            <h3 className="main--heading main--content">
                Business Card
            </h3>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span--two main--content">
                Website Link Channel
            </span>
            
            <div className="btn--class">
                <button className="main--btn btn--email">
                    
                    <img src={emailLogo} className="email" /> <a href="#" className="btn-email">Email</a>
                    
                </button>
                <button className="main--btn btn--linkedin">
                    
                    <img src={linkedLogo} className="linkedin"/> <a href="https://www.linkedin.com/in/sanarung-subba-35b092293/" className="btn-linkedin">LinkedIn</a> 
                  
                </button>
            </div>

            <div className="main--about--interest">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore placeat magni delectus natus qui eligendi aliquid architecto amet atque aut deserunt sint explicabo at consequatur cum, debitis asperiores facilis?</p>
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error eum labore, exercitationem maxime veniam nostrum dignissimos animi distinctio, libero, ipsum cupiditate repudiandae ipsa asperiores perspiciatis dicta odio doloribus deleniti!</p>
            </div>
        </div>
    )
}