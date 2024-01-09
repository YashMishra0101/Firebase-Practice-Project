import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./pages/registration/Login.jsx";
import SignUpPage from "./pages/registration/Signup.jsx";
import Home from "./pages/Home.jsx";
import { ProtectedRoute } from "./protectRoute/ProtectedRoute.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<SignUpPage />} />
      <Route path="loginpage" element={<LoginPage />} />
      <Route path="home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
