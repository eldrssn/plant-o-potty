import { FC } from 'react'
import { PlantFormHeaderProps } from './types'

export const PlantFormHeader: FC<PlantFormHeaderProps> = ({ isEditMode }) => (
  <header className="mt-6 mb-4 text-center text-md">
    {isEditMode ? 'Редактирование растения' : 'Добавление растения'}
  </header>
)
