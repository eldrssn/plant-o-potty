import { RouteObject } from 'react-router-dom'
import {
  ItemPage,
  DashboardPage,
  ProfilePage,
  PlantsPage,
  EditPlantPage,
  AddPlantPage,
} from '@pages'
import { MainLayout } from 'app/layouts'

export const NAV_ROUTES = {
  DASHBOARD: { path: '/', name: 'Home' },
  PLANTS: { path: '/plants', name: 'My Plants' },
  PROFILE: { path: '/profile', name: 'Profile' },
}

export const ROUTES_LIST: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: NAV_ROUTES.DASHBOARD.path,
        element: <DashboardPage />,
      },
      {
        path: NAV_ROUTES.PLANTS.path,
        children: [
          { index: true, element: <PlantsPage /> },
          { path: ':itemId', element: <ItemPage /> },
          { path: ':itemId/edit', element: <EditPlantPage /> },
        ],
      },
      {
        path: '/create',
        element: <AddPlantPage />,
      },
      {
        path: NAV_ROUTES.PROFILE.path,
        element: <ProfilePage />,
      },
    ],
  },
]
