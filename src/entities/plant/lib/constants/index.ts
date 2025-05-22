import { PlantModel } from '@entities'

export const MIN_DAYS = 10

export const EMPTY_PLANT: PlantModel = {
  id: '',
  plant_type: '',
  nickname: '',
  wateringIntervalDays: null,
  lastWateredDate: '',
  nextWateringDate: null,
  // location: undefined,
  // notes: undefined,
  // photoUrl: undefined,
  addedDate: '',
}
