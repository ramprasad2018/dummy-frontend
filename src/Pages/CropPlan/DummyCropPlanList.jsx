// DummyCropPlanList.js
import React from "react";
import { Link } from "react-router-dom";

// import the dummy data
import { dummyCropPlans } from "../../Models/dummyData";

export default function DummyCropPlanList() {
    // render a table with a row for each dummy crop plan
    return (
        <div>
            <h1>Dummy Crop Plans</h1>
            <Link to="/dummy-crop-plans/create">Create Dummy Crop Plan</Link>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {dummyCropPlans.map((dummyCropPlan) => (
                    <tr key={dummyCropPlan.id}>
                        <td>{dummyCropPlan.id}</td>
                        <td>{dummyCropPlan.name}</td>
                        <td>{dummyCropPlan.description}</td>
                        <td>{dummyCropPlan.start_date}</td>
                        <td>{dummyCropPlan.end_date}</td>
                        <td>
                            <Link to={`/dummy-crop-plans/${dummyCropPlan.id}`}>
                                View
                            </Link>{" "}
                            <Link to={`/dummy-crop-plans/${dummyCropPlan.id}/edit`}>
                                Edit
                            </Link>{" "}
                            <Link to={`/dummy-crop-plans/${dummyCropPlan.id}/delete`}>
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
