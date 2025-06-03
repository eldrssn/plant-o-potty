import { MIN_DAYS } from '../constants'
import { pluralizeDays } from './pluralize-days'

export const getWateringStatus = ({
  date,
  difference,
}: {
  date: string | null
  difference: number | null
}) => {
  if (date === null || difference === null) return

  if (difference === 0) {
    return 'Сегодня'
  }

  if (difference < 0) {
    return `Просрочен на  ${Math.abs(difference)} ${pluralizeDays(difference)}`
  }

  if (difference > MIN_DAYS || difference < -MIN_DAYS) {
    return `${date}`
  }

  return `Через ${difference} ${pluralizeDays(difference)}`
}
