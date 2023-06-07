// MainSharedLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";

export default function MainSharedLayout() {
    // render a layout with a main nav bar and an outlet for child routes
    return (
        <div>
            <MainNavBar />
            <Outlet />
        </div>
    );
}
