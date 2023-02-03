import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

// components import...
import Navbar from "../components/Nav";

const Main = () => {
    return (
        <div className="home-main">
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