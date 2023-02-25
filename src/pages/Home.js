import React from "react";


// components import...
import Navbar from "../components/Nav";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";


// sax dance...
export default function HomePage() {
    return (
        <div className="home-container">
            <Navbar />
            <div className="main-container">
                <Header />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
            </div>
        </div>
    )
}