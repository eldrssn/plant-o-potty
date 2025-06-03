import { useModalsStore } from '@app'
import { Button } from '@heroui/react'

export const WaterPlantButton = () => {
  const { showModalWaterPlant } = useModalsStore()

  return (
    <Button
      color="primary"
      variant="flat"
      className="m-5"
      onPress={showModalWaterPlant}
    >
      Полить это растение
    </Button>
  )
}
