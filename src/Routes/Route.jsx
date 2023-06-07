// Route.js
import React from "react";
import { Route as ReactRouterRoute } from "react-router-dom";

export default function Route({ routes }) {
  return (
    <>
      {routes.map((route) => (
        <ReactRouterRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          element={route.component}
        >
          {/* check if the route has any children routes */}
          {route.children && (
            // render another Route component for the children routes
            <Route routes={route.children} />
          )}
        </ReactRouterRoute>
      ))}
    </>
  );
}
