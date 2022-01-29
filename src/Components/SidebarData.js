import React, { Component } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

export const SidebarData = [
    {icon: <HomeIcon/>, title: "Home", link: "/home"},
    {icon: <ArticleIcon/>, title: "Learning", link: "/learning"},
    {icon: <CommentIcon/>, title: "Schedule", link: "/schedule"},
    {icon: <VideoCameraFrontIcon/>, title: "Session", link: "/session"}
];