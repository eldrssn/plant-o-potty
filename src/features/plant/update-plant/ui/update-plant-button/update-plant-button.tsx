import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@heroui/react'
import { NAV_ROUTES } from '@app'
import { UpdatePlantButtonProps } from './types'

export const UpdatePlantButton: FC<UpdatePlantButtonProps> = ({ plantId }) => {
  const navigate = useNavigate()

  return (
    <Button
      className="z-20"
      radius="lg"
      variant="flat"
      onPress={() => navigate(`${NAV_ROUTES.PLANTS.path}/${plantId}/update`)}
    >
      Редактировать
    </Button>
  )
}
