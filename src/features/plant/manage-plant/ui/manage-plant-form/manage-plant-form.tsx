import { FC } from 'react'
import { Button, Form, Textarea } from '@heroui/react'

import { useModalsStore } from '@app'
import { FormCard, FormDatepicker, ImageUploader, TextInput } from '@shared'
import { usePlantForm, wateringFrequencyOptions } from '../../lib'
import { PlantFormHeader } from '../plant-form-header'
import { FrequencySelect } from '../frequency-select'
import { ManagePlantFormProps } from './types'
import { ManagePlantFormData } from '../../model'

export const ManagePlantForm: FC<ManagePlantFormProps> = ({ plant, mode }) => {
  const { showModalUpdatePlant, showModalCreatePlant, setSubmitCallback } =
    useModalsStore()

  const {
    control,
    register,
    onSubmit,
    handleSubmit,
    formState: { isDirty, errors },
  } = usePlantForm({ plant, mode })

  const showModal =
    mode === 'create' ? showModalCreatePlant : showModalUpdatePlant

  const onFormSubmit = handleSubmit(() => {
    showModal()
    setSubmitCallback(onSubmit)
  })

  return (
    <div className="flex flex-col">
      <PlantFormHeader isUpdateMode={mode === 'update'} />
      <Form
        validationBehavior="aria"
        className="flex flex-col gap-4 mx-4 my-6"
        onSubmit={onFormSubmit}
      >
        <FormCard>
          <TextInput
            label="Название"
            {...register('plant_type')}
            isRequired
            errorMessage={errors['plant_type']?.message}
          />
          <TextInput label="Ласковое имя" {...register('nickname')} />
        </FormCard>

        <FormCard>
          <ImageUploader<ManagePlantFormData>
            label="Фото растения"
            control={control}
            name="photoUrl"
          />
        </FormCard>
        <FormCard>
          <FrequencySelect
            control={control}
            options={wateringFrequencyOptions}
          />

          <FormDatepicker
            label="Последний полив"
            control={control}
            name="lastWateredDate"
          />
        </FormCard>

        <Textarea
          className="w-full"
          label="Заметка"
          isClearable
          size="lg"
          radius="lg"
          {...register('notes')}
        />

        <Button
          type="submit"
          size="lg"
          variant="shadow"
          color="success"
          className="w-full"
          isDisabled={!isDirty}
        >
          Сохранить
        </Button>
      </Form>
    </div>
  )
}
