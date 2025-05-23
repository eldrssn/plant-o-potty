import { PlantsState } from 'entities/plant/model'
import { savePlantsToStorage } from './persist'

export const persistAndSet = (
  fn: (state: PlantsState) => Partial<PlantsState>
) => {
  const next = fn(get())
  if (next.plants) {
    savePlantsToStorage(next.plants)
  }
  set(() => next)
}
