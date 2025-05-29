import { FC } from 'react'
import { PlantStatusChipsProps } from './types'

import { WateringIntervalChip, WateringStatusChip } from '@entities'

export const PlantStatusChips: FC<PlantStatusChipsProps> = ({
  plant,
  size,
}) => {
  const { wateringIntervalDays, nextWateringDate } = plant

  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {wateringIntervalDays && (
        <WateringIntervalChip
          size={size}
          wateringIntervalDays={wateringIntervalDays}
        />
      )}
      {nextWateringDate && (
        <WateringStatusChip size={size} nextWateringDate={nextWateringDate} />
      )}
    </div>
  )
}
