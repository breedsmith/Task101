import React from "react";
import './footer.css';

const style = {
    fontWeight:"normal"
}

const pic = {
    width: "35px",
    height: "35px"
}

const inline = {
    display: "inline",
}

const center = {
    display: "flex",
    justifyContent: "center",
    left: "-25px"
}

function Footer(){
    return(
        <div className="foot">
            <div>
                <h2>Explore</h2>
                <ul>
                    <li>Home</li>
                    <li>Questions</li>
                    <li>Articles</li>
                    <li>Tutorials</li>
                </ul>
            </div>
            <div>
                <h2>Support</h2>
                <ul>
                    <li>FAQs</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h2>Stay Connected</h2>
                <ul style={center}>
                    <li style={inline}><img style={pic} src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="facebook logo"></img></li>
                    <li style={inline}><img style={pic} src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt="twitter logo"></img></li>
                    <li style={inline}><img style={pic} src="https://180dc.org/wp-content/uploads/2014/04/instagram-Logo-PNG-Transparent-Background-download.png" alt="instagram logo"></img></li>
                </ul>
            </div>
            <div></div>
            <div>
                <h1>DEV@Deakin 2022</h1>
            </div>
            <div></div>
                <div>
                    <h3 style={style}>Privacy Policy</h3>
                </div>
                <div>
                    <h3 style={style}>Terms</h3>
                </div>
                <div>
                    <h3 style={style}>Code of Conduct</h3>
                </div>
        </div>
    )
}

export default Footer;