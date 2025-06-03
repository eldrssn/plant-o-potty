import { useParams } from 'react-router-dom'
import { addToast } from '@heroui/react'
import { usePlantsStore } from 'entities'
import { TODAY_DATE_ISO } from '../lib'

export const useWaterPlantConfirm = (onClose: () => void) => {
  const { itemId } = useParams()
  const { waterPlant } = usePlantsStore()

  const handleDelete = () => {
    if (!itemId) return
    waterPlant(itemId, TODAY_DATE_ISO)
    onClose()
    addToast({
      title: 'Растение полито!',
      color: 'success',
    })
  }

  return {
    itemId,
    handleDelete,
  }
}
