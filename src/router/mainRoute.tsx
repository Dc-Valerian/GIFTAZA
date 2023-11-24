import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandinPage/LandingPage";
import LandingPageLayout from "../Layout/LandingPageLayout/LandingPageLayout";
// import Login from "../AuthPages/Login";
import SelectAccount from "../AuthPages/SelectAccount";
import Login from "../AuthPages/UserAuth/User.Login";
import BizzSignUp from "../AuthPages/BusinessAuth/Business.Register";
import BizzLogin from "../AuthPages/BusinessAuth/Business.Login";
import UserDashboardLayout from "../Layout/DashBoardLayour/UserDashboard/UseDashboardLayout";
import UserHome from "../pages/DashBoardPages/UserHome/UserHome";
import UserProfile from "../pages/DashBoardPages/UserProfile/UserProfile";
import BusinessRoutes from "../Layout/AdminDashBoardLayout/BusinessRoutes";
import BusinessCard from "../pages/AdminDashboard/BusinessCard";
import BusinessHome from "../pages/AdminDashboard/BusinessHome";

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
    path: "/business-register",
    element: <BizzSignUp />,
  },
  {
    path: "business-login",
    element: <BizzLogin />,
  },

  {
    path: "/user-dashboard",
    element: <UserDashboardLayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "/user-dashboard/profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/business-dashboard", // This is your parent route
    element: <BusinessRoutes />,
    children: [
      {
        index: true,
        element: <BusinessHome />,
        // path: "/dashboard", // Nested route path within BusinessRoutes
      },
      {
        path: "/business-dashboard/giftcard", // Nested route path within BusinessRoutes
        element: <BusinessCard />,
      },
    ],
  },
]);
