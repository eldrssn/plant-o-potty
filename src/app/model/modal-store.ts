import { create } from 'zustand'
import { ModalsStore } from './types'

export const useModalsStore = create<ModalsStore>((set) => ({
  isShowedModalDeletePlantConfirm: false,
  showModalDeletePlantConfirm: () =>
    set({ isShowedModalDeletePlantConfirm: true }),
  hideModalDeletePlantConfirm: () =>
    set({ isShowedModalDeletePlantConfirm: false }),
}))
