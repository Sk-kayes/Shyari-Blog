import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import LandingPage from './../pages/LandingPage';
import AllPostsPage from '../pages/AllPostsPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(LandingPage)
    },
    {
        path: "/posts",
        element: React.createElement(AllPostsPage)
    }
]);

export default router;