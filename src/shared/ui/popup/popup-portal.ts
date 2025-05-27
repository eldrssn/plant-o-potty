import { FC, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

import { POPUPS_CONTAINER_ID } from 'shared'

export const PopupPortal: FC<PropsWithChildren> = ({ children }) => {
  const container = document.getElementById(POPUPS_CONTAINER_ID)!

  return container && ReactDOM.createPortal(children, container)
}
