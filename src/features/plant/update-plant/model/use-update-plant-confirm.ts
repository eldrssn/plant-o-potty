import { useModalsStore } from '@app'

export const useUpdatePlantConfirm = (onClose: () => void) => {
  const { submitCallback } = useModalsStore()

  const handleSubmit = () => {
    submitCallback?.()
    onClose()
  }

  return {
    handleSubmit,
  }
}
