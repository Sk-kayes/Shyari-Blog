import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '../layouts/AppLayout';

import LandingPage from '../pages/LandingPage';
import AllPostsPage from '../pages/AllPostsPage';
import AboutUsPage from '../pages/AboutUsPage';
import AddShyariPage from '../pages/AddShyariPage';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'posts', element: <AllPostsPage /> },
      { path: 'about', element: <AboutUsPage /> },
      { path: 'write', element: <AddShyariPage /> },
    ],
  },

  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
]);

export default router;
