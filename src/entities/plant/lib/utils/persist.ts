import { PlantModel } from 'entities/plant/model'

const PLANTS_KEY = 'plants-list'

export const getPlantsFromStorage = (): PlantModel[] => {
  try {
    const data = localStorage.getItem(PLANTS_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const savePlantsToStorage = (plants: PlantModel[]) => {
  try {
    localStorage.setItem(PLANTS_KEY, JSON.stringify(plants))
  } catch (error) {
    console.warn(`Error: ${error}`)
  }
}
