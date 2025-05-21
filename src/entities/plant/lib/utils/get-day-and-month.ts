export const getDayAndMonth = (dateISO: string | null) => {
  if (dateISO === null) return null

  return new Date(dateISO).toLocaleDateString('ru-RU', {
    month: 'numeric',
    day: 'numeric',
  })
}
