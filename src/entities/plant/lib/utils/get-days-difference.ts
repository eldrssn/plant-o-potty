export const getDaysDifference = (
  isoDate1: string | null,
  isoDate2: string | null
) => {
  if (isoDate1 === null || isoDate2 === null) return null

  const toUTCDateOnly = (iso: string) => {
    const d = new Date(iso)
    return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
  }

  const utc1 = toUTCDateOnly(isoDate1)
  const utc2 = toUTCDateOnly(isoDate2)

  const msInDay = 1000 * 60 * 60 * 24
  return Math.floor((utc2 - utc1) / msInDay)
}
