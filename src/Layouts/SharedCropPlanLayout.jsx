// SharedCropPlanLayout.js
import React from "react";
import { Outlet } from "react-router-dom";

export default function SharedCropPlanLayout() {
    // render a layout with a header and an outlet for child routes
    return (
        <div>
            <h1>Crop Plans</h1>
            <Outlet />
        </div>
    );
}
