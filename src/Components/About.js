import React, { useState, useEffect } from "react"

import SectionTitle from "./SectionTitle"

import THBalloo from "../Images/balloo.jpg"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

import "./About.css"

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

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Bangor
  </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Donaghadee
  </label>
                </div>
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
                            <iframe src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flisa.mcarthur.3304%2Fposts%2F10157719076338030&show_text=true&width=500' width="500" height="187" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                        <div className="col-lg-4 ">
                            <h1>test</h1>
                        </div>

                    </div>
                </div>
            </div>
        </section>




    </>

    )
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyA5rgR2FGuhiye5tSd-F5TV4C_JAErLcXM"
})(About)