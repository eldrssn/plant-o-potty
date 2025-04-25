import { FC } from 'react'
import { Avatar, Card, CardHeader, Chip } from '@heroui/react'
import { PropsType } from './types'
import { getDayAndMonth, getDaysDifferenceFromNow, getWateringStatus, pluralizeDays } from '@entities'

export const PlantListItem: FC<PropsType> = ({ plant }) => {
  const { nickname, plant_type, photoUrl, nextWateringDate, wateringIntervalDays } = plant

  const formattedDate = getDayAndMonth(nextWateringDate)
  const difference = getDaysDifferenceFromNow(nextWateringDate)
  const wateringStatus = getWateringStatus({ date: formattedDate, difference })

  const isLate = difference && difference < 0

  return (
    <Card className="" isHoverable>
      <CardHeader className="items-center gap-5">
        <div>
          <Avatar
            showFallback
            src={photoUrl === null ? undefined : photoUrl}
            name={nickname || plant_type}
            radius="full"
            className="w-20 h-20 max-h-20 aspect-square"
          />
        </div>
        <div>
          {nickname && <p className="text-md">{nickname}</p>}
          {plant_type && <p className={nickname ? 'text-xs' : 'text-md'}>{plant_type}</p>}
          <div className="flex flex-wrap gap-1 mt-2">
            <Chip>
              Раз в {wateringIntervalDays} {pluralizeDays(wateringIntervalDays)}
            </Chip>
            <Chip color={isLate ? 'danger' : 'primary'}>{wateringStatus}</Chip>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
