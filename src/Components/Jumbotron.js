import React from "react"

import bannerImage from "../Images/cover-photo.jpg"
import bannerImageSmaller from "../Images/coverphoto2.jpg"

import heroImage from "../Images/photo-1533245270348-821d4d5c7514.jpg"

import image from "../Images/1579106157comb-and-scissors-freesvg.org.png"

import "./Jumbotron.css"

const Jumbotron = () => {






    return (<div  >
        <div style={{ height: "110px" }} />
        <div className=" d-flex align-items-center" style={{ height: "70vh", backgroundSize: "cover", background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/cover-photo.jpg') fixed center no-repeat` }}>
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-lg-8 d-flex align-items-center justify-content-end" style={{ color: "white" }}>

                        <div>
                            <h1 class=" mb-2" style={{ fontSize: "2.5rem", fontWeight: "600" }}>Welcome aboard.</h1>
                            <p class="mb-4" style={{ fontSize: "1.2rem", fontWeight: "400" }}>North Down's premium Turkish barber services at an affordable price.</p><p class="lead">
                                <a class="btn btn-danger  " href="#" role="button"><i class="far fa-calendar-alt"></i> Book an appointment</a>

                            </p>
                        </div>




                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <img className="img-fluid" src={heroImage} alt="" style={{ maxHeight: "350px", border: "white solid 4px" }} />
                    </div>
                </div>

            </div>




        </div>
        <a href="#about" style={{ fontSize: "1.2rem", cursor: "pointer", color: "white", textDecoration: "none", lineHeight: "50px", height: "50px", textAlign: "center", width: "200px", marginTop: "-4rem" }} className="d-flex justify-content-center lead btn-one mx-auto">
            <div><i class="fas fa-angle-double-down"></i> <span>Find out more</span></div>
        </a>
        <div style={{ backgroundColor: "black", height: "50px", boxShadow: "0 0 20px 25px black" }}>

        </div>


    </div>)
}

export default Jumbotron