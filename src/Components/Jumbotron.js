import React from "react"

import bannerImage from "../Images/cover-photo.jpg"
import bannerImageSmaller from "../Images/coverphoto2.jpg"

import heroImage from "../Images/photo-1533245270348-821d4d5c7514.jpg"

import "./Jumbotron.css"

const Jumbotron = () => {




    return (<div >
        <div style={{ height: "110px" }} />
        <div className=" d-flex align-items-center" style={{ height: "70vh", backgroundSize: "cover", background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/cover-photo.jpg') fixed center no-repeat` }}>
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-lg-8 d-flex align-items-center justify-content-end" style={{ color: "white" }}>

                        <div>
                            <h1 class="display-4 mb-2" style={{ fontWeight: "600" }}>Welcome aboard.</h1>
                            <p class="lead mb-4" style={{ fontWeight: "400" }}>North Down's premium Turkish barber services at an affordable price.</p><p class="lead">
                                <a class="btn btn-danger btn-lg  " href="#" role="button"><i class="far fa-calendar-alt"></i> Book an appointment</a>

                            </p>
                        </div>




                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <img className="img-fluid" src={heroImage} alt="" style={{ maxHeight: "350px", border: "white solid 4px" }} />
                    </div>
                </div>

            </div>

        </div>
        <a href="#about" style={{ cursor: "pointer", color: "white", marginTop: "-80px", marginBottom: "20px", textDecoration: "none" }} className="d-flex justify-content-center lead btn-one mx-auto">
            <div style={{ lineHeight: "50px", height: "50px", textAlign: "center", width: "250px", cursor: "pointer" }}><i class="fas fa-angle-double-down"></i> <span>Find out more</span></div></a>
    </div>)
}

export default Jumbotron