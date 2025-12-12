// src/router/AppRouter.jsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import UnderMaintenance from '../UnderMaintainance';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Processes = lazy(() => import('../pages/Processes'));
const Contact = lazy(() => import('../pages/Contact'));
const Certificates = lazy(() => import('../pages/Certificates'));

const isMaintenanceMode = true;

const router = createBrowserRouter([
  isMaintenanceMode && !(localStorage.getItem('admin') === 'true')
    ? { path: '*', element: <UnderMaintenance /> }
    : {
        path: '/',
        element: <MainLayout />,
        children: [
          { path: '/', element: <Suspense fallback={<div>Loading...</div>}><Home/></Suspense> },
          { path: 'about', element: <Suspense fallback={<div>Loading...</div>}><About/></Suspense> },
          { path: 'services', element: <Suspense fallback={<div>Loading...</div>}><Services/></Suspense> },
          { path: 'processes', element: <Suspense fallback={<div>Loading...</div>}><Processes/></Suspense> },
          { path: 'contact', element: <Suspense fallback={<div>Loading...</div>}><Contact/></Suspense> },
          { path: 'certificates', element: <Suspense fallback={<div>Loading...</div>}><Certificates/></Suspense> },
        ],
      },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
