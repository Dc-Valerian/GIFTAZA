import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandinPage/LandingPage";
import LandingPageLayout from "../Layout/LandingPageLayout/LandingPageLayout";
import SelectAccount from "../AuthPages/SelectAccount";
import Login from "../AuthPages/UserAuth/User.Login";
import BizzSignUp from "../AuthPages/BusinessAuth/Business.Register";
import BizzLogin from "../AuthPages/BusinessAuth/Business.Login";
import UserDashboardLayout from "../Layout/DashBoardLayour/UserDashboard/UseDashboardLayout";
import UserHome from "../pages/DashBoardPages/UserHome/UserHome";
import BusinessRoutes from "../Layout/AdminDashBoardLayout/BusinessRoutes";
import BusinessHome from "../pages/AdminDashboard/BusinessHome/BusinessHome";
import UserProfile from "../pages/DashBoardPages/UserProfile/UserProfile";
import BusinessCard from "../pages/AdminDashboard/BusinessCard/BusinessCard";
import BusinessHistory from "../pages/AdminDashboard/BusinessHistory/BusinessHistory";
import BusinessProfilePage from "../pages/AdminDashboard/BusinessProfile/BusinessProfilePage";
import UserGiftCardProps from "../pages/AdminDashboard/BusinessUsers/UserGiftCardProps";
import UserCards from "../pages/DashBoardPages/UserCards/UserCards";
import UserNotify from "../pages/DashBoardPages/UserNotify/UserNotify";

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
      {
        path: "/user-dashboard/my-giftcard",
        element: <UserCards />,
      },
      {
        path: "/user-dashboard/notify",
        element: <UserNotify />,
      },
    ],
  },
  {
    path: "/business-dashboard",
    element: <BusinessRoutes />,
    children: [
      {
        index: true,
        element: <BusinessHome />,
      },
      {
        path: "/business-dashboard/giftcard",
        element: <BusinessCard />,
      },
      {
        path: "/business-dashboard/all-users",
        element: <UserGiftCardProps />,
      },
      {
        path: "/business-dashboard/histories",
        element: <BusinessHistory />,
      },
      {
        path: "/business-dashboard/profile",
        element: <BusinessProfilePage />,
      },
    ],
  },
]);
