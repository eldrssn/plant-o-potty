import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  PlantImage,
  PlantInfo,
  PlantModel,
  PlantNotes,
  usePlantsStore,
} from '@entities'
import {
  DeletePlantButton,
  UpdatePlantButton,
  WaterPlantButton,
} from 'features'
import { PlantStatusChips } from 'widgets'

// TODO: Нужно добавить потом лоадер и учесть асинхронщину
export const ItemPage = () => {
  const [plant, setPlant] = useState<PlantModel | null>()
  const { itemId } = useParams()

  const { plants } = usePlantsStore()

  useEffect(() => {
    const currentPlant = plants.find(({ id }) => id === itemId)
    setPlant(currentPlant)
  }, [itemId, plants])

  if (!plant) return <></>

  return (
    <div className="flex flex-col h-full pb-5">
      <PlantImage src={plant.photoUrl} />
      <UpdatePlantButton plantId={plant.id} />
      <div className="z-10 flex flex-col px-5 -mt-16 backdrop-blur-sm">
        <div className="flex items-center justify-between h-16 mb-3">
          <PlantInfo plant={plant} />
        </div>

        <PlantStatusChips plant={plant} size="lg" />

        {plant.notes && <PlantNotes notes={plant.notes} />}
      </div>
      <WaterPlantButton itemId={plant.id} />

      <DeletePlantButton />
    </div>
  )
}
