import { FC } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { ModalsProvider, NAV_ROUTES } from '@app'
import { Button } from '@heroui/react'
import { Header, NavBar } from 'widgets'

export const MainLayout: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const routes = Object.values(NAV_ROUTES)
  const isMatchNavRoutes = !!routes.find(({ path }) => path === pathname)

  return (
    <div className="relative w-full h-dvh">
      {isMatchNavRoutes ? (
        <Header />
      ) : (
        <Button
          className="absolute z-20 top-4 left-4"
          radius="lg"
          variant="flat"
          onPress={() => navigate(-1)}
        >
          Назад
        </Button>
      )}
      <ModalsProvider>
        <Outlet />
      </ModalsProvider>
      <NavBar isMatch={isMatchNavRoutes} routes={routes} />
    </div>
  )
}
