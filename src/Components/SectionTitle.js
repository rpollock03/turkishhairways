import React from "react"

import sectionImage from "../Images/1579106157comb-and-scissors-freesvg.org.png"

const SectionTitle = (props) => {

    return (<div className="container">
        <div className="row d-flex align-items-center justify-content-center">
            <img src={sectionImage} alt="" className="img-fluid" style={{ width: "80px" }} />
            <h1 className="pl-2 pb-2" style={{ color: "white", fontWeight: "400", fontSize: "2.2em" }}> {props.text}</h1>
        </div>

    </div>)
}


export default SectionTitle