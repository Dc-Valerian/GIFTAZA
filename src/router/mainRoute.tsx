import { createBrowserRouter, useNavigate } from "react-router-dom";
import LandingPage from "../pages/LandinPage/LandingPage";
import LandingPageLayout from "../Layout/LandingPageLayout/LandingPageLayout";
// import Login from "../AuthPages/Login";
import SignIn from "../AuthPages/SignIn";
import SelectAccount from "../AuthPages/SelectAccount";
import Login from "../AuthPages/UserAuth/User.Login";
import Register from "../AuthPages/UserAuth/User.Register";
import BizzSignUp from "../AuthPages/BusinessAuth/Business.Register";
import BizzLogin from "../AuthPages/BusinessAuth/Business.Login";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/get-started",
    element: <SelectAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "business",
    children: [
      {
        path: "register",
        element: <BizzSignUp />,
      },
      {
        path: "login",
        element: <BizzLogin />,
      },
    ],
  },
]);
