import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, NavBar } from './components'

export const MainLayout: FC = () => {
  return (
    <div className="relative w-full px-4 py-6 h-dvh">
      <Header />
      <Outlet />
      <NavBar />
    </div>
  )
}
