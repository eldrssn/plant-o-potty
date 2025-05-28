import { PlantModel } from '@entities'

export type PlantFormType = {
  plant?: PlantModel
  mode: 'create' | 'update'
}
