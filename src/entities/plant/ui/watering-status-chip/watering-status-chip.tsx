import { Chip } from '@heroui/react'
import {
  getDayAndMonth,
  getDaysDifferenceFromNow,
  getWateringStatus,
} from 'entities/plant/lib'
import { FC } from 'react'
import { WateringStatusChipProps } from './types'

export const WateringStatusChip: FC<WateringStatusChipProps> = ({
  nextWateringDate,
  size,
}) => {
  const formattedDate = getDayAndMonth(nextWateringDate)
  const difference = getDaysDifferenceFromNow(nextWateringDate)
  const status = getWateringStatus({ date: formattedDate, difference })
  const isLate = difference && difference < 0

  return (
    <Chip size={size} color={isLate ? 'danger' : 'primary'}>
      {status}
    </Chip>
  )
}
