import { NAV_ROUTES } from '@app'
import { useLocation } from 'react-router-dom'
import { getHeaderName } from './utils'

export const Header = () => {
  const { pathname } = useLocation()

  const header = getHeaderName({ pathname, routes: NAV_ROUTES })

  return <header className="mb-4 text-2xl text-center">{header}</header>
}
