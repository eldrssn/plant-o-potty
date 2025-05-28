import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { EMPTY_PLANT, usePlantsStore } from '@entities'
import { ManagePlantFormData, managePlantFormSchema } from '../model'
import { PlantFormType } from './types'
import { NAV_ROUTES } from '@app'

export const usePlantForm = ({ plant, mode }: PlantFormType) => {
  const { addPlant, updatePlant } = usePlantsStore()
  const navigate = useNavigate()

  const form = useForm<ManagePlantFormData>({
    resolver: zodResolver(managePlantFormSchema),
    defaultValues: EMPTY_PLANT,
    values: plant || EMPTY_PLANT,
  })

  const onSubmit: SubmitHandler<ManagePlantFormData> = (data) => {
    if (mode === 'edit') {
      updatePlant(data)
      navigate(-1)
      return
    }

    const newPlantId = uuidv4()
    const newPlant = {
      ...data,
      id: newPlantId,
    }

    addPlant(newPlant)
    navigate(NAV_ROUTES.PLANTS.path + '/' + newPlantId)
  }

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
