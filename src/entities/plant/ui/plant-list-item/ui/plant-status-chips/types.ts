import { ChipSizeType } from '@shared'
import { PlantModel } from 'entities/plant/model'

export interface PlantStatusChipsProps {
  plant: PlantModel
  size?: ChipSizeType
}
