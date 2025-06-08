import { FC } from 'react'
import { Button, cn } from '@heroui/react'
import { useModalsStore } from '@app'
import { usePlantsStore } from '@entities'
import { WaterPlantButtonProps } from './types'

export const WaterPlantButton: FC<WaterPlantButtonProps> = ({
  label = 'Полить это растение',
  itemId,
  className,
}) => {
  const { waterPlant } = usePlantsStore()
  const { showModalWaterPlant, setSubmitCallback } = useModalsStore()

  const handlePress = () => {
    showModalWaterPlant()
    setSubmitCallback(() => waterPlant(itemId))
  }

  return (
    <Button
      color="primary"
      variant="flat"
      className={cn('m-5', className)}
      onPress={handlePress}
    >
      {label}
    </Button>
  )
}
