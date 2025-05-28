import { FC } from 'react'
import { Button, Form, Input, Textarea } from '@heroui/react'

import { useModalsStore } from '@app'
import { FormCard, FormDatepicker, TextInput } from '@shared'
import { usePlantForm, wateringFrequencyOptions } from '../../lib'
import { PlantFormHeader } from '../plant-form-header'
import { FrequencySelect } from '../frequency-select'
import { ManagePlantFormProps } from './types'

export const ManagePlantForm: FC<ManagePlantFormProps> = ({ plant, mode }) => {
  const { showModalUpdatePlant, showModalCreatePlant, setSubmitCallback } =
    useModalsStore()

  const {
    control,
    register,
    onSubmit,
    // watch,
    // formState:
    // { errors },
  } = usePlantForm({ plant, mode })

  const showModal =
    mode === 'create' ? showModalCreatePlant : showModalUpdatePlant

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    showModal()
    setSubmitCallback(() => onSubmit(e))
  }

  return (
    <div className="flex flex-col">
      <PlantFormHeader isUpdateMode={mode === 'update'} />
      <Form
        validationBehavior="aria"
        className="flex flex-col gap-4 mx-4 my-6"
        onSubmit={handleSumbit}
      >
        <FormCard>
          <TextInput label="Название" {...register('plant_type')} isRequired />
          <TextInput label="Ласковое имя" {...register('nickname')} />
        </FormCard>

        <FormCard>
          {/* TODO: преобразовать в нормальный инпут с фото и всеми стейтами */}
          <Input
            label="Фото"
            variant="flat"
            isClearable
            type="file"
            className="text-xl"
            size="lg"
            labelPlacement="outside"
            fullWidth={false}
            {...register('photoUrl')}
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
        >
          Сохранить
        </Button>
      </Form>
    </div>
  )
}
