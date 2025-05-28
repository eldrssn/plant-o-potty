import { PlantModel } from '@entities'

export interface ManagePlantFormProps {
  mode: 'update' | 'create'
  plant?: PlantModel
}
