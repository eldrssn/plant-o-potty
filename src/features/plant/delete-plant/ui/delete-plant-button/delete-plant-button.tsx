import { useModalsStore } from '@app'
import { Button } from '@heroui/react'

export const DeletePlantButton = () => {
  const { showModalDeletePlantConfirm } = useModalsStore()

  return (
    <Button
      color="warning"
      variant="bordered"
      className="mx-5 mt-auto"
      onPress={showModalDeletePlantConfirm}
    >
      Удалить это растение
    </Button>
  )
}
