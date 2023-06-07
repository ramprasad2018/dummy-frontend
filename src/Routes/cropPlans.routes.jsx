// cropPlan.routes.js
import CropPlanList from "../Pages/CropPlan/DummyCropPlanList";
import CropPlanView from "../Pages/CropPlan/DummyCropPlanView";
import CropPlanCreate from "../Pages/CropPlan/DummyCropPlanCreate";
import CropPlanEdit from "../Pages/CropPlan/DummyCropPlanEdit";
import CropPlanDelete from "../Pages/CropPlan/DummyCropPlanDelete";
import SharedCropPlanLayout from "../Layouts/SharedCropPlanLayout";

// assign the array to a variable
const cropPlansRoutes = [
    {
        path: "/crop-plans",
        element: <SharedCropPlanLayout />, // add the shared layout here
        children: [
            // add the index prop to the list route
            { path: "/", element: <CropPlanList />, index: true },
            { path: "/:crop_plan_id", element: <CropPlanView /> },
            { path: "/:crop_plan_id/edit", element: <CropPlanEdit /> },
            { path: "/:crop_plan_id/delete", element: <CropPlanDelete /> },
            { path: "/create", element: <CropPlanCreate /> },
        ],
    },
];

// export the variable as default
export default cropPlansRoutes;
