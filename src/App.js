import React from "react";
import { Route, Routes } from "react-router-dom";

// components import....
import HomePage from "./pages/Home";
import Error from "./pages/Error";

export default function App () {
    return (
        <>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}