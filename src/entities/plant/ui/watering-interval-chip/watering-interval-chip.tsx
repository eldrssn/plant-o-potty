import { Chip } from '@heroui/react'
import { pluralizeDays } from 'entities/plant/lib'
import { FC } from 'react'
import { WateringItervalChipProps } from './types'

export const WateringIntervalChip: FC<WateringItervalChipProps> = ({
  wateringIntervalDays,
  size,
}) => {
  return (
    <Chip size={size}>
      Раз в {wateringIntervalDays} {pluralizeDays(wateringIntervalDays)}
    </Chip>
  )
}
