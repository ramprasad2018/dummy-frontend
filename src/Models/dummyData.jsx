// dummy data for crop plans
export const dummyCropPlans = [
    {
        id: 1,
        name: "Tomato Plan",
        description: "A plan for growing tomatoes",
        start_date: "2021-10-01",
        end_date: "2021-12-31",
    },
    {
        id: 2,
        name: "Lettuce Plan",
        description: "A plan for growing lettuce",
        start_date: "2021-11-01",
        end_date: "2022-01-31",
    },
];

// dummy data for crop plan stages
export const dummyCropPlanStages = [
    {
        id: 1,
        crop_plan_id: 1,
        stage_name: "Seedling",
        stage_description: "The stage where the seeds germinate and grow",
        start_date: "2021-10-01",
        end_date: "2021-10-15",
    },
    {
        id: 2,
        crop_plan_id: 1,
        stage_name: "Flowering",
        stage_description: "The stage where the plants produce flowers and fruits",
        start_date: "2021-10-16",
        end_date: "2021-11-30",
    },
    {
        id: 3,
        crop_plan_id: 1,
        stage_name: "Harvesting",
        stage_description: "The stage where the fruits are ready to be harvested",
        start_date: "2021-12-01",
        end_date: "2021-12-31",
    },
];
