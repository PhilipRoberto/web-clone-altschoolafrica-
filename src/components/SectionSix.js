import React from "react";
import {Link} from "react-router-dom"

// Styles import...
import "../styles/section-6.css";


// utils import...
import altschoolafrica from "../utils/altschoolafricaw.svg";
import twitter from "../utils/twitter.svg";
import facebook from "../utils/facebook.svg";
import instagram from "../utils/instagram.svg";
import linkedin from "../utils/linkedin'.svg";


export default function SectionSix () {
    return (
        <div className="section-six-main-container">
            <section className="section-six-container">
                <div className="section-six-groupie">
                    <div className="section-six-powerer">
                        <div className="powerer-heading-container">
                            <h2 className="powerer-heading">Powered by</h2>
                        </div>
                        <div className="powered-powers">
                            <div className="power-img-links">
                                <div className="altschoolafrica-power">
                                    <Link to="/">
                                        <img src={altschoolafrica} alt="altschoolafrica-logo" />
                                    </Link>
                                </div>
                                <div className="social-media-powers">
                                    <div className="twitter-power">
                                        <Link to="https://twitter.com/AltSchoolAfrica">
                                            <img src={twitter} alt="twitter-logo-icon" />
                                        </Link>
                                    </div>
                                    <div className="instagram-power">
                                        <Link to="https://www.instagram.com/altschoolafrica/">
                                            <img src={instagram} alt="instagram-logo" />
                                        </Link>
                                    </div>
                                    <div className="facebook-power">
                                        <Link to="https://www.facebook.com/AltSchoolAfrica/">
                                            <img src={facebook} alt="facebook-logo-icon" />
                                        </Link>
                                    </div>
                                    <div className="linkedin-power">
                                        <Link to="https://www.linkedin.com/company/altschoolafrica">
                                            <img src={linkedin} alt="linkedin-logo-icon" />
                                        </Link>
                                    </div>
                                    <div className="youtube-power">
                                        <Link to="https://youtube.com/channel/UCXpaT1dcn4hUV_vFhnEfeLQ">
                                            <img src="https://youtube.com/channel/UCXpaT1dcn4hUV_vFhnEfeLQ" alt="youtube-link" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="other-power-contents">
                            <div className="telephone-content-wrapper">
                                <p className="tele">
                                    <span>Tel: +23470049214896</span>
                                </p>
                                <p className="tele">
                                    <span>Tel: 012701842</span>
                                </p>
                            </div>
                            <div className="copyright-content-wrapper">
                                <p className="altschoolafrica-copyright">
                                    <span>&copy;2023 Altschool Africa. All rights reserved.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section-six-schools">
                        <div className="schools-heading-container">
                            <h2 className="schools-heading">
                                Schools
                            </h2>
                        </div>
                        <div className="schools-wrapper">
                            <div className="school">
                                <Link to="/schools/engineering?track=">
                                    <span>School of Engineering</span>
                                </Link>
                            </div>
                            <div className="school">
                                <Link to="/schools/product?track=">
                                    <span>School of Product</span>
                                </Link>
                            </div>
                            <div className="school">
                                <Link to="/schools/data?track=">
                                    <span>School of Data</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div classsName="section-six-specialisations">
                        <div className="specialisations-heading-container">
                            <h2 className="specialisation-heading">Specialisations</h2>
                        </div>
                        <div className="specialisation-wrapper">
                            <div className="specialisation">
                                <Link to="/schools/engineering?track=frontend">
                                    <span>Frontend Engineering</span>
                                </Link>
                            </div>
                            <div className="specialisation">
                                <Link to="/schools/engineering?track=backend">
                                    <span>Backend Engineering</span>
                                </Link>
                            </div>
                            <div className="specialisation">
                                <Link to="/schools/engineering?track=cloud">
                                    <span>Cloud Engineering</span>
                                </Link>
                            </div>
                            <div className="specialisation">
                                <Link to="/schools/product?track=design">
                                    <span>Product Design</span>
                                </Link>
                            </div>
                            <div className="specialisation">
                                <Link to="/schools/product?track=marketing">
                                    <span>Product Marketing</span>
                                </Link>
                            </div>
                            <div className="specialisation">
                                <Link to="/schools/product?track=management">
                                    <span>Product Management</span>
                                </Link>
                            </div>
                            <div className="specialisation">
                                <Link to="/schools/data?track=engineering">
                                    <span>Data Engineering</span>
                                </Link>
                            </div>
                            <div className="specialisation">
                                <Link to="/schools/data?track=analysis">
                                    <span>Data ANalysis</span>
                                </Link>
                            </div>
                            <div className="specialisation">
                                <Link to="/schools/data?track=science">
                                    <sapn>Data Science</sapn>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="section-six-companies">
                        <div className="companies-heading-container">
                            <h2 className="companies-heading">Companies</h2>
                        </div>
                        <div className="companies-options-wrapper">
                            <div className="what-can-do hire">
                                <Link to="/hire?traCK=">
                                    <span>Hire our Grads</span>
                                </Link>
                            </div>
                            <div className="what-can-do collab">
                                <Link to="/collaborate?track=">
                                    <span>Collaborate with us</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="section-six-gister">
                        <div className="gister-heading-container">
                            <h2 className="gister-heading">About us</h2>
                        </div>
                        <div className="gisters-wrapper">
                            <div className="gister story">
                                <Link to="/story?track=">
                                    <span>Our Story</span>
                                </Link>
                            </div>
                            <div className="gister blog">
                                <Link to="/?track=">
                                    <span>Blog</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="section-six-resources">
                        <div className="resources-heading-container">
                            <h2 className="resources-heading">Resources</h2>
                        </div>
                        <div className="resources-wrapper">
                            <div className="resource policy">
                                <Link to="/policy?track=">
                                    <span>Privacy and Policy</span>
                                </Link>
                            </div>
                            <div className="resource faqs">
                                <Link to="/faqs?track=">
                                    <span>FAQs</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}