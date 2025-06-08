import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, CardHeader } from '@heroui/react'
import { WateringStatusChip } from '../watering-status-chip'
import { PlantTaskItemProps } from './types'

import { NAV_ROUTES } from '@app'
import { WaterPlantButton } from 'features'

export const PlantTaskItem: FC<PlantTaskItemProps> = ({ item }) => {
  const { photoUrl, nickname, plant_type, nextWateringDate, id } = item

  return (
    <CardHeader className="items-center gap-3">
      <Link to={`${NAV_ROUTES.PLANTS.path}/${id}`}>
        <Avatar
          showFallback
          src={photoUrl === null ? undefined : photoUrl}
          name={nickname || plant_type}
          radius="full"
          className="w-16 h-16 max-h-20 aspect-square"
        />
      </Link>
      <div className="flex flex-col justify-start gap-1">
        {nickname && <p className="text-md">{nickname}</p>}
        {plant_type && (
          <p className={nickname ? 'text-xs' : 'text-md'}>{plant_type}</p>
        )}

        {nextWateringDate && (
          <WateringStatusChip size="sm" nextWateringDate={nextWateringDate} />
        )}
      </div>
      <WaterPlantButton label="Полить" itemId={id} className="m-0 ml-auto" />
    </CardHeader>
  )
}
