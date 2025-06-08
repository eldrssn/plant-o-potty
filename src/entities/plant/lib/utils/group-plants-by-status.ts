import {
  getDaysDifferenceFromNow,
  PlantModel,
  WateringStatusTypes,
} from 'entities'

export const groupPlantsByStatus = (
  plants: PlantModel[]
): Record<WateringStatusTypes, PlantModel[]> => {
  const today: PlantModel[] = []
  const overdue: Array<{ plant: PlantModel; diff: number }> = []
  const future: Array<{ plant: PlantModel; diff: number }> = []

  for (const plant of plants) {
    const diff = getDaysDifferenceFromNow(plant.nextWateringDate)
    if (diff === null) continue

    if (diff < 0) {
      overdue.push({ plant, diff })
    } else if (diff === 0) {
      today.push(plant)
    } else {
      future.push({ plant, diff })
    }
  }

  overdue.sort((a, b) => a.diff - b.diff)
  future.sort((a, b) => a.diff - b.diff)

  return {
    today,
    overdue: overdue.map((i) => i.plant),
    future: future.map((i) => i.plant),
  }
}
