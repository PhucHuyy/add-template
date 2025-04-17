import HomePage from '../pages/HomePage';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import DefaultLayout from '../components/layout/DefaultLayout';
import AuthLayout from '../components/layout/AuthLayout';
import { JSX } from 'react';

interface RouteConfig {
  path: string;
  element: JSX.Element;
  layout?: React.ComponentType<{ children: React.ReactNode }>;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <HomePage />,
    layout: DefaultLayout,
  },
  {
    path: '/404',
    element: <Error404 />,
    layout: DefaultLayout,
  },
  {
    path: '/login',
    element: <Login />,
    layout: AuthLayout,
  },
  {
    path: '/signup',
    element: <SignUp />,
    layout: AuthLayout,
  },
];

export default routes;
