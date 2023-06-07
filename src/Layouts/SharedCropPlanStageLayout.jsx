// SharedCropPlanStageLayout.js
import React from "react";
import { Outlet } from "react-router-dom";

export default function SharedCropPlanStageLayout() {
    // render a layout with a header and an outlet for child routes
    return (
        <div>
            <h1>Crop Plan Stages</h1>
            <Outlet />
        </div>
    );
}
