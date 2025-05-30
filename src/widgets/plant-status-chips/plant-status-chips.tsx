import { FC } from 'react'
import { PlantStatusChipsProps } from './types'

import {
  LastWateringChip,
  WateringIntervalChip,
  WateringStatusChip,
} from '@entities'

export const PlantStatusChips: FC<PlantStatusChipsProps> = ({
  plant,
  size,
}) => {
  const { wateringIntervalDays, lastWateredDate, nextWateringDate } = plant

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {wateringIntervalDays && (
        <WateringIntervalChip
          size={size}
          wateringIntervalDays={wateringIntervalDays}
        />
      )}
      {nextWateringDate && (
        <WateringStatusChip size={size} nextWateringDate={nextWateringDate} />
      )}
      {lastWateredDate && (
        <LastWateringChip size={size} lastWateredDate={lastWateredDate} />
      )}
    </div>
  )
}
