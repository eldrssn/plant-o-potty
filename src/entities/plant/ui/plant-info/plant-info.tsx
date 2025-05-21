import { FC } from 'react'
import { PlantInfoProps } from './types'

export const PlantInfo: FC<PlantInfoProps> = ({ plant }) => {
  const { nickname, plant_type } = plant

  return (
    <div className="flex flex-col justify-center">
      {nickname && <p className="text-2xl">{nickname}</p>}
      <h1 className={nickname ? '' : 'text-2xl'}>{plant_type}</h1>
    </div>
  )
}
