import { Link } from 'react-router-dom'
import { Tab, Tabs } from '@heroui/react'
import { NAV_ROUTES } from '@app'

export const NavBar = () => {
  return (
    <nav className="fixed flex justify-center w-full bottom-4">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        {Object.values(NAV_ROUTES).map(({ path, name }) => (
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
