import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App, { SideBarLayOut } from "./App";
import BlogPage from "./components/Pages/BlogPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <SideBarLayOut>
            <App />
          </SideBarLayOut>
        }
      />
      <Route
        path="/blog"
        element={
          <SideBarLayOut>
            <BlogPage />
          </SideBarLayOut>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
