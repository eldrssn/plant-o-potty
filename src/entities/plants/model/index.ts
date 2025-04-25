export interface PlantModel {
  id: string
  nickname?: string
  plant_type: string
  wateringIntervalDays: number
  lastWateredDate: string | null
  nextWateringDate: string | null
  location?: string
  notes?: string
  photoUrl?: string | null
  addedDate: string
}
