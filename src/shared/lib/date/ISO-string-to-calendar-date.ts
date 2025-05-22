import { CalendarDate, parseDate } from '@internationalized/date'

export const isoStringToCalendarDate = (
  isoString?: string
): CalendarDate | null => {
  if (!isoString) return null

  try {
    const dateOnly = isoString.split('T')[0]
    return parseDate(dateOnly)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.error('Invalid date string:', isoString)
    return null
  }
}
