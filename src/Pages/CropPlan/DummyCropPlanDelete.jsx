// DummyCropPlanDelete.js
import React from "react";
import { useParams } from "react-router-dom";

// import the dummy data
import { dummyCropPlans } from "../../Models/dummyData";

export default function DummyCropPlanDelete() {
    // get the dummy crop plan id from the URL params
    const { dummy_crop_plan_id } = useParams();

    // find the matching dummy crop plan from the dummy data
    const dummyCropPlan = dummyCropPlans.find(
        (dummyCropPlan) => dummyCropPlan.id === Number(dummy_crop_plan_id)
    );

    // handle the delete confirmation
    const handleDelete = () => {
        // log the dummy crop plan id to the console
        console.log(dummy_crop_plan_id);
    };

    // render a confirmation message and a delete button
    return (
        <div>
            <h1>Delete Dummy Crop Plan</h1>
            {dummyCropPlan ? (
                <>
                    <p>Are you sure you want to delete this dummy crop plan?</p>
                    <p>ID: {dummyCropPlan.id}</p>
                    <p>Name: {dummyCropPlan.name}</p>
                    {/* add more paragraphs for other properties */}
                    <button onClick={handleDelete}>Delete</button>
                </>
            ) : (
                <p>Dummy crop plan not found</p>
            )}
        </div>
    );
}
