// DummyCropPlanStageList.js
import React from "react";
import { Link } from "react-router-dom";

// import the dummy data
import { dummyCropPlanStages } from "../../Models/dummyData";

export default function DummyCropPlanStageList() {
    // render a table with a row for each dummy crop plan stage
    return (
        <div>
            <h1>Dummy Crop Plan Stages</h1>
            <Link to="/dummy-crop-plan-stages/create">
                Create Dummy Crop Plan Stage
            </Link>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Crop Plan ID</th>
                    <th>Stage Name</th>
                    <th>Stage Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {dummyCropPlanStages.map((dummyCropPlanStage) => (
                    <tr key={dummyCropPlanStage.id}>
                        <td>{dummyCropPlanStage.id}</td>
                        <td>{dummyCropPlanStage.crop_plan_id}</td>
                        <td>{dummyCropPlanStage.stage_name}</td>
                        <td>{dummyCropPlanStage.stage_description}</td>
                        <td>{dummyCropPlanStage.start_date}</td>
                        <td>{dummyCropPlanStage.end_date}</td>
                        <td>
                            <Link
                                to={`/dummy-crop-plan-stages/${dummyCropPlanStage.id}`}
                            >
                                View
                            </Link>{" "}
                            <Link
                                to={`/dummy-crop-plan-stages/${dummyCropPlanStage.id}/edit`}
                            >
                                Edit
                            </Link>{" "}
                            <Link
                                to={`/dummy-crop-plan-stages/${dummyCropPlanStage.id}/delete`}
                            >
                                Delete
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
