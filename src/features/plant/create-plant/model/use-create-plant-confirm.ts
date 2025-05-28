import { useModalsStore } from '@app'

export const useCreatePlantConfirm = (onClose: () => void) => {
  const { submitCallback } = useModalsStore()

  const handleSubmit = () => {
    submitCallback?.()
    onClose()
  }

  return {
    handleSubmit,
  }
}
