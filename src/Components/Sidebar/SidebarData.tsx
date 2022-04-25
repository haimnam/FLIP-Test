import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import CommentIcon from "@mui/icons-material/Comment";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

export const SidebarData = [
  { icon: <HomeIcon />, title: "Home", path: "/home" },
  { icon: <ArticleIcon />, title: "Learning", path: "/learning" },
  {
    icon: <CommentIcon />,
    title: "Schedule",
    path: "/schedule/account",
  },
  { icon: <VideoCameraFrontIcon />, title: "Session", path: "/session" },
  { icon: <HomeIcon />, title: "My Page", path: "/myPage" },
  { icon: <ArticleIcon />, title: "Notes", path: "/notes" },
];
