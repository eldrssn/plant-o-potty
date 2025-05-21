import { create } from 'zustand'

import type { PlantsState } from './types' // Импорт типов
import * as actions from './actions' // Импортируем всю логику экшенов

export const usePlantsStore = create<PlantsState>((set) => ({
  plants: [],
  isLoading: false,

  // --- Действия ---
  // Используем импортированную логику внутри set
  setPlants: (plants) => set(() => actions.setPlantsLogic(plants)),

  setLoading: (loading) => set(() => actions.setLoadingLogic(loading)),

  addPlant: (newPlant) =>
    set((state) => actions.addPlantLogic(state, newPlant)),

  deletePlant: (plantId) =>
    set((state) => actions.deletePlantLogic(state, plantId)),

  waterPlant: (plantId, newDate) =>
    set((state) => actions.waterPlantLogic(state, plantId, newDate)),

  updatePlant: (updatedPlant) =>
    set((state) => actions.updatePlantLogic(state, updatedPlant)),
}))
