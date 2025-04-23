import { PlantModel } from '../model'
import type { PlantState } from './types' // Импортируем типы

// Логика добавления растения
// Принимает текущее состояние и новое растение
// Возвращает частичное состояние для обновления
export const addPlantLogic = (state: PlantState, newPlant: PlantModel): Partial<PlantState> => {
  return { plants: [...state.plants, newPlant] }
}

// Логика удаления растения
export const deletePlantLogic = (state: PlantState, plantId: string): Partial<PlantState> => {
  return { plants: state.plants.filter((plant) => plant.id !== plantId) }
}

// Логика полива растения
export const waterPlantLogic = (
  state: PlantState,
  plantId: string,
  newLastWateredDateISO: string
): Partial<PlantState> => {
  const targetPlantIndex = state.plants.findIndex((p) => p.id === plantId)
  if (targetPlantIndex === -1) {
    return {} // Возвращаем пустой объект, если растение не найдено (нет изменений)
  }

  const targetPlant = state.plants[targetPlantIndex]

  // Вспомогательная функция расчета (можно вынести в shared/lib, если она общая)
  const calculateNext = (lastWatered: string, interval: number): string | null => {
    const next = new Date(lastWatered)
    next.setDate(next.getDate() + interval)
    return next.toISOString()
  }

  const updatedPlant: PlantModel = {
    ...targetPlant,
    lastWateredDate: newLastWateredDateISO,
    nextWateringDate: calculateNext(newLastWateredDateISO, targetPlant.wateringIntervalDays),
  }

  const updatedPlants = [...state.plants]
  updatedPlants[targetPlantIndex] = updatedPlant

  return { plants: updatedPlants }
}

// Логика обновления растения
export const updatePlantLogic = (state: PlantState, updatedPlant: PlantModel): Partial<PlantState> => {
  return {
    plants: state.plants.map((p) => (p.id === updatedPlant.id ? updatedPlant : p)),
  }
}

// Простые сеттеры можно оставить в store.ts или тоже вынести для единообразия
export const setPlantsLogic = (plants: PlantModel[]): Partial<PlantState> => {
  return { plants }
}

export const setLoadingLogic = (loading: boolean): Partial<PlantState> => {
  return { isLoading: loading }
}
