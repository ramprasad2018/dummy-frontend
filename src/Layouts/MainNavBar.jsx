// MainNavBar.js
import React from "react";
import { Link } from "react-router-dom";

export default function MainNavBar() {
    // render a nav bar with links to home, about, and crop plan
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/crop-plans">Crop Plan</Link>
        </nav>
    );
}
