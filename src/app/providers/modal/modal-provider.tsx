import { FC, PropsWithChildren } from 'react'
import { useModalsStore } from 'app/model'
import {
  CreatePlantConfirmModal,
  DeletePlantConfirmModal,
  UpdatePlantConfirmModal,
  WaterPlantConfirmModal,
} from 'features'

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const {
    isShowedModalDeletePlant,
    isShowedModalCreatePlant,
    isShowedModalUpdatePlant,
    isShowedModalWaterPlant,
    hideModalDeletePlant,
    hideModalCreatePlant,
    hideModalUpdatePlant,
    hideModalWaterPlant,
  } = useModalsStore()

  return (
    <>
      {children}
      <DeletePlantConfirmModal
        isOpen={isShowedModalDeletePlant}
        onClose={hideModalDeletePlant}
      />
      <CreatePlantConfirmModal
        isOpen={isShowedModalCreatePlant}
        onClose={hideModalCreatePlant}
      />
      <UpdatePlantConfirmModal
        isOpen={isShowedModalUpdatePlant}
        onClose={hideModalUpdatePlant}
      />

      <WaterPlantConfirmModal
        isOpen={isShowedModalWaterPlant}
        onClose={hideModalWaterPlant}
      />
    </>
  )
}
