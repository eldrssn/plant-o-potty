import { useEffect } from 'react'
import { usePlantsStore } from 'entities/plant/model/store'
import { getPlantsFromStorage } from '@entities'

export const useInitPlants = () => {
  const { setPlants } = usePlantsStore()

  useEffect(() => {
    const localPlants = getPlantsFromStorage()
    if (localPlants.length) {
      setPlants(localPlants)
    }
  }, [setPlants])
}
