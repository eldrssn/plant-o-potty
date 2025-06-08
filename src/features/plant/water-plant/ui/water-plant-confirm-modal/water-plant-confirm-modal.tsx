import { FC } from 'react'
import {
  ModalHeader,
  Modal,
  ModalContent,
  ModalFooter,
  Button,
} from '@heroui/react'

import { ModalProps } from './types'

import { useWaterPlantConfirm } from '../../model'

export const WaterPlantConfirmModal: FC<ModalProps> = ({ onClose, isOpen }) => {
  const { handleConfirm } = useWaterPlantConfirm(onClose)

  // if (!itemId) return <></>

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
          Полить это растение?
        </ModalHeader>
        <ModalFooter>
          <Button color="primary" className="w-full" onPress={handleConfirm}>
            Да, полить
          </Button>
          <Button color="default" className="w-full" onPress={onClose}>
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
