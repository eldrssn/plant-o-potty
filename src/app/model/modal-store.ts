import { create } from 'zustand'
import { ModalsStore } from './types'

export const useModalsStore = create<ModalsStore>((set) => ({
  submitCallback: undefined,
  setSubmitCallback: (cb: () => void) => set({ submitCallback: cb }),

  isShowedModalDeletePlant: false,
  showModalDeletePlant: () => set({ isShowedModalDeletePlant: true }),
  hideModalDeletePlant: () => set({ isShowedModalDeletePlant: false }),

  isShowedModalCreatePlant: false,
  showModalCreatePlant: () => set({ isShowedModalCreatePlant: true }),
  hideModalCreatePlant: () => set({ isShowedModalCreatePlant: false }),

  isShowedModalUpdatePlant: false,
  showModalUpdatePlant: () => set({ isShowedModalUpdatePlant: true }),
  hideModalUpdatePlant: () => set({ isShowedModalUpdatePlant: false }),

  isShowedModalWaterPlant: false,
  showModalWaterPlant: () => set({ isShowedModalWaterPlant: true }),
  hideModalWaterPlant: () => set({ isShowedModalWaterPlant: false }),
}))
