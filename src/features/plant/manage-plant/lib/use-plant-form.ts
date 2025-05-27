import { v4 as uuidv4 } from 'uuid'

import { EMPTY_PLANT, usePlantsStore } from '@entities'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ManagePlantFormData, managePlantFormSchema } from '../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlantFormType } from './types'

export const usePlantForm = ({ plant, mode }: PlantFormType) => {
  const { addPlant, updatePlant } = usePlantsStore()

  const form = useForm<ManagePlantFormData>({
    resolver: zodResolver(managePlantFormSchema),
    defaultValues: EMPTY_PLANT,
    values: plant || EMPTY_PLANT,
  })

  const onSubmit: SubmitHandler<ManagePlantFormData> = (data) => {
    if (mode === 'edit') {
      updatePlant(data)
      return
    }

    const newPlant = {
      ...data,
      id: uuidv4(),
    }

    addPlant(newPlant)
  }

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
