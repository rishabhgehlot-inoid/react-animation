import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { SideBarLayOut } from "./App";
import GalleryManagement from "./admin/Gallery";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <SideBarLayOut>
            <GalleryManagement />
          </SideBarLayOut>
        }
      />
      <Route
        path="/blog"
        element={
          <SideBarLayOut>
            <div></div>
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
