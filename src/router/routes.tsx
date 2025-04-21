import { MainLayout } from '@app/layouts'
import { ItemPage, DashboardPage, ProfilePage } from '@pages'
import { RouteObject } from 'react-router-dom'

export const NAV_ROUTES = {
  DASHBOARD: { path: '/', name: 'Home' },
  NEW_ITEM: { path: '/new-item', name: 'Add new' },
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
        path: NAV_ROUTES.NEW_ITEM.path,
        element: <ItemPage />,
      },
      {
        path: '/item:itemId',
        element: <ItemPage />,
      },
      {
        path: NAV_ROUTES.PROFILE.path,
        element: <ProfilePage />,
      },
    ],
  },
]
