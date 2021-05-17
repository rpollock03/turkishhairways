import React from "react"
import logo from "../Images/logo.jpg"

import Hamburger from "./Hamburger"

import "./Navbar.css"

function Nav() {


    let styles = {
        nav: {
            backgroundColor: "black"

        },
        logo: {
            width: "250px"
        }
    }

    return (<div className="fixed-top">


        <nav class="navbar navbar-expand-lg" style={styles.nav}>
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" style={styles.logo} className="img-fluid " />
                </a>


                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ outline: "none" }}>
                    <Hamburger />
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item d-flex justify-content-center px-2" >
                            <a class="nav-link nav-text " href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item d-flex justify-content-center px-2">
                            <a class="nav-link nav-text " href="#">Features</a>
                        </li>
                        <li class="nav-item d-flex justify-content-center px-2">
                            <a class="nav-link nav-text " href="#">Pricing</a>
                        </li>
                        <li class="nav-item d-flex justify-content-center px-2 py-2 py-lg-0">
                            <button className="btn btn-primary book-btn">Book Now</button>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
        <div className="contact-banner">
            <div className="container d-flex justify-content-center justify-content-lg-start ">
                <span className="mr-3"><i class="fas fa-phone-alt"></i> 02891 467577</span>
                <span className="mr-3"><i class="far fa-envelope"></i>  shfsh@sfhsfh.com</span>
                <span className="mr-3"><i class="fab fa-facebook-square"></i> Message us</span>

            </div>
        </div>
    </div>
    )
}

export default Nav