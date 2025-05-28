import { useNavigate, useParams } from 'react-router-dom'
import { usePlantsStore } from 'entities'
import { NAV_ROUTES } from '@app'

export const useDeletePlantConfirm = (onClose: () => void) => {
  const navigate = useNavigate()
  const { itemId } = useParams()
  const { deletePlant } = usePlantsStore()

  const handleDelete = () => {
    if (!itemId) return
    deletePlant(itemId)
    navigate(NAV_ROUTES.PLANTS.path)
    onClose()
  }

  return {
    itemId,
    handleDelete,
  }
}
