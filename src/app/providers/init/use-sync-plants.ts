import { useEffect } from 'react'
import { usePlantsStore } from 'entities/plant/model/store'
import { savePlantsToStorage } from '@entities'

export const useSyncPlants = () => {
  const store = usePlantsStore

  useEffect(() => {
    const unsubscribe = store.subscribe(
      (state) => state.plants,
      (newPlants) => {
        savePlantsToStorage(newPlants)
      }
    )
    return () => unsubscribe()
  }, [store])
}
