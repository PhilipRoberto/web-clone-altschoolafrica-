import React from "react";
import { Link } from "react-router-dom";

// styles import...
import "../styles/section-3.css";

// utils inports...
import that_img1 from "../utils/that-img-section-3.svg";
import that_img2 from "../utils/that-other-img-section-3.svg";

export default function SectionThree() {
    return (
        <div className="section-3-main-container">
            <section className="section-3-section">
                <div className="school-finder-div">
                    <p className="school-finder-p">
                        <span>FIND THE RIGHT SCHOOL FOR YOU</span>
                    </p>
                </div>
                <div className="section-details">
                    <div className="schools-disc-div">
                        <h1 className="schools-disc-h1">Schools for you</h1>
                    </div>
                    <div className="some-three-box-container">
                        <div className="that-box-1-2-wrapper">
                            <div className="that-box">
                                <div className="that-box-img-cont">
                                    <img src={that_img1} alt="that-img" />
                                </div>
                                <div className="that-box-content">
                                    <h2 className="that-box-content-heading">School of Software Engineering</h2>
                                    <p className="that-box-content-p">
                                        <span>
                                            The School of Engineering offers a range of extensive technical courses specifically designed to equip students with the knowledge and skills required to kickstart their careers and compete favourably with their peers worldwide.
                                        </span>
                                    </p>
                                    <p className="that-box-content-p">
                                        <span>
                                            To ensure students are duly carried along, we have incorporated active learning to allow for the application of theory to practice. We also embark on applied research where the focus is on utilizing technology to solve actual problems.
                                        </span>
                                    </p>
                                    <p className="that-box-content-p">
                                        <span>
                                            Ready to begin your journey as a Software Engineer?
                                        </span>
                                        <div className="that-box-content-link-cont">
                                            <Link to="/schools/engineering?track=frontend" className="that-box-content-link">
                                                View Specialisations &rarr;
                                            </Link>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div className="that-box">
                                <div className="that-box-img-cont">
                                    <img src={that_img2} alt="that-img" />
                                </div>
                                <div className="that-box-content">
                                    <h2 className="that-box-content-heading">School of Product</h2>
                                    <p className="that-box-content-p">
                                        <span>
                                            The School of Product offers multidisciplinary training programmes with a unique combination of art, design, design thinking & business. Courses cover major aspects of the entire product lifecycle; ideating, building, managing, marketing & shipping.
                                        </span>
                                    </p>
                                    <p className="that-box-content-p">
                                        <span>
                                            This school is perfect for those looking to launch and build profitable careers in tech without having to write codes or undergo core technical training processes. Product Design, Product Management and Product Marketing are the programs currently available to students.
                                        </span>
                                    </p>
                                    <p className="that-box-content-p">
                                        <span>
                                            Ready for a career in Product?
                                        </span>
                                        <div className="that-box-content-link-cont">
                                            <Link to="/schools/design?track=design" className="that-box-content-link">
                                                View Specialisations &rarr;
                                            </Link>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="that-box-3-wrapper">
                            <div className="that-box that-box-3">
                                <div className="that-box-img-cont">
                                    <img src={that_img2} alt="that-img" />
                                </div>
                                <div className="that-box-content">
                                    <h2 className="that-box-content-heading">School of Data</h2>
                                    <p className="that-box-content-p">
                                        <span>
                                            The School of Data offers students a thorough learning experience through its well-structured programs. Just like other schools, the triad: Data Science, Data Analysis and Data Engineering boasts of properly designed curriculums, seasoned instructors, a seamless lecture management system and a handful of projects that prepare students for work in the real world.
                                        </span>
                                    </p>
                                    <p className="that-box-content-p">
                                        <span>
                                            At the end of the program, students will have gained in-depth knowledge and understanding of data analysis tools and processes; data science skills, techniques and tools, as well as the workings of the Data Engineering ecosystem and lifecycle.
                                        </span>
                                    </p>
                                    <p className="that-box-content-p">
                                        <span>
                                            Ready for a career in Data?
                                        </span>
                                        <div className="that-box-content-link-cont">
                                            <Link to="/schools/data?track=engineering" className="that-box-content-link">
                                                View Specialisations &rarr;
                                            </Link>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}