import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@heroui/react'

export const AddPlantButton: FC = () => {
  const navigate = useNavigate()

  return (
    <Button
      className="fixed z-20 -translate-x-1/2 w-60 bottom-16 left-1/2"
      radius="lg"
      variant="flat"
      onPress={() => navigate(`/create`)}
    >
      Add New Plant
    </Button>
  )
}
