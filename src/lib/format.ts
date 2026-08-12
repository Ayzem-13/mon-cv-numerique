const MONTHS = [
  'janv',
  'févr',
  'mars',
  'avr',
  'mai',
  'juin',
  'juil',
  'août',
  'sept',
  'oct',
  'nov',
  'déc',
]

function parse(iso: string): Date {
  const [year, month] = iso.split('-').map(Number)
  return new Date(year, (month ?? 1) - 1, 1)
}

export function formatMonth(iso: string): string {
  const date = parse(iso)
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

export function formatRange(from: string, to?: string): string {
  return `${formatMonth(from)} → ${to ? formatMonth(to) : "aujourd'hui"}`
}

export function ageOn(isoDate: string, now = new Date()): number {
  const [year, month, day] = isoDate.split('-').map(Number)
  const years = now.getFullYear() - year
  const beforeBirthday =
    now.getMonth() + 1 < month || (now.getMonth() + 1 === month && now.getDate() < day)
  return beforeBirthday ? years - 1 : years
}

export function elapsedSince(iso: string, now = new Date()): string {
  const start = parse(iso)
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())

  if (months < 1) return 'ce mois-ci'
  if (months < 12) return `${months} mois`

  const years = Math.floor(months / 12)
  const rest = months % 12
  return rest === 0
    ? `${years} an${years > 1 ? 's' : ''}`
    : `${years} an${years > 1 ? 's' : ''} ${rest} m`
}

export function currentYear(): number {
  return new Date().getFullYear()
}
