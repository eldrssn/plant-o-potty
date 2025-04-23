const today = new Date()

// Вспомогательная функция для получения даты в прошлом/будущем
export const getDateRelativeToToday = (daysOffset: number): string => {
  const date = new Date(today)
  date.setDate(today.getDate() + daysOffset)
  return date.toISOString()
}

// Вспомогательная функция для расчета следующей даты полива
export const calculateNextWatering = (lastWateredISO: string | null, intervalDays: number): string | null => {
  if (!lastWateredISO) {
    return null
  }
  const lastWateredDate = new Date(lastWateredISO)
  lastWateredDate.setDate(lastWateredDate.getDate() + intervalDays)
  return lastWateredDate.toISOString()
}

export const pseudoUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
