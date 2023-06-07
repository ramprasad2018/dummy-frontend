// DummyCropPlanStageView.js
import React from "react";
import { useParams } from "react-router-dom";

// import the dummy data
import { dummyCropPlanStages } from "../../Models/dummyData";

export default function DummyCropPlanStageView() {
    // get the dummy crop plan stage id from the URL params
    const { dummy_crop_plan_stage_id } = useParams();

    // find the matching dummy crop plan stage from the dummy data
    const dummyCropPlanStage = dummyCropPlanStages.find(
        (dummyCropPlanStage) =>
            dummyCropPlanStage.id === Number(dummy_crop_plan_stage_id)
    );

    // render a table with the details of the dummy crop plan stage
    return (
        <div>
            <h1>Dummy Crop Plan Stage Details</h1>
            {dummyCropPlanStage ? (
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{dummyCropPlanStage.id}</td>
                    </tr>

                    {/* add more rows for other properties */}
                    </tbody>

                </table>

            ) : (
                <p>Dummy crop plan stage not found</p>
            )}
        </div>
    );
}
