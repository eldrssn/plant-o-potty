import { FC } from 'react'
import { Avatar, Card, CardHeader } from '@heroui/react'
import { PropsType } from './types'

import { Link } from 'react-router-dom'
import { NAV_ROUTES } from '@app'

import { PlantStatusChips } from './ui'

export const PlantListItem: FC<PropsType> = ({ plant }) => {
  const { nickname, plant_type, photoUrl, id } = plant

  return (
    <Link to={`${NAV_ROUTES.PLANTS.path}/${id}`}>
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
          <div className="flex flex-col justify-start">
            {nickname && <p className="text-md">{nickname}</p>}
            {plant_type && (
              <p className={nickname ? 'text-xs' : 'text-md'}>{plant_type}</p>
            )}
            <PlantStatusChips plant={plant} />
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}
