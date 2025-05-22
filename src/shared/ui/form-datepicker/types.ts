import { Control } from 'react-hook-form'
import { DatePickerProps } from '@heroui/react'
import { ManagePlantFormData } from 'features/plant/manage-plant/model'

export interface FormDatepickerProps extends DatePickerProps {
  control: Control<ManagePlantFormData, unknown, ManagePlantFormData>
  name: keyof ManagePlantFormData
}
