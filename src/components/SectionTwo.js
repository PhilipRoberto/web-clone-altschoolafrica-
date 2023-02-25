import React from "react";
import { Link } from "react-router-dom";

// styles import...
import "../styles/section-2.css";

// utils imports...
import smiling_guy from "../utils/smiling_guy.png";


export default function SectionTwo () {
    return (
        <section className="section-2-container">
            <div className="section-2-contents">
                <div className="section-two-boxes-wrapper">
                    <div className="section-2-boxes">
                        <div className="box-3 box"></div>
                        <div className="box-4 box"></div>
                    </div>
                </div>
                <div className="mystery-question-div">
                    <p className="mystery-question">
                        <span>WHO IS ALTSCHOOLAFRICA FOR?</span>
                    </p>
                </div>
                <div className="section-2-details">
                    <div className="section-2-marginal-img-wrapper">
                        <div className="section-2-details-img">
                            <img src={smiling_guy} alt="smiling-guy" className="smiling_guy" />
                        </div>
                    </div>
                    <div className="scrolling-card-wrapper">
                        <div className="scrollable-card sc1">
                            <h2 className="sc-head">Need a new career? We’ve got you</h2>
                            <p className="sc-paragraph">You don't need prior knowledge or technical skills to participate in any of our programs. Our curriculum is designed to give you the perfect leg up when transitioning to a career in tech.</p>
                            <div className="sc-link-div">
                                <Link to="/schools" className="sc-link">
                                    <button>View all schools &rarr;</button>
                                </Link>
                            </div>
                        </div>
                        <div className="scrollable-card sc2">
                            <h2 className="sc-head">Want better work opportunities? We’re your best bet</h2>
                            <p className="sc-paragraph">Our curriculum is carefully designed to teach you current and future skills based on industry and employer demand to give you an edge in the talent market.</p>
                            <div className="sc-link-div">
                                <Link to="/schools" className="sc-link">
                                    <button>View all schools &rarr;</button>
                                </Link>
                            </div>
                        </div>
                        <div className="scrollable-card sc3">
                            <h2 className="sc-head">Too busy? No problem</h2>
                            <p className="sc-paragraph">We understand that you might have a lot of commitments and as such we've designed our courses and curriculum to work around you and your commitments</p>
                            <div className="sc-link-div">
                                <Link to="/schools" className="sc-link">
                                    <button>View all schools &rarr;</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}