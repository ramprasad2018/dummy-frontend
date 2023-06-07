// DummyCropPlanCreate.js
import React, { useState } from "react";

export default function DummyCropPlanCreate() {
    // use state variables to store the input values
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");

    // handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default browser behavior
        // create a dummy crop plan object with the input values
        const dummyCropPlan = {
            name,
            description,
            start_date,
            end_date,
        };
        // log the dummy crop plan object to the console
        console.log(dummyCropPlan);
    };

    // render a form with input fields and a submit button
    return (
        <div>
            <h1>Create Dummy Crop Plan</h1>
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
        </div>
    );
}
