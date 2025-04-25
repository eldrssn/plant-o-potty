import { NAV_ROUTES } from '@app'

export const getHeaderName = ({ routes, pathname }: { routes: typeof NAV_ROUTES; pathname: string }) =>
  Object.values(routes).find((el) => el.path === pathname)?.name
