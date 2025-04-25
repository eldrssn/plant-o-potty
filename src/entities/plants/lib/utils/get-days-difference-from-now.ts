import { getDaysDifference } from './get-days-difference'

const now = new Date().toISOString()

export const getDaysDifferenceFromNow = (isoDate: string | null) => {
  return getDaysDifference(now, isoDate)
}
