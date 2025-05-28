import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PlantModel, usePlantsStore } from '@entities'
import { ManagePlantForm } from 'features'

export const UpdatePlantPage = () => {
  const { itemId } = useParams()
  const { plants } = usePlantsStore()

  const [plant, setPlant] = useState<PlantModel>()

  useEffect(() => {
    const currentPlant = plants.find(({ id }) => id === itemId)
    setPlant(currentPlant)
  }, [itemId, plants])

  if (!plant) return <></>

  return <ManagePlantForm plant={plant} mode="update" />
}
