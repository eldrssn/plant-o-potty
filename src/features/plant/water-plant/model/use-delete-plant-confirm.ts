import { useParams } from 'react-router-dom'
import { usePlantsStore } from 'entities'
import { TODAY_DATE_ISO } from '../lib'

export const useWaterPlantConfirm = (onClose: () => void) => {
  const { itemId } = useParams()
  const { waterPlant } = usePlantsStore()

  const handleDelete = () => {
    if (!itemId) return
    waterPlant(itemId, TODAY_DATE_ISO)
    onClose()
  }

  return {
    itemId,
    handleDelete,
  }
}
