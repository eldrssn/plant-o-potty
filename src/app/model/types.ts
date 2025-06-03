export interface ModalsStore {
  submitCallback?: () => void
  setSubmitCallback: (cb: () => void) => void

  isShowedModalDeletePlant: boolean
  showModalDeletePlant: () => void
  hideModalDeletePlant: () => void

  isShowedModalCreatePlant: boolean
  showModalCreatePlant: () => void
  hideModalCreatePlant: () => void

  isShowedModalUpdatePlant: boolean
  showModalUpdatePlant: () => void
  hideModalUpdatePlant: () => void

  isShowedModalWaterPlant: boolean
  showModalWaterPlant: () => void
  hideModalWaterPlant: () => void
}
