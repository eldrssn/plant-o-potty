import { EMPTY_PLANT, PlantModel } from '@entities'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ManagePlantFormData, managePlantFormSchema } from '../model'
import { zodResolver } from '@hookform/resolvers/zod'

export const usePlantForm = (plant?: PlantModel) => {
  const form = useForm<ManagePlantFormData>({
    resolver: zodResolver(managePlantFormSchema),
    defaultValues: EMPTY_PLANT,
    values: plant || EMPTY_PLANT,
  })

  const onSubmit: SubmitHandler<ManagePlantFormData> = (data) => {
    console.log(data)
    // здесь логика сохранения
  }

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
