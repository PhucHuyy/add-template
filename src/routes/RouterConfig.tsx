import HomePage from '../pages/HomePage';
import Error404 from '../pages/Error404';
import Login from '../pages/identity/login/Login';
import SignUp from '../pages/identity/register/SignUp';

import DefaultLayout from '../components/layout/DefaultLayout';
import AuthLayout from '../components/layout/AuthLayout';
import { JSX } from 'react';
import ForgetPassword from '../pages/ForgetPassword';
import UserProfile from '../pages/identity/user/UserProfile';
import RequireGuest from '../components/guards/RequireGuest';

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
    element: <RequireGuest><Login /></RequireGuest>,
    layout: AuthLayout,
  },
  {
    path: '/signup',
    element: <RequireGuest><SignUp /></RequireGuest>,
    layout: AuthLayout,
  },
  {
    path: '/forget-password',
    element: <RequireGuest><ForgetPassword /></RequireGuest>,
    layout: AuthLayout,
  },
  {
    path: '/profile',
    element: <UserProfile />,
    layout: DefaultLayout,
  }
];
export default routes;
