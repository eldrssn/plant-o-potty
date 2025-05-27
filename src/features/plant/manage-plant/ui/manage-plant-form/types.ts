import { PlantModel } from '@entities'

export interface MenagePlantFormProps {
  mode: 'edit' | 'create'
  plant?: PlantModel
}
