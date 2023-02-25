import React from "react";

// styles imports...
import "../styles/section-1.css";

// utils import...
import github from "../utils/github.svg";
import bppe from "../utils/bureau-logo.png";
import reader from "../utils/reader.png";
import { Link } from "react-router-dom";


export default function SectionOne () {
    return (
        <section className="section-1-container">
            <div className="section-one-head">
                <div className="partnership-container">
                    <div className="partnership-div">
                        <p className="partner-p">
                            <span>In Partnership with</span>
                        </p>
                    </div>
                    <div className="github-div">
                        <img src={github} alt="githu-logo" />
                    </div>            
                </div>
                <div className="verification-container">
                    <div className="verification-div">
                        <p className="verification-p">
                            <span>Verification of Exemption from BPPE in line with the State of California</span>
                        </p>
                    </div>
                    <div className="bppe-div">
                        <img src={bppe} alt="bppe-logo" />
                    </div>
                </div>
            </div>

            <div className="section-one-details">
                <div className="altshcool-question">
                    <p className="altschool-question-p">
                        <span>WHAT IS ALTSCHOOL AFRICA?</span>
                    </p>
                </div>
                <div className="section-one-details-img-div">
                    <img src={reader} alt="a-girl-studying" />
                </div>
                <div className="section-one-details-gist-div">
                    <div className="shaper-div">
                        <p className="shape">
                            <span>Shaping the</span>
                            <span className="empty-span"></span>
                        </p>
                        <p className="future">Future of Work</p>
                    </div>
                    <div className="section-one-details-ps-div">
                        <div className="section-one-details-ps">
                            <p className="section-one-details-p1">
                                As the name suggests, AltSchool Africa is different from the traditional institutions. We are a school for individuals looking to gain technical skills and kickstart a career in Tech. AltSchool Africa takes a non-traditional approach to learning by teaching courses directly connected with the selected track.
                            </p>
                            <p className="section-one-details-p2">
                                Our robust curriculum which combines theoretical knowledge with practical real world applications is guaranteed to transform anyone into a top Software Engineer within one year.
                            </p>
                        </div>
                        <div className="section-one-details-link">
                            <Link to="/story">
                                <button>Find out more &rarr;</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-boxes">
                <div className="section-one-boxes">
                    <div className="box-1 box"></div>
                    <div className="box-2 box"></div>
                </div>
            </div>
        </section>
    )
}