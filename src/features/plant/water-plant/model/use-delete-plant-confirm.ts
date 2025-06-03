import {
  // useNavigate,
  useParams,
} from 'react-router-dom'
import { usePlantsStore } from 'entities'
// import { NAV_ROUTES } from '@app'

// TODO: нужно ли вовзращаться к списку растений стразу?
export const useWaterPlantConfirm = (onClose: () => void) => {
  // const navigate = useNavigate()
  const { itemId } = useParams()
  const { waterPlant } = usePlantsStore()

  const newWataringDateISO = new Date().toISOString()

  const handleDelete = () => {
    if (!itemId) return
    waterPlant(itemId, newWataringDateISO)
    // navigate(NAV_ROUTES.PLANTS.path)
    onClose()
  }

  return {
    itemId,
    handleDelete,
  }
}
