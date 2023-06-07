// DummyCropPlanStageDelete.js
import React from "react";
import { useParams } from "react-router-dom";

// import the dummy data
import { dummyCropPlanStages } from "../../Models/dummyData";

export default function DummyCropPlanStageDelete() {
    // get the dummy crop plan stage id from the URL params
    const { dummy_crop_plan_stage_id } = useParams();

    // find the matching dummy crop plan stage from the dummy data
    const dummyCropPlanStage = dummyCropPlanStages.find(
        (dummyCropPlanStage) =>
            dummyCropPlanStage.id === Number(dummy_crop_plan_stage_id)
    );

    // handle the delete confirmation
    const handleDelete = () => {
        // log the dummy crop plan stage id to the console
        console.log(dummy_crop_plan_stage_id);
    };

    // render a confirmation message and a delete button
    return (
        <div>
            <h1>Delete Dummy Crop Plan Stage</h1>
            {dummyCropPlanStage ? (
                <>
                    <p>Are you sure you want to delete this dummy crop plan stage?</p>
                    <p>ID: {dummyCropPlanStage.id}</p>
                    <p>Crop Plan ID: {dummyCropPlanStage.crop_plan_id}</p>
                    <p>Stage Name: {dummyCropPlanStage.stage_name}</p>
                    {/* add more paragraphs for other properties */}
                    <button onClick={handleDelete}>Delete</button>
                </>
            ) : (
                <p>Dummy crop plan stage not found</p>
            )}
        </div>
    );
}
