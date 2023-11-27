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
import UserCards from "../pages/DashBoardPages/UserCards/UserCards";
import UserNotify from "../pages/DashBoardPages/UserNotify/UserNotify";
import PopUp from "../pages/POPUP";
import AllBusinessUsers from "../pages/AdminDashboard/BusinessUsers/AllBusinessUsers";
import GiftCard from "../pages/LandinPage/GiftCard";
import OTP from "../pages/DashBoardPages/OTP_PAGE/Otp";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/all-giftcards",
        element: <GiftCard />,
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
        element: <AllBusinessUsers />,
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
  {
    path: "/popup",
    element: <PopUp />,
  },
  {
    path: "/otp_verification",
    element: <OTP />,
  },
]);
