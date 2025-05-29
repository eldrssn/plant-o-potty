import { PlantListItem, usePlantsStore } from 'entities'
import { CreatePlantButton } from 'features'

export const PlantsList = () => {
  const { plants } = usePlantsStore()

  return (
    <main className="flex flex-col gap-4 px-4 pb-32">
      {plants.map((plant) => (
        <PlantListItem key={plant.id} plant={plant} />
      ))}
      {!plants.length && (
        <p className="p-10 pb-20 text-2xl text-center">Нет растений 😬</p>
      )}
      <CreatePlantButton />
    </main>
  )
}
