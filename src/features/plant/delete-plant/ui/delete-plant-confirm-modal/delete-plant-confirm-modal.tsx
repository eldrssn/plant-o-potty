import { FC } from 'react'
import { ModalProps } from './types'

import {
  ModalHeader,
  Modal,
  ModalContent,
  ModalFooter,
  Button,
} from '@heroui/react'

import { useDeletePlantConfirm } from '../../model'

export const DeletePlantConfirmModal: FC<ModalProps> = ({
  onClose,
  isOpen,
}) => {
  const { itemId, handleDelete } = useDeletePlantConfirm(onClose)

  if (!itemId) return <></>

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
          Удалить это растение?
        </ModalHeader>
        <ModalFooter>
          <Button color="warning" className="w-full" onPress={handleDelete}>
            Да, удалить
          </Button>
          <Button color="default" className="w-full" onPress={onClose}>
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
