import { PopupLayout } from './popup-layout'
import { PopupPortal } from './popup-portal'
import { useMountPopup } from './use-mount-popup'
import { PopupProps } from './types'

export const Popup = (props: PopupProps) => {
  const { opened } = props
  const { mounted } = useMountPopup(opened)

  return (
    <PopupPortal>
      <PopupLayout {...props} mounted={mounted} />
    </PopupPortal>
  )
}
