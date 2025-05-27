import { useEffect, useState } from 'react'
import { POPUP_DELAY } from 'shared'

export const useMountPopup = (opened: boolean) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true)
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false)
      }, POPUP_DELAY)
    }
  }, [opened])

  return { mounted }
}
