import { create, StateCreator } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { PlantsState } from './types'
import * as actions from './actions'

const storeCreator: StateCreator<PlantsState> = (set) => ({
  plants: [],
  isLoading: false,

  setPlants: (plants) => set(() => actions.setPlantsLogic(plants)),
  setLoading: (loading) => set(() => actions.setLoadingLogic(loading)),
  addPlant: (plant) => set((state) => actions.addPlantLogic(state, plant)),
  deletePlant: (id) => set((state) => actions.deletePlantLogic(state, id)),
  waterPlant: (id, date) =>
    set((state) => actions.waterPlantLogic(state, id, date)),
  updatePlant: (plant) =>
    set((state) => actions.updatePlantLogic(state, plant)),
})

export const usePlantsStore = create<PlantsState>()(
  subscribeWithSelector(storeCreator)
)
