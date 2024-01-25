import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import HomeScreen from "../pages/home/HomeScreen";
import Upgrade from "../pages/Pay/Upgrade";
import RegisterCard from "../pages/auth/RegisterCard";
import AuthLayout from "../components/layout/AuthLayout";
import ViewFamily from "../pages/family/ViewFamily";
import SettingScreen from "../pages/settings/Setting";
import PersonalInfoScreen from "../pages/settings/PersonalInfoScreen";
import PersonalSetting from "../pages/settings/PersonalSetting";
import ProfressionInfoScreen from "../pages/settings/PrefessionalInfoScreen";
import HospitalChice from "../pages/settings/HospitalChice";
import Appoinments from "../pages/appiontment/Appoinments";
import HistoryScreen from "../pages/history/HistoryScreen";
import ViewUserScreen from "../pages/family/ViewStaffsScreen";
import ViewClientDetail from "../pages/home/ViewClientDetail/ViewClientDetail";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRouter>
      <Layout />
      // </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "upgrade",
        element: <Upgrade />,
      },
      {
        index: true,
        path: "view-clients",
        element: <ViewUserScreen />,
      },
      {
        index: true,
        path: "booked-studios",
        element: <Appoinments />,
      },
      {
        index: true,
        path: "report-complains",
        element: <HistoryScreen />,
      },
      // {
      //   path: "my-personal-info",
      //   element: <PersonalSetting />,
      //   children: [
      //     {
      //       index: true,
      //       path: "info",
      //       element: <PersonalInfoScreen />,
      //     },
      //     {
      //       index: true,
      //       path: "my-main-info",
      //       element: <ProfressionInfoScreen />,
      //     },
      //     {
      //       index: true,
      //       path: "choose-hospital",
      //       element: <HospitalChice />,
      //     },
      //   ],
      // },
      {
        path: "settings",
        element: <SettingScreen />,
      },
      {
        path: "view-clients/:id/client-detail",
        element: <ViewClientDetail />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <AuthLayout />,
  //   children: [
  //     { index: true, path: "register", element: <Register /> },
  //     {
  //       index: true,
  //       path: "login",
  //       element: <SignIn />,
  //     },
  //     {
  //       index: true,
  //       path: "api/verify-user/:userID",
  //       element: <SignIn />,
  //     },
  //     {
  //       path: "register-info",
  //       index: true,
  //       element: <RegisterCard />,
  //     },
  //   ],
  // },
]);
