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
  lastWateredDate: z.string({ invalid_type_error: 'Обязательное поле' }).refine(
    (val) => {
      const inputDate = new Date(val)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return inputDate <= today
    },
    {
      message: 'Дата не может быть позже сегодняшнего дня',
    }
  ),
  notes: z.string().optional(),
  addedDate: z.string(),
})

export type ManagePlantFormData = z.infer<typeof managePlantFormSchema>
