import { Button, Form, Input, Textarea } from '@heroui/react'
import { FC } from 'react'
import { MenagePlantFormProps } from './types'
import { usePlantForm, wateringFrequencyOptions } from '../../lib'
import { PlantFormHeader } from '../plant-form-header'
import { FormCard, FormDatepicker, TextInput } from '@shared'
import { FrequencySelect } from '../frequency-select'

export const MenagePlantForm: FC<MenagePlantFormProps> = ({ plant }) => {
  const {
    control,
    register,
    onSubmit,
    // watch,
    // formState:
    // { errors },
  } = usePlantForm(plant)

  return (
    <div className="flex flex-col">
      <PlantFormHeader isEditMode={!!plant} />
      <Form
        validationBehavior="aria"
        className="flex flex-col gap-4 mx-4 my-6"
        onSubmit={onSubmit}
      >
        <FormCard>
          <TextInput label="Ласковое имя" {...register('nickname')} />
          <TextInput label="Название" {...register('plant_type')} />
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
