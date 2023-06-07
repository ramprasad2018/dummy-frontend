// App.js
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import cropPlansRoutes from "./Routes/cropPlans.routes";
import cropPlanStagesRoutes from "./Routes/cropPlanStages.routes";
import MainSharedLayout from "./Layouts/MainSharedLayout";
import Home from "./Pages/Base/Home";
import About from "./Pages/Base/About";
import CustomRoute from "./Routes/CustomRoute";

function App() {
  return (
    <BrowserRouter>
      {/* wrap all the routes with the main shared layout */}
      <Routes>
        <CustomRoute
          routes={[
            {
              path: "/",
              element: <MainSharedLayout />,
              children: [
                // add the index prop to the home route
                { path: "/", element: <Home />, index: true },
                // add the about route as a child
                { path: "/about", element: <About /> },
                // add the crop plans routes as children
                ...cropPlansRoutes,
                // add the crop plan stages routes as children
                ...cropPlanStagesRoutes,
              ],
            },
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
