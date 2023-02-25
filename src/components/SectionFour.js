import React from "react";
import { Link } from "react-router-dom";

// Styles import...
import "../styles/section-4.css";

// Utils import...
import groupie from "../utils/group.jpg";


export default function SectionFour() {
    return (
        <div className="section-four-main-container">
            <section className="section-four-container">
                <div className="section-four-img-container">
                    <img src={groupie} alt="groupie" className="groupie" />
                </div>
                <div className="section-four-prep-msg-container">
                    <h3 className="the-msg-heading">
                        <span>Prepare your company for the furture</span>
                    </h3>
                    <p className="the-msg">
                        <span>Our extensive Diploma program is set to produce top tech talents who are able to compete globally. Hiring our graduates guarantee that you have access to highly skilled, passionate and professional tech talent to ensure continuous business success.</span>
                    </p>
                    <div className="the-msg-link">
                        <Link to="/hire">
                            <button>Hire our Grads &rarr;</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}