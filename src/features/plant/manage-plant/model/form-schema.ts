import { z } from 'zod'

export const managePlantFormSchema = z.object({
  id: z.string(),
  nickname: z.string().optional(),
  plant_type: z.string().min(1, 'Укажите название'),
  photoUrl: z.string().nullable().optional(),
  wateringIntervalDays: z
    .number({ invalid_type_error: 'Обязательное поле' })
    .int()
    .min(1)
    .max(75),
  lastWateredDate: z.string({ invalid_type_error: 'Обязательное поле' }),
  notes: z.string().optional(),
  addedDate: z.string(),
})

export type ManagePlantFormData = z.infer<typeof managePlantFormSchema>
