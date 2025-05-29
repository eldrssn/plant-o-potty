import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { NAV_ROUTES } from '@app'
import { usePlantsStore } from '@entities'
import { ManagePlantFormData, managePlantFormSchema } from '../model'
import { EMPTY_MANAGE_FORM } from './constants'
import { PlantFormType } from './types'

export const usePlantForm = ({ plant, mode }: PlantFormType) => {
  const { createPlant, updatePlant } = usePlantsStore()

  const navigate = useNavigate()

  const form = useForm<ManagePlantFormData>({
    resolver: zodResolver(managePlantFormSchema),
    defaultValues: EMPTY_MANAGE_FORM,
    values: plant || EMPTY_MANAGE_FORM,
  })

  const onSubmit: SubmitHandler<ManagePlantFormData> = (data) => {
    if (mode === 'update') {
      updatePlant(data)
      navigate(-1)
      return
    }

    const newPlantId = uuidv4()
    const newPlant = {
      ...data,
      id: newPlantId,
    }

    createPlant(newPlant)
    navigate(NAV_ROUTES.PLANTS.path + '/' + newPlantId)
  }

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
