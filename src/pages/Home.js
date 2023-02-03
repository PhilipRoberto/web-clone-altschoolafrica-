import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

// components import...
import Navbar from "../components/Nav";

// utils imports...
import github from "../utils/github.svg";
import bureau from "../utils/bureau-logo.png";
import reader from "../utils/reader.png";
import smiling_guy from "../utils/smiling_guy.png";
import group from "../utils/group.jpg";
import techpoint from "../utils/techpoint.png";
import techcrunch from "../utils/techcrunch.svg";
import techcabal from "../utils/techcabal.svg";
import disrupt from "../utils/disrupt.svg";
import collab from "../utils/collab.png";

const Main = () => {
    return (
        <div className="home-main">
            <header className="header">
            <div className="typical-animation">
                    Kickstart your tech career in{' '} <span className="typical">
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Software Engineering',
                                5000,
                                'Data Analysis',
                                5000,
                                'Data Science',
                                5000,
                                'Product Design',
                                5000,
                                'Product Marketing',
                                5000,
                                'Product Management',
                                5000
                            ]}
                        />
                    </span>
            </div>
            <div className="p1">
                Learn the in-demand skills required to take you from beginner
                <br />
                to industry in 12 months. No degree
                <br />
                or prior tech experience required.
            </div>
            <div className="apply-div">
                <Link to="/apply">
                    <button>
                        Apply now
                    </button>
                </Link>
            </div>
            <div className="dollar">
                Learn in-demand tech skills for just $1 a day
            </div>
            </header>
            <div className="info-container">
                <div className="partnership">
                    <span>In Partnership with</span>
                </div>
                <div className="github">
                    <img src={github} alt="GitHub-Logo" />
                </div>
                <div className="verification-text">
                    <span>Verification of Exemption from BBPE in line with the State of California</span>
                </div>
                <div className="bureau">
                    <img src={bureau} alt="BBPE-Logo" />
                </div>
                <div className="question">
                    <span>what is altschoolafica?</span>
                </div>
                <div className="reader">
                    <img src={reader} alt="Reader-Logo" />
                </div>
            </div>
            <div className="gist-wrapper">
                
            </div>
        </div>
    )
}

export default function HomePage () {
    return (
        <div className="home-container">
            <Navbar />
            <Main />
        </div>
    )
}