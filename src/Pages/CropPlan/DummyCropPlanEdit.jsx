// DummyCropPlanEdit.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// import the dummy data
import { dummyCropPlans } from "../../Models/dummyData";


export default function DummyCropPlanEdit() {
    // get the dummy crop plan id from the URL params
    const { dummy_crop_plan_id } = useParams();

    // find the matching dummy crop plan from the dummy data
    const dummyCropPlan = dummyCropPlans.find(
        (dummyCropPlan) => dummyCropPlan.id === Number(dummy_crop_plan_id)
    );

    // use state variables to store the input values, initialized with the dummy crop plan properties
    const [name, setName] = useState(dummyCropPlan.name);
    const [description, setDescription] = useState(dummyCropPlan.description);
    const [start_date, setStartDate] = useState(dummyCropPlan.start_date);
    const [end_date, setEndDate] = useState(dummyCropPlan.end_date);

    // handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default browser behavior
        // create a dummy crop plan object with the input values and the id from the URL params
        const dummyCropPlan = {
            id: Number(dummy_crop_plan_id),
            name,
            description,
            start_date,
            end_date,
        };
        // log the dummy crop plan object to the console
        console.log(dummyCropPlan);
    };

    // render a form with input fields and a submit button, pre-filled with the dummy crop plan properties
    return (
        <div>
            <h1>Edit Dummy Crop Plan</h1>
            {dummyCropPlan ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                <p>Dummy crop plan not found</p>
            )}
        </div>
    );
}
