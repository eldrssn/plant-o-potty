import { addToast } from '@heroui/react'

import { useModalsStore } from '@app'

export const useWaterPlantConfirm = (onClose: () => void) => {
  const { submitCallback } = useModalsStore()

  const handleConfirm = () => {
    submitCallback?.()
    onClose()
    addToast({
      title: 'Растение полито!',
      color: 'success',
    })
  }

  return {
    handleConfirm,
  }
}
