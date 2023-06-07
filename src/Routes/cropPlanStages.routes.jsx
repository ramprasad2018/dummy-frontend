// cropPlanStages.routes.js
import CropPlanStageList from "../Pages/CropPlanStage/DummyCropPlanStageList";
import CropPlanStageView from "../Pages/CropPlanStage/DummyCropPlanStageView";
import CropPlanStageCreate from "../Pages/CropPlanStage/DummyCropPlanStageCreate";
import CropPlanStageEdit from "../Pages/CropPlanStage/DummyCropPlanStageEdit";
import CropPlanStageDelete from "../Pages/CropPlanStage/DummyCropPlanStageDelete";
import SharedCropPlanStageLayout from "../Layouts/SharedCropPlanStageLayout";

// assign the array to a variable
const cropPlanStagesRoutes = [
    {
        path: "/crop-plan-stages",
        element: <SharedCropPlanStageLayout />, // add the shared layout here
        children: [
            // add the index prop to the list route
            { path: "/", element: <CropPlanStageList />, index: true },
            { path: "/:crop_plan_stage_id", element: <CropPlanStageView /> },
            { path: "/:crop_plan_stage_id/edit", element: <CropPlanStageEdit /> },
            { path: "/:crop_plan_stage_id/delete", element: <CropPlanStageDelete /> },
            { path: "/create", element: <CropPlanStageCreate /> },
        ],
    },
];

// export the variable as default
export default cropPlanStagesRoutes;
