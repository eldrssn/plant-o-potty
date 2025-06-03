import { useParams } from 'react-router-dom'
import { usePlantsStore } from 'entities'

export const useWaterPlantConfirm = (onClose: () => void) => {
  const { itemId } = useParams()
  const { waterPlant } = usePlantsStore()

  const newWataringDateISO = new Date().toISOString()

  const handleDelete = () => {
    if (!itemId) return
    waterPlant(itemId, newWataringDateISO)
    onClose()
  }

  return {
    itemId,
    handleDelete,
  }
}
