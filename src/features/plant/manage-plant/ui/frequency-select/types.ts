import { AutocompleteOptionType } from '@shared'
import { Control } from 'react-hook-form'
import { ManagePlantFormData } from '../../model'

export interface FrequencySelectProps {
  control: Control<ManagePlantFormData, unknown, ManagePlantFormData>
  options: AutocompleteOptionType[]
}
