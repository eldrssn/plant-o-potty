import { z } from 'zod'

export const managePlantFormSchema = z.object({
  id: z.string(),
  nickname: z.string().optional(),
  plant_type: z.string().min(1, 'Укажите вид'),
  photoUrl: z.string().nullable().optional(),
  wateringIntervalDays: z.number().int().min(1).max(60).optional(),
  lastWateredDate: z.string().nullable().optional(),
  notes: z.string().optional(),
  addedDate: z.string(),
})

export type ManagePlantFormData = z.infer<typeof managePlantFormSchema>
