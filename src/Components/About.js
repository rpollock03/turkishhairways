import React, { useState, useEffect } from "react"

import SectionTitle from "./SectionTitle"

import THBalloo from "../Images/balloo.jpg"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

import "./About.css"

const MAP_KEY = process.env.REACT_APP_MAP_KEY

const About = (props) => {

    const [hideSection, setHideSection] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 0) {
                setHideSection(false)
            }
            else if (window.pageYOffset == 0) {
                setHideSection(true)
            }
        })
    }, [])

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '30%'
    }

    return (<>
        <div id="about" />
        <section style={{ height: "100vh", backgroundColor: "black", boxShadow: "0 0 30px 20px black" }} >
            <div style={{ display: hideSection ? "none" : null }}>



                <SectionTitle text="Walk-ins welcome!" />

                <button className="btn btn-outline-danger ">Bangor</button>
                <button className="btn btn-outline-danger ">Donaghadee</button>
                <div className="container mt-3" >
                    <div className="row">

                        <div class="col-lg-4 card-container">
                            <div class="card-flip">

                                <div class="card front" style={{ backgroundColor: "rgba(49,49,49)", color: "white" }}>
                                    <img src={THBalloo} class="card-img-top img-fluid" />
                                    <div class="card-block p-3">
                                        <h4 class="card-title text-danger text-center">Balloo, Bangor</h4>
                                        <p class="card-text">With ample parking, our newest location is in Bangor's Balloo Industrial Estate - near Sainsburys!</p>
                                        <p class="card-text"><small class="text-muted">Open Monday-Saturday, by appointment or walk-in</small></p>

                                    </div>
                                </div>

                                <div class="card back">

                                    <div class="card-block p-3 bg-light h-100">
                                        <p className="p-0 m-0"><i class="fas fa-map-marker text-danger"></i> 51 Balloo Drive, Bangor</p>
                                        <p className="p-0 m-0"><i class="fab fa-facebook-square text-primary"></i> Message</p>
                                        <p className="pt-0 mt-0"><i class="fas fa-phone-alt"></i> 02891 4974279</p>
                                        <Map google={props.google}
                                            zoom={14}
                                            containerStyle={containerStyle}
                                            initialCenter={{
                                                lat: 54.6447277,
                                                lng: -5.6705424
                                            }}



                                            disableDefaultUI={true}>

                                            <Marker
                                                name={'SOMA'}
                                                position={{
                                                    lat: 54.6447277,
                                                    lng: -5.6705424
                                                }} />
                                        </Map>
                                        <p className="pt-2"><i class="fas fa-calendar-week"></i> Open:<br /> Mon-Wed, 9am - 5pm; Thur 9am - 7pm; Fri 9am - 6:30pm; Sat 9am - 4pm</p>


                                        <a href="#" class="btn btn-danger m2 mx-auto">Book now</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 ">






                        </div>
                        <div className="col-lg-4 ">
                            <h1>test</h1>
                        </div>

                    </div>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <iframe src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flisa.mcarthur.3304%2Fposts%2F10157719076338030&show_text=true&width=500' width="500" height="187" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                        <div class="carousel-item">
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fangie.wells.39750%2Fposts%2F249566013172295&show_text=true&width=500" width="500" height="187" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                        <div class="carousel-item">
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwalker.ewart%2Fposts%2F10217962165866203&show_text=true&width=500" width="500" height="187" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">

                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">

                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>




    </>

    )
}


export default GoogleApiWrapper({
    apiKey: MAP_KEY
})(About)