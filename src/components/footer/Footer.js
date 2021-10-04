import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"

import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhoneVolume,
    faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-white-50">
                <div className="container">
                    <div className=" row">
                        <div className="col-md-5">
                            <div className="mt-5 text-start">
                                <h1>International Islamic University Chittagong</h1>
                                <div className="d-flex  text-center ">
                                    <div className=" me-3 fs-3 text-danger">
                                        <Link to="/contact" className="text-danger">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </Link>

                                    </div>
                                    <div className="me-3 fs-3">
                                        <Link to="/contact" className="text-danger">
                                            <FontAwesomeIcon icon={faFacebookSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3">
                                        <Link to="/contact" className="text-danger">
                                            <FontAwesomeIcon icon={faInstagramSquare} />
                                        </Link>

                                    </div>

                                    <div className=" me-3 fs-3">
                                        <Link to="/about" className="text-danger">
                                            <FontAwesomeIcon icon={faTwitterSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3">
                                        <Link to="/about" className="text-danger">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </Link>

                                    </div>

                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        International Islamic University Chittagong (IIUC) is one of the top graded Government approved private universities in Bangladesh. The credit for the idea of establishing this University goes to Islamic University Chittagong Trust (IUCT), which is the founder organization of the University. This Trust is a non-political and non-profit oriented voluntary organization, registered with the Government of the People’s Republic of Bangladesh under the Societies Act XXI of 1860.0
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>IIUC © . All rights reserved.</small>
                                    <br />
                                    <small>Developed by Ebrahim Islam.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-5">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">
                                        <Link to="/home" className="footer-menu text-decoration-none">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/services" className="footer-menu text-decoration-none">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/about" className="footer-menu text-decoration-none">
                                            About us
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/contact" className="footer-menu text-decoration-none">
                                            Contact us
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mt-5">
                                <h3>Mail us for know more about us</h3>
                                <br />
                                <input
                                    className=" bg-light py-1 px-5 border-danger text-start "
                                    type="text"
                                    placeholder="Enter your Email"
                                />
                                <br />
                                <button className="btn btn-danger px-4 fw-bold mt-1">Submit</button>
                                <div className="mt-3">
                                    <h5>
                                        <Link to="/about" className="text-danger">
                                            <FontAwesomeIcon icon={faPhoneVolume} />
                                        </Link>
                                        +88-03042-51154-61</h5>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        <Link to="/about" className="text-danger">
                                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                                        </Link>
                                        Kumira, Chattogram-4318, Bangladesh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;