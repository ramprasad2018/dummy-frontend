// DummyCropPlanStageCreate.js
import React, { useState } from "react";

export default function DummyCropPlanStageCreate() {
    // use state variables to store the input values
    const [crop_plan_id, setCropPlanId] = useState("");
    const [stage_name, setStageName] = useState("");
    const [stage_description, setStageDescription] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");

    // handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default browser behavior
        // create a dummy crop plan stage object with the input values
        const dummyCropPlanStage = {
            crop_plan_id,
            stage_name,
            stage_description,
            start_date,
            end_date,
        };
        // log the dummy crop plan stage object to the console
        console.log(dummyCropPlanStage);
    };

    // render a form with input fields and a submit button
    return (
        <div>
            <h1>Create Dummy Crop Plan Stage</h1>
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
        </div>
    );
}
