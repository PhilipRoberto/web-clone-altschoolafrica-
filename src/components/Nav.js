// modules imports...
import React from "react";
import { Link } from "react-router-dom";

// stylesheet import...
import "../styles/navbar_styles.css";

// utils imports...
import altschoollogo from "../utils/altschoollogo.svg";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <div className="nav-head">
                <div className="img-case1">
                    <Link to="/">
                        <img src={altschoollogo} alt="alt-school-logo" />
                    </Link>
                </div>
                <div className="menu-container">
                    <div className="menu-items">
                        <div className="menu-item item1">
                            <Link to="/">
                                <span className="menu-span">Home</span>
                            </Link>
                        </div>
                        <div className="menu-item item2">
                            <Link to="/schools">
                                <span className="menu-span">Schools</span>
                            </Link>
                            <div className="init1">
                                <div className="init2">
                                    <div className="init3">
                                        <div className="sub-menu-item sub1">
                                            <Link to="/schools/engineering">
                                                <span className="sub-menu-span">School of Engineering</span>
                                            </Link>
                                        </div>
                                        <div className="sub-menu-item sub2">
                                            <Link to="/schools/product">
                                                <span className="sub-menu-span">School of Product</span>
                                            </Link>
                                        </div>
                                        <div className="sub-menu-item sub3">
                                            <Link to="/schools/data">
                                                <span className="sub-menu-span">School of Data</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tuition-div">
                            <Link to="/tuition">
                                <span className="menu-span">Tuition</span>
                            </Link>
                        </div>
                        <div className="faqs-div">
                            <Link to="/faqs">
                                <span className="menu-span">FAQS</span>
                            </Link>
                        </div>
                        <div className="story-teller">
                            <Link to="/story">
                                <span className="menu-span">Our Story</span>
                            </Link>
                        </div>
                        <div className="collaborator-div">
                            <Link to="/collaborate">
                                <span className="menu-span">Collaborate with us</span>
                            </Link>
                        </div>
                        <div className="career-div">
                            <Link to="/careers">
                                <span className="menu-span">Careers</span>
                            </Link>
                        </div>
                    </div>
                    <div className="apply-div">
                        <Link to="/apply-now">
                            <button>
                                <span>Apply Now</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="banner-wrapper">
                <div className="banner-space">
                    Applications to the school of engineering is currently open! <Link to="/apply-now">here</Link>
                </div>
            </div>
        </nav>
    )
}