import { Link, useLocation } from 'react-router-dom'
import { Tab, Tabs } from '@heroui/react'
import { FC } from 'react'
import { PropsType } from './types'

export const NavBar: FC<PropsType> = ({ routes, isMatch }) => {
  const { pathname } = useLocation()

  return (
    <nav
      className={`fixed z-20 flex justify-center -translate-x-1/2 bottom-4 left-1/2 transition-transform ${isMatch ? '' : 'translate-y-20'}`}
    >
      <Tabs
        selectedKey={pathname}
        aria-label="Options"
        color="primary"
        variant="bordered"
        className="overflow-hidden rounded-xl backdrop-blur-md border-default-200 "
      >
        {routes.map(({ path, name }) => (
          <Tab
            key={path}
            title={
              <div>
                <Link to={path}>
                  <span>{name}</span>
                </Link>
              </div>
            }
          />
        ))}
      </Tabs>
    </nav>
  )
}
