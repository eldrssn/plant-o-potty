import { Chip } from '@heroui/react'
import { FC } from 'react'
import {
  getDayAndMonth,
  getDaysDifferenceFromNow,
  getWateringStatus,
} from 'entities'
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
