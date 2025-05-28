import { FC, PropsWithChildren } from 'react'
import { useModalsStore } from 'app/model'
import { DeletePlantConfirmModal } from 'features'

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isShowedModalDeletePlantConfirm, hideModalDeletePlantConfirm } =
    useModalsStore()

  return (
    <>
      {children}
      <DeletePlantConfirmModal
        isOpen={isShowedModalDeletePlantConfirm}
        onClose={hideModalDeletePlantConfirm}
      />
    </>
  )
}
