import { z } from 'zod'

export const managePlantFormSchema = z.object({
  nickname: z.string().min(1, 'Укажите имя').optional(),
  plant_type: z.string().min(1, 'Укажите вид'),
  photoUrl: z.string().nullable().optional(),
  wateringIntervalDays: z.number().int().min(1).max(60).optional(),
  lastWateredDate: z.string().nullable().optional(),
  notes: z.string().optional(),
})

export type ManagePlantFormData = z.infer<typeof managePlantFormSchema>
