import { useModalsStore } from '@app'
import { Button } from '@heroui/react'

export const DeletePlantButton = () => {
  const { showModalDeletePlant } = useModalsStore()

  return (
    <Button
      color="warning"
      variant="bordered"
      className="mx-5 mt-auto"
      onPress={showModalDeletePlant}
    >
      Удалить это растение
    </Button>
  )
}
