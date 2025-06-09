import {
  getDaysDifferenceFromNow,
  PlantModel,
  WateringStatusTypes,
} from 'entities'

export const groupPlantsByStatus = (
  plants: PlantModel[]
): Record<WateringStatusTypes, PlantModel[]> => {
  const current: Array<{ plant: PlantModel; diff: number }> = []
  const future: Array<{ plant: PlantModel; diff: number }> = []

  for (const plant of plants) {
    const diff = getDaysDifferenceFromNow(plant.nextWateringDate)

    if (diff === null) continue

    if (diff <= 0) {
      current.push({ plant, diff })
    } else {
      future.push({ plant, diff })
    }
  }

  current.sort((a, b) => a.diff - b.diff)
  future.sort((a, b) => a.diff - b.diff)

  return {
    current: current.map((i) => i.plant),
    future: future.map((i) => i.plant),
  }
}
