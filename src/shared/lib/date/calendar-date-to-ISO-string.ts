import { CalendarDate } from '@internationalized/date'

export const calendarDateToISOString = (
  calendarDate?: CalendarDate | null
): string | null => {
  if (!calendarDate) return null

  return `${calendarDate.toString()}T00:00:00.000Z`
}
