import { RouteObject } from 'react-router-dom'
import {
  ItemPage,
  DashboardPage,
  ProfilePage,
  PlantsPage,
  UpdatePlantPage,
  CreatePlantPage,
} from '@pages'
import { MainLayout } from 'app/layouts'

export const NAV_ROUTES = {
  DASHBOARD: { path: '/', name: 'Главная' },
  PLANTS: { path: '/plants', name: 'Растения' },
  PROFILE: { path: '/profile', name: 'Профиль' },
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
          { path: ':itemId/update', element: <UpdatePlantPage /> },
        ],
      },
      {
        path: '/create',
        element: <CreatePlantPage />,
      },
      {
        path: NAV_ROUTES.PROFILE.path,
        element: <ProfilePage />,
      },
    ],
  },
]
