import { Link } from 'react-router-dom'
import { Tab, Tabs } from '@heroui/react'
import { NAV_ROUTES } from '@router'

export const NavBar = () => {
  return (
    <nav className="fixed flex justify-center w-full bottom-4">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        {Object.values(NAV_ROUTES).map((route) => (
          <Tab
            key={route.path}
            title={
              <div>
                <Link to={route.path}>
                  <span>{route.name}</span>
                </Link>
              </div>
            }
          />
        ))}
      </Tabs>
    </nav>
  )
}
