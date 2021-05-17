import React from "react"
import "./Hamburger.css"


function Hamburger() {

    function handleHamburger() {

        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.toggle("open")
    }

    return (
        <div class="hamburger" onClick={handleHamburger}>
            <div className="line top-line"></div>
            <div className="line middle-line"></div>
            <div className="line bottom-line"></div>
        </div>
    )
}








export default Hamburger