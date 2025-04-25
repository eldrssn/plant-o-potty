import { PlantListItem, usePlantsStore } from 'entities'

export const PlantsPage = () => {
  const { plants } = usePlantsStore()

  return (
    <main className="flex flex-col gap-4 px-4 pb-20">
      {plants.map((plant) => (
        <PlantListItem key={plant.id} plant={plant} />
      ))}
    </main>
  )
}
