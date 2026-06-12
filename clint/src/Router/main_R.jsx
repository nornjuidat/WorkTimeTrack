import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import EntryPage from "../_Features/EnterPage/Enter";
import ExitPage from "../_Features/ExitPage/Exit";
import RecordsPage from "../_Features/ShowList.jsx/Show";

const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <EntryPage /> },
      { path: "/exit", element: <ExitPage /> },
      { path: "/records", element: <RecordsPage /> },
    ],
  },
]);

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import EventNoteIcon from "@mui/icons-material/EventNote";

export const menuItems = [
  {
    path: "/",
    title: "Check In",
    icon: <LoginIcon />,
  },
  {
    path: "/exit",
    title: "Check Out",
    icon: <LogoutIcon />,
  },
  {
    path: "/records",
    title: "Attendance Records",
    icon: <EventNoteIcon />,
  },
];

export default appRouter;