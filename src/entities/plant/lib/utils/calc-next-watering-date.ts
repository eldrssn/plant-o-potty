export const calcNextWateringDate = (
  lastDateISO: string,
  intervalDays: number
): string => {
  const lastDate = new Date(lastDateISO)

  const nextDate = new Date(
    lastDate.getTime() + intervalDays * 24 * 60 * 60 * 1000
  )

  return nextDate.toISOString()
}
