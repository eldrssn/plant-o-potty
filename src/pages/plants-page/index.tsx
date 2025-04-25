import { PlantListItem, usePlantStore } from 'entities'

export const PlantsPage = () => {
  const { plants } = usePlantStore()

  return (
    <main className="flex flex-col gap-4 pb-20">
      {plants.map((plant) => (
        <PlantListItem key={plant.id} plant={plant} />
      ))}
    </main>
  )
}
