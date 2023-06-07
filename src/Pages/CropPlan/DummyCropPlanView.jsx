// DummyCropPlanView.js
import React from "react";
import { useParams } from "react-router-dom";

// import the dummy data
import { dummyCropPlans } from "../../Models/dummyData";

export default function DummyCropPlanView() {
    // get the dummy crop plan id from the URL params
    const { dummy_crop_plan_id } = useParams();

    // find the matching dummy crop plan from the dummy data
    const dummyCropPlan = dummyCropPlans.find(
        (dummyCropPlan) => dummyCropPlan.id === Number(dummy_crop_plan_id)
    );

    // render a table with the details of the dummy crop plan
    return (
        <div>
            <h1>Dummy Crop Plan Details</h1>
            {dummyCropPlan ? (
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{dummyCropPlan.id}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{dummyCropPlan.name}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{dummyCropPlan.description}</td>
                    </tr>
                    <tr>
                        <th>Start Date</th>
                        <td>{dummyCropPlan.start_date}</td>
                    </tr>
                    <tr>
                        <th>End Date</th>
                        <td>{dummyCropPlan.end_date}</td>
                    </tr>
                    </tbody>
                </table>
            ) : (
                <p>Dummy crop plan not found</p>
            )}
        </div>
    );
}
