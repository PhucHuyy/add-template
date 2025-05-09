import HomePage from '../pages/HomePage';
import Error404 from '../pages/Error404';
import Login from '../pages/identity/login/Login';
import SignUp from '../pages/identity/register/SignUp';

import DefaultLayout from '../components/layout/DefaultLayout';
import AuthLayout from '../components/layout/AuthLayout';
import { JSX } from 'react';
import UserProfile from '../pages/identity/user/UserProfile';
import RequireGuest from '../components/guards/RequireGuest';
import SecuritySettings from '../pages/identity/user/setting/SecuritySetting';
import RequireAuth from '../components/guards/RequireAuth';
import ResetPassword from '../pages/identity/user/resetPassword/ResetPassword';
import ForgetPassword from '../pages/identity/user/resetPassword/ForgetPassword';
import Authenticate from '../pages/identity/login/authenticate';

import StudentProfile from '../pages/identity/user/StudentProfile';
import StudentVerifycation from '../pages/identity/user/StudentVerifycation/StudentVerifycation';
import ManageCv from '../pages/identity/user/ManageCv/ManageCv';
import UpdateProfile from '../pages/identity/user/UpdateProfile/UpdateProfile';
import LogoutSang from '../pages/identity/user/StudentVerifycation/LogoutSang';


import BusinessProfile from '../pages/identity/user/business/BusinessProfile';
 
import VerifyBusinessForm from '../pages/identity/user/business/VerifyBusinessForm';
import EditBusinessProfile from '../pages/identity/user/business/EditBusinessProfile';
import RequireRole from '../components/guards/RequireRole';
import AdminLayout from '../components/layout/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashBoard';



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
    element: (
      <RequireGuest>
        <Login />
      </RequireGuest>
    ),
    layout: AuthLayout,
  },
  {
    path: '/signup',
    element: (
      <RequireGuest>
        <SignUp />
      </RequireGuest>
    ),
    layout: AuthLayout,
  },
  {
    path: '/forget-password',
    element: (
      <RequireGuest>
        <ForgetPassword />
      </RequireGuest>
    ),
    layout: AuthLayout,
  },
  {
    path: '/businessprofile',
    element: (
      <RequireAuth>
        <BusinessProfile />
      </RequireAuth>
    ),
    layout: DefaultLayout,
  },
  {
    path: '/edit',
    element: (
      <RequireAuth>
        <EditBusinessProfile />
      </RequireAuth>
    ),
    layout: DefaultLayout,
  },
  {
    path: '/verify-business',
    element: (
      <RequireAuth>
        <VerifyBusinessForm />
      </RequireAuth>
    ),
    layout: DefaultLayout,
  },
  {
    path: '/profile',    
    element: <RequireAuth><UserProfile /></RequireAuth>,
    layout: DefaultLayout,
  },
  {
    path: '/logoutsang',
    element: <RequireAuth><LogoutSang /></RequireAuth>,
    layout: DefaultLayout,
  },
  {
    path: '/studentprofile',
    element: <RequireAuth><StudentProfile /></RequireAuth>,
    layout: DefaultLayout,
  },
  {
    path: '/studentverifycation',
    element: <RequireAuth><StudentVerifycation /></RequireAuth>,
    layout: DefaultLayout,
  },
  {
    path: '/updateprofile',
    element: <RequireAuth><UpdateProfile /></RequireAuth>,
    layout: DefaultLayout,
  },
  {
    path: '/cv',
    element: <RequireAuth><ManageCv /></RequireAuth>,
    layout: DefaultLayout,
  },
  {
    path: '/settings/security',
    element: <RequireAuth><SecuritySettings /></RequireAuth>,
    layout: DefaultLayout,
  },
  
    {
      path: '/reset-password',
      element: <RequireGuest><ResetPassword /></RequireGuest>,
      layout: DefaultLayout,
    },
    {
      path: '/authenticate',
      element: <Authenticate></Authenticate>
    },
    {
      path: "/admin",
      element: <RequireAuth>
        <RequireRole allowRoles={['ADMIN', 'STAFF_ADMIN']}>
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
          </RequireRole>
      </RequireAuth>
    }
];
export default routes;
