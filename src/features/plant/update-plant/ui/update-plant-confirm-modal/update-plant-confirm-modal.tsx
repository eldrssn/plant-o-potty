import { FC } from 'react'
import {
  ModalHeader,
  Modal,
  ModalContent,
  ModalFooter,
  Button,
} from '@heroui/react'

import { useUpdatePlantConfirm } from '../../model'
import { ModalProps } from './types'

export const UpdatePlantConfirmModal: FC<ModalProps> = ({
  onClose,
  isOpen,
}) => {
  const { handleSubmit } = useUpdatePlantConfirm(onClose)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
          Сохранить изменения?
        </ModalHeader>
        <ModalFooter>
          <Button color="success" className="w-full" onPress={handleSubmit}>
            Да, сохранить
          </Button>
          <Button color="default" className="w-full" onPress={onClose}>
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
