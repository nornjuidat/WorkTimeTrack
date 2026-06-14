import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/AppLayout";
import EntryPage from "../_Features/EnterPage/EntryPage";
import ExitPage from "../_Features/ExitPage/ExitPage";
import RecordsPage from "../_Features/RecordPage/RecordsPage";

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
    title: "Entery",
    icon: <LoginIcon />,
  },
  {
    path: "/exit",
    title: "Exity",
    icon: <LogoutIcon />,
  },
  {
    path: "/records",
    title: "Records",
    icon: <EventNoteIcon />,
  },
];

export default appRouter;