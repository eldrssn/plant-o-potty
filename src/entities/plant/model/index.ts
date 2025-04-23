export interface PlantModel {
  id: string
  name: string
  wateringIntervalDays: number
  lastWateredDate: string | null
  nextWateringDate: string | null
  location?: string
  notes?: string
  photoUrl?: string | null
  addedDate: string
}
