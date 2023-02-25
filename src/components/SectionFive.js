import React from "react";

// Styles imports...
import "../styles/section-5.css";

// utils imports...
import disrupt from "../utils/disrupt.svg";
import techcabal from "../utils/techcabal.svg";
import techcrunch from "../utils/techcrunch.svg";
import techpoint from "../utils/techpoint.png";
import collab from "../utils/collab.png";
import { Link } from "react-router-dom";

export default function SectionFive() {
    return (
        <div className="section-five-main-container">
            <section className="section-five-container">
                <div className="section-five-features-container">
                    <div className="section-five-features-heading-container">
                        <h1 className="section-five-features-heading">
                            Features on
                        </h1>
                    </div>
                    <div className="section-five-features">
                        <div className="feature techpoint-feature">
                            <img src={techpoint} alt="techpoint-logo" className="techpoint" />
                        </div>
                        <div className="feature">
                            <img src={techcrunch} alt="techcrunch-logo" className="techcrunch" />
                        </div>
                        <div className="feature">
                            <img src={techcabal} alt="techcabal-logo" className="techcabal" />
                        </div>
                        <div className="feature">
                            <img src={disrupt} alt="disrupt-logo" className="disrupt" />
                        </div>
                    </div>
                </div>
                <div className="section-five-collaborate-container">
                    <div className="collaborate-section">
                        <div className="collaborate-msg">
                            <h1 className="collaborate-msg-heading">Collaborate with us</h1>
                            <p className="collaborate-msg-p">
                                <span>Interested in inspiring the next generation of top tech talent? Collaborate with us. We are committed to helping as many young Africans kickstart a career in technology by providing them with access to quality technical education by real world experts.</span>
                            </p>
                            <div className="collab-link-container">
                                <Link to="/collaborate">
                                    <button>Learn more &rarr;</button>
                                </Link>
                            </div>
                        </div>
                        <div className="collaborate-img">
                            <img src={collab} alt="collab" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}