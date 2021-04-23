import React from "react"
import logo from "../Images/logo.jpg"

function Nav() {


    let styles = {
        nav: {
            backgroundColor: "black"
        },
        logo: {
            width: "35%"
        }
    }

    return (<nav class="navbar navbar-expand-lg" style={styles.nav}>
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="" style={styles.logo} />
            </a>
        </div>
    </nav>


    )
}

export default Nav