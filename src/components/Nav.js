import React from "react";
import { Link } from "react-router-dom";

// utils import...
import logo1 from "../utils/altschoollogo.svg";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <div className="nav">
            <Link to="/" className="logo-link-to-home">
                <img src={logo1} alt="alt-school-africa-logo" className="logo1" />
            </Link>
            <div className="menu-bar">
                <ul>
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/schools">
                            Schools
                        </Link>
                        <div className="sub-menu1">
                            <ul>
                                <li>
                                    <Link to="/schools/engineering">School of Engineering</Link>
                                </li>
                                <li>
                                    <Link to="/schools/product">School of Product</Link>
                                </li>
                                <li>
                                    <Link to="/schools/data">School of Data</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/tuition">
                            Tuition
                        </Link>
                    </li>
                    <li>
                        <Link to="/faqs">
                            FAQS
                        </Link>
                    </li>
                    <li>
                        <Link to="/story">
                            Our Story
                        </Link>
                    </li>
                    <li>
                        <Link to="/collaborate">
                            Collaborate with us
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers">
                            Careers
                        </Link>
                    </li>
                </ul>
            </div>

            <Link to="/apply" className="apply-link">
                <button>
                    Apply now
                </button>
            </Link>
            </div>
            <div className="announcement">Applications to the School of Engineering is currently open! <Link to="/schools/schoolofengineering">here</Link></div>
        </nav>
    )
}