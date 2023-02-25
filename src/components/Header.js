import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

import "../styles/home_header_styles.css";

export default function Header () {
    return (
        <div className="header-container">
            <div className="header">
                <div className="kicker">
                    <h1>
                        Kickstart your tech career in{' '}
                        <span className="typi-span">
                            <Typical
                                loop={Infinity}
                                wrapper="span"
                                steps={[
                                    "Software Engineering",
                                    1000,
                                    "Product Design",
                                    1000,
                                    "Product Management",
                                    1000,
                                    "Data Science",
                                    1000,
                                    "Data Analysis",
                                    500
                                ]}
                            />
                        </span>
                    </h1>
                </div>
                <div className="in-demand">
                    <div className="in-demand-cont">
                        Learn the in-demand skills required to take you from beginner
                        <br />
                        to industry ready in 12 months. No degree
                        <br />
                        or prior tech experience required.
                    </div>
                </div>
                <div className="header-apply-div-cont">
                    <div className="header-apply-div">
                        <Link to="/apply-now">
                            <button>Apply now</button>
                        </Link>
                    </div>
                </div>
                <div className="dollar-pay">
                    <span>Learn in-demand tech skills for just $1 a day</span>
                </div>
            </div>
        </div>
    )
}