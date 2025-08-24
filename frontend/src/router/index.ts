import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import LandingPage from './../pages/LandingPage';
import AllPostsPage from '../pages/AllPostsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(LandingPage)
    },
    {
        path: "/posts",
        element: React.createElement(AllPostsPage)
    },
    {
        path: "/register",
        element: React.createElement(RegisterPage)
    },
    {
        path: "/login",
        element: React.createElement(LoginPage)
    }
]);

export default router;