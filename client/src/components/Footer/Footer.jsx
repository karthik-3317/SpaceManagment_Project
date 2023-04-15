import "./Footer.scss";
import React from "react"
import {FaLocationArrow,FaMobileAlt,FaEnvelope}from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sint nemo velit eaque beatae corporis odio minus. Itaque minus vero soluta labore praesentium?
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">
                            Vijayawada Bandar Road, Andhra Pradesh 
                            523306
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">
                            Phone:7989327096
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">
                          Email: saipavan39dh@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">Smart Watches</div>
                    <div className="text">Blutooth Speakers</div>
                    <div className="text">Wireless Earbuds</div>
                    <div className="text">Home Theatre</div>
                    <div className="text">Projectors</div>
                </div>
                <div className="col">
                    <div className="title">
                        Pages
                    </div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Space Managment Created By Karthik 
                    </div>
                    <img src={Payment}/>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
