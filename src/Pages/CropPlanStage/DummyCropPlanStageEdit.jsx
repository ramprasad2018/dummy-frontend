// DummyCropPlanStageEdit.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// import the dummy data
import { dummyCropPlanStages } from "../../Models/dummyData";

export default function DummyCropPlanStageEdit() {
    // get the dummy crop plan stage id from the URL params
    const { dummy_crop_plan_stage_id } = useParams();

    // find the matching dummy crop plan stage from the dummy data
    const dummyCropPlanStage = dummyCropPlanStages.find(
        (dummyCropPlanStage) =>
            dummyCropPlanStage.id === Number(dummy_crop_plan_stage_id)
    );

    // use state variables to store the input values, initialized with the dummy crop plan stage properties
    const [crop_plan_id, setCropPlanId] = useState(
        dummyCropPlanStage.crop_plan_id
    );
    const [stage_name, setStageName] = useState(dummyCropPlanStage.stage_name);
    const [stage_description, setStageDescription] = useState(
        dummyCropPlanStage.stage_description
    );
    const [start_date, setStartDate] = useState(dummyCropPlanStage.start_date);
    const [end_date, setEndDate] = useState(dummyCropPlanStage.end_date);

    // handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default browser behavior
        // create a dummy crop plan stage object with the input values and the id from the URL params
        const dummyCropPlanStage = {
            id: Number(dummy_crop_plan_stage_id),
            crop_plan_id,
            stage_name,
            stage_description,
            start_date,
            end_date,
        };
        // log the dummy crop plan stage object to the console
        console.log(dummyCropPlanStage);
    };

    // render a form with input fields and a submit button, pre-filled with the dummy crop plan stage properties
    return (
        <div>
            <h1>Edit Dummy Crop Plan Stage</h1>
            {dummyCropPlanStage ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="crop_plan_id">Crop Plan ID</label>
                    <input
                        type="number"
                        id="crop_plan_id"
                        value={crop_plan_id}
                        onChange={(e) => setCropPlanId(e.target.value)}
                        required
                    />
                    <label htmlFor="stage_name">Stage Name</label>
                    <input
                        type="text"
                        id="stage_name"
                        value={stage_name}
                        onChange={(e) => setStageName(e.target.value)}
                        required
                    />
                    <label htmlFor="stage_description">Stage Description</label>
                    <input
                        type="text"
                        id="stage_description"
                        value={stage_description}
                        onChange={(e) => setStageDescription(e.target.value)}
                        required
                    />
                    <label htmlFor="start_date">Start Date</label>
                    <input
                        type="date"
                        id="start_date"
                        value={start_date}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                    <label htmlFor="end_date">End Date</label>
                    <input
                        type="date"
                        id="end_date"
                        value={end_date}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>Dummy crop plan stage not found</p>
            )}
        </div>
    );
}
