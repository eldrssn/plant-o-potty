import { FC } from 'react'
import { PlantFormHeaderProps } from './types'

export const PlantFormHeader: FC<PlantFormHeaderProps> = ({ isUpdateMode }) => (
  <header className="mt-6 mb-4 text-center text-md">
    {isUpdateMode ? 'Редактирование растения' : 'Добавление растения'}
  </header>
)
