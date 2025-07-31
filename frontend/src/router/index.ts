import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import LandingPage from './../pages/LandingPage';
import AllPostsPage from '../pages/AllPostsPage';
import RegistrationForm from '../pages/RegistrationPage';
import LoginForm from '../pages/LoginPage';
import AboutUsPage from '../pages/AboutUsPage';
import Layout from '../components/Layout';
import AddShayariForm from '../pages/AddShyariPage';

const router = createBrowserRouter([
    {
    path: "/",
    element: React.createElement(Layout),
    children: [
      { path: "", element: React.createElement(LandingPage) },
      { path: "posts", element: React.createElement(AllPostsPage) },
      { path: "register", element: React.createElement(RegistrationForm) },
      { path: "login", element: React.createElement(LoginForm) },
      { path: "about", element: React.createElement(AboutUsPage) },
      { path: "write", element: React.createElement(AddShayariForm) },
    ]
  }
]);

export default router;