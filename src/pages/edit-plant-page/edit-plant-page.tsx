import { PlantModel, usePlantsStore } from '@entities'

import { MenagePlantForm } from 'features'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const EditPlantPage = () => {
  const [plant, setPlant] = useState<PlantModel>()
  const { itemId } = useParams()

  const { plants } = usePlantsStore()

  useEffect(() => {
    const currentPlant = plants.find(({ id }) => id === itemId)
    setPlant(currentPlant)
  }, [itemId, plants])

  if (!plant) return <></>

  return <MenagePlantForm plant={plant} />
}
