// CustomRoute.js
import React from "react";
import { Route as ReactRouterRoute } from "react-router-dom";
import Route from "./Route"; // import from "./Route" here

export default function CustomRoute({ routes }) {
  return (
    <>
      {routes.map((route) => (
        <ReactRouterRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          element={route.element}
        >
          {/* check if the route has any children routes */}
          {route.children && (
            // render another Route component for the children routes
            <Route routes={route.children} /> // use Route here
          )}
        </ReactRouterRoute>
      ))}
    </>
  );
}
