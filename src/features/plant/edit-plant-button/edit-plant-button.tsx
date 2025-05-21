import { Button } from '@heroui/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAV_ROUTES } from '@app'
import { EditPlantButtonProps } from './types'

export const EditPlantButton: FC<EditPlantButtonProps> = ({ plantId }) => {
  const navigate = useNavigate()

  return (
    <Button
      className="z-20"
      radius="lg"
      variant="flat"
      onPress={() => navigate(`${NAV_ROUTES.PLANTS.path}/${plantId}/edit`)}
    >
      Edit
    </Button>
  )
}
