export function pluralizeDays(n: number) {
  const forms = ['день', 'дня', 'дней']
  const abs = Math.abs(n)
  const lastTwo = abs % 100
  const last = abs % 10

  if (lastTwo >= 11 && lastTwo <= 14) return forms[2]
  if (last === 1) return forms[0]
  if (last >= 2 && last <= 4) return forms[1]
  return forms[2]
}
