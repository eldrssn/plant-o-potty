import { FC } from 'react'
import { Chip } from '@heroui/react'
import { getDayAndMonth } from 'entities/plant/lib'
import { LastWateringChipProps } from './types'

export const LastWateringChip: FC<LastWateringChipProps> = ({
  lastWateredDate,
  size,
}) => {
  const formattedLastWateringDate = getDayAndMonth(lastWateredDate)

  return (
    <Chip size={size}>
      Последний раз был полив: {formattedLastWateringDate}
    </Chip>
  )
}
