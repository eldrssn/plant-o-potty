import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components'

export const MainLayout: FC = () => {
  return (
    <div className="relative w-full h-dvh">
      <Outlet />
      <NavBar />
    </div>
  )
}
