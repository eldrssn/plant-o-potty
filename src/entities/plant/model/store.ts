import { create, StateCreator } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { TODAY_DATE_ISO } from '../lib'
import { PlantsState } from './types'
import * as actions from './actions'

const storeCreator: StateCreator<PlantsState> = (set) => ({
  plants: [],
  isLoading: false,

  setPlants: (plants) => set(() => actions.setPlantsLogic(plants)),
  setLoading: (loading) => set(() => actions.setLoadingLogic(loading)),
  createPlant: (plant) =>
    set((state) => actions.createPlantLogic(state, plant)),
  deletePlant: (id) => set((state) => actions.deletePlantLogic(state, id)),
  waterPlant: (id) =>
    set((state) => actions.waterPlantLogic(state, id, TODAY_DATE_ISO)),
  updatePlant: (plant) =>
    set((state) => actions.updatePlantLogic(state, plant)),
})

export const usePlantsStore = create<PlantsState>()(
  subscribeWithSelector(storeCreator)
)
