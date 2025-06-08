export interface PlantModel {
  id: string
  nickname?: string
  plant_type: string
  wateringIntervalDays: number
  lastWateredDate: string
  nextWateringDate: string | null
  location?: string
  notes?: string
  photoUrl?: string | null
  addedDate: string
}

export interface PlantsState {
  plants: PlantModel[]
  isLoading: boolean
  createPlant: (newPlant: PlantModel) => void
  deletePlant: (plantId: string) => void
  waterPlant: (plantId: string) => void
  updatePlant: (updatedPlant: PlantModel) => void
  setPlants: (plants: PlantModel[]) => void
  setLoading: (loading: boolean) => void
}

export enum WateringStatusTypes {
  OVERDUE = 'overdue',
  TODAY = 'today',
  FUTURE = 'future',
}
