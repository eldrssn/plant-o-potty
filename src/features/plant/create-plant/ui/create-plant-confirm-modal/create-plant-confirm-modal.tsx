import { FC } from 'react'
import {
  ModalHeader,
  Modal,
  ModalContent,
  ModalFooter,
  Button,
} from '@heroui/react'

import { useCreatePlantConfirm } from '../../model'
import { ModalProps } from './types'

export const CreatePlantConfirmModal: FC<ModalProps> = ({
  onClose,
  isOpen,
}) => {
  const { handleSubmit } = useCreatePlantConfirm(onClose)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
          Добавить новое растение?
        </ModalHeader>
        <ModalFooter>
          <Button color="success" className="w-full" onPress={handleSubmit}>
            Да, добавить
          </Button>
          <Button color="default" className="w-full" onPress={onClose}>
            Нет
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
