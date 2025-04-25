import { PlantModel } from '../model'

export interface PlantsState {
  plants: PlantModel[]
  isLoading: boolean
  addPlant: (newPlant: PlantModel) => void
  deletePlant: (plantId: string) => void
  waterPlant: (plantId: string, newLastWateredDate: string) => void
  updatePlant: (updatedPlant: PlantModel) => void
  setPlants: (plants: PlantModel[]) => void
  setLoading: (loading: boolean) => void
}
